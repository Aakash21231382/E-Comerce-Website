import React, { useRef } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bkf4r3k",   // 👈 यहाँ अपनी ID डालना
        "template_payekyh",  // 👈 यहाँ template ID
        form.current,
        "ZpzhhtAaOyt5MdR6G"    // 👈 यहाँ public key
      )
      .then(
        () => {
          toast.success("Message sent successfully ");
          form.current.reset(); // form clear
        },
        (error) => {
          console.log(error);
          toast.error("Failed to send ");
        }
      );
  };

  return (
    <div className="container mt-5 pt-5">

      <div className="text-center mb-5">
        <h2 className="fw-bold">Contact Us</h2>
        <p className="text-muted">We’d love to hear from you!</p>
      </div>

      <div className="row">

        {/* Left Side */}
        <div className="col-md-4 mb-4">
          <div className="card p-4 shadow h-100">
            <h5 className="mb-4">Get in Touch</h5>

            <p><FaMapMarkerAlt className="me-2 text-warning"/> Muzaffarnagar, UP</p>
            <p><FaPhoneAlt className="me-2 text-warning"/> +91 9876543210</p>
            <p><FaEnvelope className="me-2 text-warning"/> support@aakashshop.com</p>
          </div>
        </div>

        {/* Form */}
        <div className="col-md-8 mb-4">
          <div className="card p-4 shadow">

            <h5 className="mb-4">Send Message</h5>

            {/* 👇 IMPORTANT */}
            <form ref={form} onSubmit={sendEmail}>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <input 
                    type="text" 
                    name="user_name"   // 👈 EmailJS field
                    className="form-control" 
                    placeholder="Your Name" 
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input 
                    type="email" 
                    name="user_email"  // 👈 EmailJS field
                    className="form-control" 
                    placeholder="Your Email" 
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <input 
                  type="text" 
                  name="subject"
                  className="form-control" 
                  placeholder="Subject" 
                />
              </div>

              <div className="mb-3">
                <textarea
                  name="message"   // 👈 EmailJS field
                  className="form-control"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <button className="btn btn-warning w-100">
                Send Message
              </button>

            </form>

          </div>
        </div>

      </div>

      {/* Map */}
      <div className="mt-4">
        <div className="card shadow">
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=muzaffarnagar&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>

    </div>
  );
};

export default Contact;