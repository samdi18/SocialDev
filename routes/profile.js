const express = require("express");
const config = require("config");
const router = express.Router();
const auth = require("../middleware/auth");
const checkObjectId = require("../middleware/checkObjectId");
const { check, validationResult } = require("express-validator");
// bring in normalize to give us a proper url, regardless of what user entered
const normalize = require("normalize-url");
const Profile = require("../models/Profile");
const User = require("../models/User");
const Thread = require("../models/Thread");

// @route    GET api/profile/myprofile
// @desc     Get current users profile
// @access   Private
router.get("/myprofile", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["name", "userImage"]);

    if (!profile) {
      console.log("profile finding error");
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private
router.post(
  "/",
  [auth, [check("role", "Role is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      role,
      company,
      location,
      website,
      bio,
      skills,
      status,
      githubusername,
      youtube,
      twitter,
      instagram,
      linkedin,
      facebook,
      behance,
    } = req.body;

    const profileFields = {
      user: req.user.id,
      role,
      company,
      location,
      website:
        website && website !== ""
          ? normalize(website, { forceHttps: true })
          : "",
      bio,
      skills:
        skills == undefined
          ? ""
          : skills.split(",").map((skill) => skill.trim()),
      status,
      githubusername,
    };

    console.log(profileFields.skills);
    // Build social object and add to profileFields
    const socialfields = {
      youtube,
      twitter,
      instagram,
      linkedin,
      facebook,
      behance,
    };

    for (const [key, value] of Object.entries(socialfields)) {
      if (value && value.length > 0)
        socialfields[key] = normalize(value, { forceHttps: true });
    }

    profileFields.social = socialfields;

    try {
      // Using upsert option (creates new doc if no match is found):
      let profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true, upsert: true }
      );
      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    GET api/profile
// @desc     Get all profiles
// @access   Public
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", [
      "name",
      "userImage",
    ]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
// @route    GET api/profile/user/:user_id
// @desc     Get profile by user ID
// @access   Public
router.get("/user/:user_id", checkObjectId("user_id"), async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate("user", ["name", "userImage"]);

    if (!profile) return res.status(400).json({ msg: "Profile not found" });

    return res.json(profile);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ msg: "Server error" });
  }
});

// @route    DELETE api/profile
// @desc     Delete profile, user & posts
// @access   Private
router.delete("/", auth, async (req, res) => {
  try {
    // Remove user posts
    // await Thread.deleteMany({ user: req.user.id });
    // Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    // Remove user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: "User deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/profile/experience
// @desc     Add profile experience
// @access   Private
router.put(
  "/experience",
  [
    auth,
    [
      check("title", "Title is required").not().isEmpty(),
      check("company", "Company is required").not().isEmpty(),
      check("from", "From date is required and needs to be from the past")
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      title,
      company,
      location,
      from,
      to,
      current,
      description,
    } = req.body;

    const newExp = {
      title,
      company,
      location,
      from,
      to,
      current,
      description,
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      const { experience } = profile;
      //Create new experiences

      experience.unshift(newExp);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    PUT api/profile/experience/:exp_id
// @desc     Edit profile experience
// @access   Private
router.put(
  "/experience/:exp_id",
  [
    auth,
    [
      check("title", "Title is required").not().isEmpty(),
      check("company", "Company is required").not().isEmpty(),
      check("from", "From date is required and needs to be from the past")
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      title,
      company,
      location,
      from,
      to,
      current,
      description,
    } = req.body;

    const newExp = {
      title,
      company,
      location,
      from,
      to,
      current,
      description,
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      const { experience } = profile;

      //Update an existing experience
      const expIndex = experience
        .map((element) => element.id)
        .indexOf(req.params.exp_id);

      if (expIndex > -1) {
        experience[expIndex] = newExp;
      } else {
        return res
          .status(400)
          .json({ errors: [{ msg: "Experience not found" }] });
      }
      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    DELETE api/profile/experience/:exp_id
// @desc     Delete experience from profile
// @access   Private

router.delete("/experience/:exp_id", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    profile.experience = profile.experience.filter(
      (exp) => exp._id.toString() !== req.params.exp_id
    );

    await profile.save();
    return res.status(200).json(profile);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
});

// @route    PUT api/profile/education
// @desc     Add profile education
// @access   Private

router.put(
  "/education",
  [
    auth,
    [
      check("institution", "Institution name is required").not().isEmpty(),
      check("degree", "Degree is required").not().isEmpty(),
      check("department", "Department is required"),
      check("from", "From date is required and needs to be from the past")
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { institution, degree, department, from, to, status } = req.body;

    const newEd = {
      institution,
      degree,
      department,
      from,
      to,
      status,
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      const { education } = profile;

      //Create new  education

      education.unshift(newEd);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    PUT api/profile/education/:ed_id
// @desc     Edit profile education
// @access   Private
router.put(
  "/education/:ed_id",
  [
    auth,
    [
      check("institution", "Institution name is required").not().isEmpty(),
      check("degree", "Degree is required").not().isEmpty(),
      check("department", "Department is required"),
      check("from", "From date is required and needs to be from the past")
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { institution, degree, department, from, to, status } = req.body;

    const newEd = {
      institution,
      degree,
      department,
      from,
      to,
      status,
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      const { education } = profile;

      //Update an existing experience
      const edIndex = education
        .map((element) => element._id)
        .indexOf(req.params.ed_id);

      if (edIndex > -1) {
        education[edIndex] = newEd;
      } else {
        return res
          .status(400)
          .json({ errors: [{ msg: "Education not found" }] });
      }

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    DELETE api/profile/education/:ed_id
// @desc     Delete education from profile
// @access   Private

router.delete("/education/:ed_id", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    const edIndex = profile.education
      .map((element) => element.id)
      .indexOf(req.params.ed_id);

    profile.education.splice(edIndex, 1);

    await profile.save();
    return res.status(200).json(profile);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
