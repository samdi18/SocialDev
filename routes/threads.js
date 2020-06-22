const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");

const Thread = require("../models/Thread");
const User = require("../models/User");
const checkObjectId = require("../middleware/checkObjectId");

// @route    POST api/threads
// @desc     Create a thread
// @access   Private
router.post(
  "/",
  [auth, [check("text", "Text is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");

      const newThread = new Thread({
        text: req.body.text,
        title: req.body.title,
        name: user.name,
        userImage: user.userImage,
        user: req.user.id,
      });

      const thread = await newThread.save();

      res.json(thread);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    GET api/threads
// @desc     Get all threads
// @access   Private
router.get("/", auth, async (req, res) => {
  try {
    const threads = await Thread.find().sort({ date: -1 });
    res.json(threads);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/threads/:id
// @desc     Get thread by ID
// @access   Private
router.get("/:id", [auth, checkObjectId("id")], async (req, res) => {
  try {
    const thread = await Thread.findById(req.params.id);

    res.json(thread);
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/threads/:id
// @desc     Delete a thread
// @access   Private
router.delete("/:id", [auth, checkObjectId("id")], async (req, res) => {
  try {
    const thread = await Thread.findById(req.params.id);

    if (!thread) {
      return res.status(404).json({ msg: "Thread not found" });
    }

    // Check user
    if (thread.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await thread.remove();

    res.json({ msg: "Post removed" });
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

// @route    PUT api/threads/like/:id
// @desc     Like a thread
// @access   Private
router.put("/like/:id", [auth, checkObjectId("id")], async (req, res) => {
  try {
    const thread = await Thread.findById(req.params.id);

    // Check if the thread has already been liked
    if (thread.likes.some((like) => like.user.toString() === req.user.id)) {
      return res.status(400).json({ msg: "Thread already liked" });
    }

    thread.likes.unshift({ user: req.user.id });

    await thread.save();

    return res.json(thread.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/threads/unlike/:id
// @desc     Unlike a thread
// @access   Private
router.put("/unlike/:id", [auth, checkObjectId("id")], async (req, res) => {
  try {
    const thread = await Thread.findById(req.params.id);

    // Check if the thread has not yet been liked
    if (!thread.likes.some((like) => like.user.toString() === req.user.id)) {
      return res.status(400).json({ msg: "Thread has not yet been liked" });
    }

    // remove the like
    thread.likes = thread.likes.filter(
      ({ user }) => user.toString() !== req.user.id
    );

    await thread.save();

    return res.json(thread.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    Thread api/threads/comment/:id
// @desc     Comment on a thread
// @access   Private
router.post(
  "/comment/:id",
  [
    auth,
    checkObjectId("id"),
    [check("text", "Text is required").not().isEmpty()],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");
      const thread = await Thread.findById(req.params.id);

      const newComment = {
        text: req.body.text,
        name: user.name,
        userImage: user.userImage,
        user: req.user.id,
      };

      thread.comments.unshift(newComment);

      await thread.save();

      res.json(thread.comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    DELETE api/threads/comment/:id/:comment_id
// @desc     Delete comment
// @access   Private
router.delete("/comment/:id/:comment_id", auth, async (req, res) => {
  try {
    const thread = await Thread.findById(req.params.id);

    // Pull out comment
    const comment = thread.comments.find(
      (comment) => comment.id === req.params.comment_id
    );
    // Make sure comment exists
    if (!comment) {
      return res.status(404).json({ msg: "Comment does not exist" });
    }
    // Check user
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    thread.comments = thread.comments.filter(
      ({ id }) => id !== req.params.comment_id
    );

    await thread.save();

    return res.json(thread.comments);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
