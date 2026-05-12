import React, { useState, useEffect } from "react";
import "./FreeConsultanceForm.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate, useLocation } from "react-router-dom";
// import { FaCircleArrowLeft } from "react-icons/fa6";
import { trackEvent } from "../../analitics/analytics";
import { GoArrowLeft } from "react-icons/go";

function FreeConsultanceForm() {
  const navigate = useNavigate();
  const location = useLocation();

  /* 🔥 Get data from location OR localStorage */
  const storedData = JSON.parse(
    localStorage.getItem("freeConsultanceData")
  ) || {};

  const {
    time_zone,
    free_consultance_date,
    free_consultance_time
  } = location.state || storedData;

  /* ✅ ALL HOOKS FIRST */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  /* 💾 Save to localStorage when data exists */
  useEffect(() => {
    if (time_zone && free_consultance_date && free_consultance_time) {
      localStorage.setItem(
        "freeConsultanceData",
        JSON.stringify({
          time_zone,
          free_consultance_date,
          free_consultance_time
        })
      );
    }
  }, [time_zone, free_consultance_date, free_consultance_time]);

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

  const formattedDate = new Date(free_consultance_date).toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric"
    }
  );

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


   

  //   try {

  //     const freeConsultationUrl =
  //     process.env.REACT_APP_FREECONSULTATION_URL;

  //     const baseUrl =
  //     process.env.REACT_APP_BASE_URL;

  //     const finalUrl = freeConsultationUrl
  //     ? `${freeConsultationUrl}/free_consultances`
  //     : `${baseUrl}/free_consultances`;

      
  //     const response = await fetch(
  //     finalUrl,
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(payload)
  //       }
  //     );
  //     const data = await response.json();

  //     if (response.ok) {
  //       setSubmitted(true);
  //       localStorage.removeItem("freeConsultanceData"); // optional cleanup
  //     } else {
  //       setErrors(data || {});
  //     }
  //   } catch (err) {
  //     console.error("API ERROR:", err);
  //   }
  // };

  try {
  const freeConsultationUrl =
    process.env.REACT_APP_FREECONSULTATION_URL;

  const baseUrl =
    process.env.REACT_APP_BASE_URL;

  // both URLs
  const urls = [
    freeConsultationUrl,
    baseUrl,
  ].filter(Boolean);

  // call both APIs
  const responses = await Promise.allSettled(
    urls.map((url) =>
      fetch(`${url}/free_consultances`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(payload),
      })
    )
  );

  console.log("API RESPONSES:", responses);

  // success check
  const successResponse = responses.find(
    (res) =>
      res.status === "fulfilled" &&
      res.value.ok
  );

  if (successResponse) {
    const data =
      await successResponse.value.json();

    console.log("SUCCESS DATA:", data);

    setSubmitted(true);

    localStorage.removeItem(
      "freeConsultanceData"
    );
  } else {
    console.log("All APIs failed");

    setErrors({
      error: "All APIs failed",
    });
  }
} catch (err) {
  console.error("API ERROR:", err);
}
};

  
  return (
    <div className="free-consultance-page">
      <div className="page-wrapper-freeconsultation">
        <div className="hero-bg"></div>

        <div className="overlay">
          <div className="content-free">
            {submitted ? (
              /* ✅ THANK YOU STATE */
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
              <form
                className="free-consultanceform-box"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="free-heading">
                  <div className="back-btn" onClick={() => navigate(-1)}>
                    <GoArrowLeft  size={28} color="#070707ff" />
                  </div>

                  <h1 className="title free-title">
                   Let's take the next step together.
                  </h1>
                </div>
                
                <p className="subtitle">
                  (Share your details so we can schedule your free consultation.)
                </p>

                {/* Name */}
                <div className="field">
                  <label className="consultance-form-label">Name</label>
                  <input
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && (
                    <ul className="error-list-free">
                      {errors.name.map((msg, i) => (
                        <li key={i} className="error-item">{msg}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Email */}
                <div className="field">
                  <label className="consultance-form-label">Email</label>
                  <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <ul className="error-list-free">
                      {errors.email.map((msg, i) => (
                        <li key={i} className="error-item">{msg}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Phone */}
                <div className="phone-field">
                  <label className="phone-label consultance-form-label">
                    Phone Number
                  </label>

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
                    <ul className="error-list-free">
                      {errors.phone_number.map((msg, i) => (
                        <li key={i} className="error-item">{msg}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* End of Time zone , Date , Time */}
                <button type="submit" className="submit-btnFree"  onClick={() => {
                          trackEvent(
                            "Free Consultation",
                            "Submit Form",
                            `Free Consultation`
                          );
                          
                        }}>
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
