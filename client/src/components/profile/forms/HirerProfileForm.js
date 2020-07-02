import React, { Fragment, useState } from "react";

const HirerProfileForm = () => {
  const [openSocialInputs, toggleSocialInputs] = useState(false);
  return (
    <>
      <div className="form-element">
        <label htmlFor="company">Company</label>
        <input type="text" name="company" />
      </div>

      <div className="form-element">
        <label htmlFor="website">Website</label>
        <input type="text" name="website" />
      </div>

      <div className="form-element">
        <label htmlFor="location">Location</label>
        <input type="text" name="location" />
      </div>

      <div className="form-element">
        <label htmlFor="bio">Bio</label>
        <input type="text" name="bio" />
      </div>

      <div className="social-links-wrapper">
        <div
          className="btn social-links"
          onClick={() => toggleSocialInputs(!openSocialInputs)}
        >
          <span>Add social links</span>
        </div>

        {openSocialInputs && (
          <Fragment>
            <div className="form-element social-top">
              <label htmlFor="facebook-username">Facebook</label>
              <input type="text" name="facebook-username" />
            </div>

            <div className="form-element">
              <label htmlFor="linkedin-username">LinkedIn</label>
              <input type="text" name="linkedin-username" />
            </div>

            <div className="form-element">
              <label htmlFor="behance-username">Behance</label>
              <input type="text" name="behance-username" />
            </div>

            <div className="form-element">
              <label htmlFor="instagram-username">Instagram</label>
              <input type="text" name="instagram-username" />
            </div>

            <div className="form-element">
              <label htmlFor="twitter-username">Twitter</label>
              <input type="text" name="twitter-username" />
            </div>

            <div className="form-element">
              <label htmlFor="youtube-username">Youtube</label>
              <input type="text" name="youtube-username" />
            </div>
          </Fragment>
        )}
      </div>
    </>
  );
};

export default HirerProfileForm;
