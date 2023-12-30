import React from "react";

import "../styles/global.css";
import "../styles/work.css";

function Work() {
  return (
    <div className="work-page">
      <div className="work-wrapper">
        <div className="work-grid-item">
          <h1>Work With Me</h1>
          <p>
            I am currently looking for a full-time position as a Frontend
            Developer. I am also open to freelance opportunities.
          </p>
          <p>
            If you would like to work with me, please reach out to me via email
            at <a href="mailto:adityamali2003@icloud.com">Email Me</a>
          </p>
          <form action="submit" className="contact-form">
            <div className="form-group">
              {/* <label htmlFor="name">Name</label> */}
              <input type="text" id="name" placeholder="Name" />
            </div>
            <div className="form-group">
              {/* <label htmlFor="email">Email</label> */}
              <input type="email" id="email" placeholder="Email" />
            </div>
            <div className="form-group">
              {/* <label htmlFor="company">Company</label> */}
              <input type="text" id="company" placeholder="Company" />
            </div>
            <div className="form-group">
              {/* <label htmlFor="budget">Budget</label> */}
              {/* <input
                type="radio"
                id="budget"
                className="type-select"
                placeholder="Budget"
              /> */}
            </div>
            <div className="form-group">
              {/* <label htmlFor="message">Message</label> */}
              <textarea
                type="text"
                id="message"
                placeholder="Enter basic details about your project"
                rows="5"
              />
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Work;
