import React, { useState } from 'react'
import "./FeedBack.css"
import {FaEdit} from 'react-icons/fa';

function FeebBack() {
  const [rating, setRating] = useState(0)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [needToImprove, setNeedToImprove] = useState('');

  const handleSubmitFeedback = async() => {
    setLoading(true); 

    const payload ={
      rate_our_teachers: rating,
      overall_experience: rating, 
      need_to_improve: needToImprove, 
      how_to_improve: ""
    }

    try {

      const response = await fetch(
        "https://deedee-unchainable-optionally.ngrok-free.dev/feedbacks", 
        {
          method: "POST", 
          headers: {
            "Content-Type": "application/json"
          }, 
          body:  JSON.stringify(payload)
        }
      );

      const data = await response.json(); 

      if(response.ok){
        console.log("Api Response:", data); 
      } else {
        console.log(data); 
      }      
    } catch (error) {
      console.log("Api errros: ", error); 
    } finally {
      setLoading(false)
    }
  };  



  return (
    <>
    <div className='feedback-section'>
      <div className='feedback-container'>
        <div className='feedback-card'>

          {/* Edit Icon at top right */}
          <div className='edit-icon-wrapper'>
            <FaEdit className='edit-icon'/>
          </div>

          <p className='feedback-instruction'>
            We value your thoughts! Share your feedback to <br />
            help us improve your yoga experience.
          </p>

          {/* Start rating system */}
          <div className='rating-feedback'>
            {[1,2,3,4,5].map((star) => (
              <span 
                key={star} 
                className={star <= rating ? "star filled" : "star"}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))} 
          </div>
          <div className="textarea-wrapper">

            <textarea
              className="feedback-textarea"
              placeholder="Any Comments"
              value={needToImprove}
              onChange={(e) => setNeedToImprove(e.target.value)}
            /> 
          </div>

              
          {/* Submitted Button */}
          <button className='submit-feedback-btn'
           onClick={handleSubmitFeedback} 
           disabled= {loading || rating == 0}>
             {loading ? "Submitting..." : "Submit Feedback"}
          </button>
        </div>
      </div>
    </div>
    
    <div className='stay-section'>
      <div className='stay-container'>
        <h2 className='stay-heading'>Stay in the loop</h2>
        <form className='stay-form'>
          <input 
          type='email'
          className='stay-input'
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
          required
          />
          <button type='submit' className='stay-sub-button'>
          Submit
          </button>
        </form>
        <p className="stay-discpration">
          By signing up, I agree to the <a href="/terms">Terms of Use</a> and to receive emails from Talkspace.
        </p>

      </div>

    </div>
    </>
    

    

    
  )
}

export default FeebBack
