import React from "react";

export default function Contact() {
  return (
    <>
      <div className="contact text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 mb-3 text-center">
              <h2>Contact Us</h2>
            </div>
            <div className="col-lg-8">
              <form className="contact-form">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    required
                    id="first_name"
                    placeholder="First Name*"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="E-mail*"
                    required
                    id="contact_email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Subject*"
                    required
                    id="subject"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Message*"
                    cols="30"
                    rows="5"
                    required
                    id="message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary custom-button-2 contact_button"
                  onclick="alert(great)"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
