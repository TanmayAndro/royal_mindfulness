import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import "./AboutUs.css";
import Img from "../../Assests/p1.js.webp";

export const AboutUs = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} padding="1rem">
          <Box className="imagebox">
            <img src={Img} alt="About Us" className="image" />

            <Box className="typobox">
              <Typography variant="h1" component="div">
                About Us
              </Typography>

              <Typography
                variant="h5"
                component="div"
                id="typobox2"
                className="boldText"
              >
                Bringing Peace and Wellness to Your Life
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* 2nd Grid */}
      <Grid container textAlign="center">
        <Grid item xs={12}>
          <Typography id="box2">Our Story</Typography>
        </Grid>

        <Grid item xs={12} padding="1rem">
          <Box className="subheading">
            <Typography id="subbox">
              Picture a group of yoga enthusiasts, brought together by chance
              encounters at a local yoga institute. We started as individuals
              seeking personal growth through yoga, and boy, did we find it!
              Through dedicated practice and diving deep into yoga philosophy
              and ancient techniques. We also learned modern science of
              psychology, counselings and hypnotherapy.<br /><br /> Our journey led us to a
              place of profound mental peace and happiness, leaving us awestruck
              by yoga's transformative power. Bursting with this newfound joy,
              eager to share it with everyone we know. Our friends and family,
              though supportive, couldn't quite keep up with our endless tales
              of bliss. And so, our journey evolved into a mission: to extend
              the same sense of tranquility and joy we experienced to all. <br /><br />Our
              main practices include yoga nidra, raja yoga, and hypnotherapy. We
              firmly believe in the power of relaxation to alleviate many mental
              struggles, but we don't stop there. We complement relaxation
              techniques with the potent methods of raja yoga. We encourage
              participants to commit to our sessions for at least 20 days to
              experience tangible results. Once they grasp raja yoga, they can
              continue their practice independently. However, until they reach
              that stage, we're here to guide them every step of the way,
              holding their hands as they journey towards inner peace and
              wellness. We're not just passionate practitioners anymore; we've
              become the heart and soul of yoga, we've become ambassadors of
              yoga, dedicated to guiding others out of the hustle and bustle of
              daily life and into a state of serene bliss. So here we are, ready
              to share the magic of yoga with you, one peaceful breath at a
              time. At last …… Remember ! Journey to peace starts with Royal
              Mindfulness.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
