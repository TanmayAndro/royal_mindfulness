import React from 'react'
import "./Overview.css";
import { Typography, Grid, Box } from "@mui/material";
import Img from '../../Assests/p1.js.webp'

const Overview = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} padding="1rem">
          <Box className="imagebox">
          <img src={Img} alt="Overview" className="image" />

            <Box className="typobox">
              <Typography 
              id='typo'
              variant="h2" component="div">
                Overview
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* 2nd Grid */}
      <Grid container textAlign="center">
        <Grid item xs={12}>
          <Typography id="box2">Overview of Royal Mindfulness</Typography>
        </Grid>

        <Grid item xs={12} padding="1rem">
          <Box className="subheading">
            <Typography id="subbox">
              Welcome to Royal Mindfulness, where ancient wisdom meets modern
              wellness. Our mission is to bring the transformative power of
              traditional yoga and meditation practices into the lives of people
              across the globe. In a world where stress, anxiety, and the
              pressures of daily life have become all too common, we offer a
              sanctuary for your mind, body, and spirit. At Royal Mindfulness,
              we believe that true wellness goes beyond physical fitness. It
              encompasses mental clarity, emotional balance, and a deep
              connection to one’s inner self.<br/><br/> Our approach is rooted in the
              time-honored practices of Raja Yoga, Antar Mouna (Inner Silence),
              and various other meditation techniques that have been proven to
              enhance well-being. We are dedicated to making these practices
              accessible and relevant to the modern lifestyle, ensuring that
              everyone, regardless of their background or experience level, can
              benefit from them. Our offerings are designed to cater to a wide
              range of needs. Whether you’re looking for daily relaxation
              sessions to unwind after a long day, or deeper meditation
              practices like Antar Mouna to cultivate inner peace and
              mindfulness, we have something for everyone. Each of our sessions
              is carefully curated by experienced instructors who are not only
              skilled in their craft but also passionate about guiding others on
              their wellness journey. <br/><br/>One of the key aspects of Royal
              Mindfulness is our commitment to personalized care. We understand
              that everyone’s path to wellness is unique, and we strive to
              provide an experience that is tailored to your individual needs.
              Our sessions are designed to be flexible and adaptive, allowing
              you to progress at your own pace. Whether you’re a beginner or an
              advanced practitioner, you’ll find that our sessions meet you
              where you are, offering the right balance of challenge and
              support. In addition to our meditation and yoga sessions, we also
              offer a range of supportive services designed to enhance your
              overall experience. <br/><br/>Our user-friendly online platform allows you
              to easily book sessions, manage your schedule, and connect with
              our instructors from the comfort of your home. We’ve integrated
              modern technology with traditional practices to create a seamless
              experience that fits into your busy life. Our instructors are at
              the heart of what we do. Each teacher at Royal Mindfulness is
              carefully selected not only for their expertise but also for their
              ability to inspire and connect with students. They bring a wealth
              of knowledge and experience, ensuring that you receive the highest
              quality guidance in your practice. Moreover, our instructors are
              continuously trained and updated with the latest techniques in
              yoga and mindfulness to provide you with the most effective and
              relevant practices.<br/><br/> At Royal Mindfulness, we also believe in
              making wellness affordable and accessible to everyone. We offer
              competitive pricing, with the aim of making our services available
              to as many people as possible. We understand that investing in
              your well-being shouldn’t be a luxury, and we are committed to
              providing high-quality services that don’t break the bank. In
              conclusion, Royal Mindfulness is more than just a yoga and
              meditation platform—it’s a community of like-minded individuals on
              a shared journey towards greater well-being. We invite you to
              explore our offerings, connect with our instructors, and discover
              the many benefits of incorporating mindfulness into your daily
              life. Whether you’re seeking peace of mind, physical relaxation,
              or a deeper spiritual connection, Royal Mindfulness is here to
              guide you every step of the way. <br/><br/>Join us on this transformative
              journey and experience the profound impact of mindfulness on your
              life.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
    
  )
}

export default Overview
