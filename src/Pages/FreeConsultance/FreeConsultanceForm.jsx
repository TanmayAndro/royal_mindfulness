import React, { useState } from "react";
import "./FreeConsultanceForm.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate, useLocation } from "react-router-dom";

function FreeConsultanceForm() {
  const navigate = useNavigate();
  const location = useLocation();

  /* 🔥 Data from Calendar / Slot */
  const {
    time_zone,
    free_consultance_date,
    free_consultance_time
  } = location.state || {};

  /* ✅ ALL HOOKS FIRST (VERY IMPORTANT) */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleClick = () => {
    navigate(0); // refresh page
  };

  /* 🔒 Guard AFTER hooks */
  if (!time_zone || !free_consultance_date || !free_consultance_time) {
    return (
      <div className="page-wrapper">
        <div className="content">
          <p className="error-text">
            Please select date and time first.
          </p>
          <button
            className="submit-btn"
            onClick={() => navigate("/talkspace")}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }



  const formattedDate = free_consultance_date
  ? new Date(free_consultance_date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
  : "";
  /* ✅ SUBMIT */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      free_consultance: {
        name,
        email,
        time_zone,
        phone_number: phoneNumber,
        country_code: countryCode,
        free_consultance_date,
        free_consultance_time
      }
    };

    try {
      const response = await fetch(
        "https://deedee-unchainable-optionally.ngrok-free.dev/free_consultances",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
      } else {
        setErrors(data || {});
      }
    } catch (err) {
      console.error("API ERROR:", err);
    }
  };

  return (
  <div className="free-consultance-page">
   <div className="page-wrapper">
  <div className="hero-bg"></div>

  <div className="overlay">
    <div className="content">

      {submitted ? (
        /* ✅ THANK YOU STATE — SAME CARD LAYOUT */
        <div className="thankyou-box free-consultanceform-box">
          <h2>Thanks for submitting!</h2>
          <p>Our team will contact you soon.</p>

          <button
            type="button"
            onClick={handleClick}
            className="submit-btn-tanks-box"
          >
            Refresh
          </button>
        </div>
      ) : (

        /* ✅ FORM STATE */
        <form className="free-consultanceform-box" onSubmit={handleSubmit} noValidate>

          <h1 className="title">Free Consultance Form</h1>

          {/* Name */}
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <ul className="error-list">
                {errors.name.map((msg, i) => (
                  <li key={i} className="error-item">{msg}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Email */}
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <ul className="error-list">
                {errors.email.map((msg, i) => (
                  <li key={i} className="error-item">{msg}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="field">
            <label>Time Zone</label>
            <input
              type="text"
              value={time_zone}
              readOnly
              className="readonly-input"
            />
          </div>

          <div className="field">
            <label>Date</label>
            <input
              type="text"
              value={formattedDate}
              readOnly
              className="readonly-input"
            />
          </div>

          <div className="field">
            <label>Time</label>
            <input
              type="text"
              value={free_consultance_time}
              readOnly
              className="readonly-input"
            />
          </div>

          {/* Phone */}
          <div className="phone-field">
            <label className="phone-label">Phone Number</label>

            <PhoneInput
              country="us"
              enableSearch
              countryCodeEditable={false}
              containerClass="phone-wrapper"
              inputClass="phone-input"
              buttonClass="phone-flag-button"
              onChange={(value, data) => {
                const dial = data?.dialCode || "";
                const withoutPlus = value.replace("+", "");
                const numberOnly = withoutPlus.slice(dial.length);

                setCountryCode(`+${dial}`);
                setPhoneNumber(numberOnly);
              }}
            />

            {errors.phone_number && (
              <ul className="error-list">
                {errors.phone_number.map((msg, i) => (
                  <li key={i} className="error-item">{msg}</li>
                ))}
              </ul>
            )}
          </div>

          <button type="submit" className="submit-btnFree {
">
            Submit
          </button>

        </form>
      )}

    </div>
  </div>
</div>
</div>

  );
}

export default FreeConsultanceForm;
