import React from 'react'
import './LandingPage.css';
import ImgLanding from "../../../Assests/images/landing1.jpg"

const LandingPage = () => {
  return (
    <div className='landing-wrapper'>
      <div className='banner-container' style={{ backgroundImage: `url(${ImgLanding})` }}>
        {/* The red background section */}
        <div>
          {/* The white arrow/chevron box */}
          <div className='content-chevron'>
            <div className='text-area-chevron'>

              <h1 className='title-chevron'>WHY <span className="highlight">ROYAL MINDFULNESS</span> <br />
              WORKS DIFFERENTLY THAN THERAPY</h1>
              <p className='sub-text'>
                
                Royal Mindfulness is built on a simple idea: the mind improves and heals better with frequent guidance and regular training, not with long gaps between sessions. For many people, meeting someone once a week — or once in a while — and then being left alone to manage stress, emotions, and overthinking on their own is not very practical. When someone is already struggling mentally, expecting them to remember and apply everything discussed in a single session after several days can be difficult. That’s why our sessions happen on alternate days — so the mind is supported continuously, habits are trained gradually, and progress doesn’t depend only on willpower. Instead of treating mental health only as a medical problem, we focus on strengthening awareness, emotional balance, and mental habits through consistent practice. All sessions are guided by qualified psychologists trained in this method, so no one is left to struggle alone — support is consistent, guidance is regular, and change happens gradually, in a way the mind can actually sustain. If you’re unsure whether this approach is right for you, a free consultation can help you understand your current mental patterns and see if mental fitness training is the right next step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
