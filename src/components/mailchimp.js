import React from "react";

import PropTypes from "prop-types";

class Mailchimp extends React.Component {
  render() {
    return (
      <div id="mc_embed_signup">
        <form
          action="https://kdg.us11.list-manage.com/subscribe/post?u=f2f4dfed688882b52d74c63fb&amp;id=811d41b0b2&amp;f_id=0064e6e0f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_self"
          noValidate=""
        >
          <div id="mc_embed_signup_scroll">
            <h1>Signup for the newsletter ✨</h1>
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required
              />
            </div>
            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              ></div>
            </div>
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_f2f4dfed688882b52d74c63fb_811d41b0b2"
                tabindex="-1"
                value=""
              />
            </div>
            <div className="clear">
              <input
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
                value="Subscribe"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Mailchimp.propTypes = {
  styles: PropTypes.object,
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
};

export default Mailchimp;
