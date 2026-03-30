import React, { useState } from "react";

const Service = () => {
  const [activeTab, setActiveTab] = useState("delivery");

  const data = {
    delivery: {
      title: "Fast Delivery 🚚",

      desc: "We deliver products within 2-5 days with real-time tracking system."
    },
    payment: {
      title: "Secure Payment 💳",
      desc: "Multiple payment options with 100% security and encryption."
    },
    support: {
      title: "24/7 Support 🎧",
      desc: "Our support team is available anytime to help you."
    },
    return: {
      title: "Easy Return 🔄",
      desc: "7-day easy return policy with instant refund process."
    }
  };

  return (
    <div className="container mt-5 pt-5">

      {/* Heading */}
      <div className="text-center mb-4">
        <h2>Our Services</h2>
        <p className="text-muted">Explore what we offer</p>
      </div>

      {/* Tabs */}
      <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
        {Object.keys(data).map((key) => (
          <button
            key={key}
            className={`btn ${activeTab === key ? "btn-warning" : "btn-outline-dark"}`}
            onClick={() => setActiveTab(key)}
          >
            {key.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Dynamic Content */}
      <div className="card p-4 shadow text-center">
        <h4>{data[activeTab].title}</h4>
       
        <p className="text-muted">{data[activeTab].desc}</p>
      </div>

      {/* FAQ Section */}
      <div className="mt-5">
        <h3 className="text-center mb-4">Frequently Asked Questions</h3>

        <div className="accordion" id="faq">

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#q1">
                How long delivery takes?
              </button>
            </h2>
            <div id="q1" className="accordion-collapse collapse show">
              <div className="accordion-body">
                Delivery usually takes 2-5 working days.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q2">
                Is payment secure?
              </button>
            </h2>
            <div id="q2" className="accordion-collapse collapse">
              <div className="accordion-body">
                Yes, we use encrypted and secure payment systems.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q3">
                Can I return products?
              </button>
            </h2>
            <div id="q3" className="accordion-collapse collapse">
              <div className="accordion-body">
                Yes, you can return within 7 days.
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-5 p-4 service text-white rounded">
        <h4 className="text-black">Need Help?</h4>
        <p className="text-black">Contact our support team anytime</p>
        <a href="/contact" className="btn btn-warning">Contact Now</a>
        

      </div>

    </div>
  );
};

export default Service;