import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import device from "../../../Assests/devices 1.png";
import lock from "../../../Assests/Group (1).png";
import comp from "../../../Assests/Group (2).png";
import relaxation from "../../../Assests/relaxation.png";

export const SeventhSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        // Mobile View
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            backgroundColor: "#8EB6DC",
          }}
        >
          <Box sx={{ marginTop: "3rem" }}>
            <Typography
              variant="h4"
              color="white"
              align="center"
              fontSize="46px"
              fontWeight="700"
            >
              Relaxation
            </Typography>
            <Typography
              style={{ marginTop: "1.5rem" }}
              variant="h4"
              color="white"
              align="center"
              fontSize="16px"
              fontStyle="italic"
            >
              Depression, Anxiety, Anger, all have one <br />
              common enemy
            </Typography>
            <Box
              sx={{
                marginTop: "2rem",
                marginBottom: "2rem",
                backgroundColor: "#8EB6DC",
                display: "flex",
                flexDirection: "row", // Ensure this is set to "row"
                justifyContent: "center", // Center the content horizontally
                alignItems: "baseline", // Center the content vertically
              }}
            >
              <Grid
                container
                spacing={5}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <Paper
                    elevation={3}
                    style={{
                      padding: 16,
                      width: 130,
                      height: 125,
                      textAlign: "center",
                      backgroundColor: "#EAEAEE",
                      borderRadius: "17px",
                      border: "1px solid black",
                    }}
                  >
                    <img src={device} height={50} width={50} alt="Device" />
                    <Typography variant="body2" mt={2}>
                      Attend Anywhere
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper
                    elevation={3}
                    style={{
                      padding: 16,
                      border: "1px solid black",
                      width: 130,
                      height: 125,
                      textAlign: "center",
                      borderRadius: "17px",
                      backgroundColor: "#EAEAEE",
                    }}
                  >
                    <img src={lock} height={50} width={50} alt="Lock" />
                    <Typography variant="body2" mt={2}>
                      No Fancy <br></br>Equipment Needed
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper
                    elevation={3}
                    style={{
                      padding: 16,
                      width: 130,
                      height: 125,
                      textAlign: "center",
                      border: "1px solid black",
                      borderRadius: "17px",
                      backgroundColor: "#EAEAEE",
                    }}
                  >
                    <img src={comp} height={50} width={50} alt="Computer" />
                    <Typography variant="body2" mt={2}>
                      Watch On Any Device
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      ) : (
        // Main Code for larger screens
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            height: "600px",
          }}
        >
          <Grid container sx={{ width: "100%", position: "relative" }}>
            <Grid item sm={12} md={7}>
              <Box
                sx={{
                  backgroundColor: "lightblue",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    backgroundColor: "#8EB6DC",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h4"
                      color="white"
                      align="center"
                      fontSize="46px"
                      fontWeight="700"
                    >
                      Relaxation
                    </Typography>
                    <Typography
                      style={{ marginTop: "1.5rem" }}
                      variant="h4"
                      color="white"
                      align="center"
                      fontSize="16px"
                      fontStyle="italic"
                      fontFamily={"Instrument sans"}
                    >
                      Depression, Anxiety, Anger, all have one <br />
                      common enemy
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    backgroundColor: "white",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "baseline",
                  }}
                >
                  <Grid
                    container
                    spacing={5}
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      position: "absolute",
                      top: "250px",
                    }}
                  >
                    <Grid item>
                      <Paper
                        elevation={3}
                        style={{
                          padding: 16,
                          width: 130,
                          height: 125,
                          textAlign: "center",
                          backgroundColor: "#EAEAEE",
                          borderRadius: "17px",
                          border: "1px solid black",
                        }}
                      >
                        <img src={device} height={50} width={50} alt="Device" />
                        <Typography variant="body2" mt={2}>
                          Attend Anywhere
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid item>
                      <Paper
                        elevation={3}
                        style={{
                          padding: 16,
                          border: "1px solid black",
                          width: 130,
                          height: 125,
                          textAlign: "center",
                          borderRadius: "17px",
                          backgroundColor: "#EAEAEE",
                        }}
                      >
                        <img src={lock} height={50} width={50} alt="Lock" />
                        <Typography variant="body2" mt={2}>
                          No Fancy <br></br>Equipment Needed
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid item>
                      <Paper
                        elevation={3}
                        style={{
                          padding: 16,
                          width: 130,
                          height: 125,
                          textAlign: "center",
                          border: "1px solid black",
                          borderRadius: "17px",
                          backgroundColor: "#EAEAEE",
                        }}
                      >
                        <img src={comp} height={50} width={50} alt="Computer" />
                        <Typography variant="body2" mt={2}>
                          Watch On Any Device
                        </Typography>
                      </Paper>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              md={5}
              sm={12}
              sx={{ display: { xs: "none", sm: "block", md: "block" } }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    borderRadius: "11px",
                    width: 450,
                    height: 450,
                    backgroundImage: `url(${relaxation})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1,
                    "@media (min-width: 900px) and (max-width: 1000px)": {
                      width: "350px",
                      height: "400px",
                    },
                  }}
                ></Box>

                <Box
                  sx={{
                    width: "100%",
                    flex: 1,
                    backgroundColor: "#8EB6DC",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 0,
                  }}
                ></Box>
                <Box
                  sx={{
                    flex: 1,
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 0,
                  }}
                ></Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};
