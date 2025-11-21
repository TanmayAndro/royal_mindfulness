import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import image1 from "../../../Assests/image 1.png";
import image2 from "../../../Assests/image 2.png";
import image3 from "../../../Assests/image 3.png";

const trainers = [
  {
    name: "Saumya Koul",
    image: image1,
  },
  {
    name: "Rucha Deshpande",
    image: image2,
  },
  {
    name: "Sonia Yadav",
    image: image3,
  },
];

const TrainerCard = () => {
  return (
    <>
      <Box sx={{ width: "100%", height: "100%", backgroundColor: "#EAEAEE" }}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                padding: { xs: "2rem 1.5rem", md: "3rem" },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "32px", sm: "40px", md: "48px" },
                  lineHeight: { xs: "36px", md: "50px" },
                  fontFamily: "Instrument sans",
                  color: "#1470AF",
                }}
              >
                About Our <br></br> Instructors
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "16px", sm: "18px" },
                  marginTop: "2rem",
                  fontFamily: "Instrument sans",
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                All our instructors are highly qualified with degrees in yoga
                therapy/psychology or related fields, ensuring exceptional
                quality in every session. Our team of instructors undergoes
                rigorous training to guarantee that they are equipped with the
                knowledge and skills necessary to guide you through your
                relaxation journey effectively.With their diverse expertise and
                unwavering dedication, you're in capable hands on your
                relaxation journey. We've carefully selected each instructor to
                guarantee your experience is nothing short of trans-formative.
                Trust in our team to guide you towards profound relaxation and
                holistic well-being, every step of the life.
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "20px", sm: "24px", md: "26px" },
                  fontStyle: "italic",
                  marginTop: "2rem",
                  fontFamily: "Instrument sans",
                  color: "#1470AF",
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                "The teacher is one who shows you the way, but you must walk the
                path." - Buddha
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                padding: { xs: "1.5rem 1rem", md: "2rem" },
              }}
            >
              <Grid container spacing={4} direction="column">
                {trainers.map((trainer, index) => (
                  <Grid
                    key={index}
                    item
                    container
                    alignItems="center"
                    sx={{
                      gap: "1.5rem",
                      flexWrap: { xs: "nowrap", sm: "nowrap" },
                    }}
                  >
                    <Box
                      sx={{

                        width: {
                          xs: "110px", // Width for screens smaller than 600px
                          sm: "150px", // Width for screens 600px and larger
                        },
                        height: {
                          xs: "110px", // Width for screens smaller than 600px
                          sm: "150px", // Width for screens 600px and larger
                        },
                 
                        borderRadius: "400px",
                        overflow: "hidden",
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={trainer.image}
                        alt={trainer.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>

                    <Box
                      sx={{
                        flexWrap: "nowrap",
                        textAlign: { xs: "center", sm: "left" },
                        width: { xs: "100%", sm: "auto" },
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#1470AF",
                          fontWeight: "bold",
                          fontSize: {
                            xs: "1rem",
                            sm: "1.5rem",
                          },
                                
                        }}
                      >
                        {trainer.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "gray", fontSize: { xs: "0.9rem", sm: "1rem" } }}
                      >
                        {trainer.title}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TrainerCard;
