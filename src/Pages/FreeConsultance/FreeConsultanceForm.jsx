import React, {useState} from 'react'
import "./FreeConsultanceForm.css";
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css";
import moment from "moment-timezone";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";





function FreeConsultanceForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); 
  const [phoneNumber, setPhoneNumber] = useState("");
  const [timeZone, setTimeZone] = useState("America/Bahia_Banderas");
  const timezones = moment.tz.names();
  const [countryCode, setCountryCode] = useState("+1");
  const navigate = useNavigate();
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState([]);

  const [submitted, setSubmitted] = useState(false);


  // const handleSubmit = async (e) =>  {
  //   e.preventDefault();

  //   try{
  //     const response = await fetch(
  //       "https://deedee-unchainable-optionally.ngrok-free.dev/" + free_consultance,
  //       {
  //         method: "POST", 
  //         headers: {
  //           "Content-Type": "application/json",
  //         }, 
  //         body: JSON.stringify({
  //           name,
  //           email,
  //            time_zone: timeZone,
  //           phone_number: phoneNumber,
  //           country_code: countryCode,
  //         }),
  //       }

  //     ); 

  //     const data = await response.json();
  //     console.log("Api response:", data)

  //     if(response.ok){
  //       alert("Form submitted sucessfully!"); 
  //     } else {
  //     // show backend message if available
  //     const msg =
  //       data?.message ||
  //       data?.errors?.join?.(", ") ||
  //       JSON.stringify(data);

  //     alert("Error: " + msg);
  //   }
  //   } catch (e) {
  //     if (e.response) {
  //       alert("Network/Code error — see console");
  //       console.log("Status:", e.response.status); 
  //       console.log("Data:", e.response.data); 
  //       console.log("Headears:", e.response.headers); 
  //     } else {
  //       console.log("Errors:", e.message);
  //     }
  // }
  // };
 
  const handleClick = () => {
    navigate(0); //referesh current page
  };
  const handleSubmit = async (e) =>  {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://deedee-unchainable-optionally.ngrok-free.dev/free_consultances",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            time_zone: timeZone,
            phone_number: phoneNumber,
            country_code: countryCode,
          }),
        }
      );

      const data = await response.json();
      console.log("API Response:", data);

      if (response.ok) {
        setSuccess("Form submitted successfully!");

        setSubmitted(true);
        
      } else {
        setErrors(data)
      }
    } catch (e) {
      const apiError =  e.response?.data?.errors;
      console.error("REQUEST FAILED:", e);
    }
  };

  return (
   <>
      <div className="page-wrapper">

        <div className="hero-bg"></div>

        <div className="overlay">

          {/* CONTENT WRAPS FORM — NOT INSIDE FORM */}
          <div className="content">  
              {submitted ?   (
                <div className="thankyou-box form box">
                  <h2>Thanks for submitting!</h2>
                  <p>Our team will contact you soon.</p>
                   <button type="button"  onClick={handleClick} className="submit-btn-tanks-box">
                      Refresh
                    </button>
               </div>
              ) : (

                <form className="form-box" onSubmit={handleSubmit} noValidate>

              {/* Sucess message pop  */}

              <h1 className="title">Free Consultance Form</h1>

              <div className="field">
                <label>Name</label>
                <input 
                type="text" 
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)} />
                {errors.name && (
                <ul className="error-list">
                  {errors.name.map((msg, index) => (
                    <li
                      key={index}
                      className=" error-item"
                    >
                      {msg}
                    </li>
                  ))}
                </ul>
              )}
              </div>

              <div className="field ">
                <label>Email</label>
               <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
               />

               {errors.email && (
                <ul className="error-list">
                  {errors.email.map((msg, index) => (
                    <li
                      key={index}
                      className=" error-item"
                    >
                      {msg}
                    </li>
                  ))}
                </ul>
              )}
              </div>

              <div className="time_zone_field">
                <label>Time Zone</label>

                <select
                  className="custom-input"
                  value={timeZone}
                  onChange={(e) => setTimeZone(e.target.value)}
              
                >
                  {timezones.map((tz) => {
                    const offset = moment.tz(tz).format("Z");   // -> +05:30
                    return (
                      <option key={tz} value={tz}>
                        {tz} (GMT{offset})
                      </option>
                    );
                  })}
                </select>
          
              </div>

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
                    const dial = data?.dialCode || "";     // 91

                    // remove + sign first
                    const withoutPlus = value.replace("+", "");   // 917649040881

                    // phone number = everything AFTER country code length
                    const numberOnly = withoutPlus.slice(dial.length);   // 7649040881

                    setCountryCode(`+${dial}`);
                    setPhoneNumber(numberOnly);
                  }}
                />
                {errors.phone_number && (
                  <ul className="error-list">
                    {errors.phone_number.map((msg, index) => (
                      <li
                        key={index}
                        className=" error-item"
                      >
                        {msg}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>

              

                </form>
              )}

          </div>
        </div>
     </div>

    </>
  )
}

export default FreeConsultanceForm
