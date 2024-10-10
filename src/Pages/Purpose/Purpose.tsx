
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { purposeDetail, purposeHeading } from "../../config";
import Img from "../../Assests/Purpose.jpg";

const config = require("../../config");

const Purpose = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box>
      <Container style={{ minHeight: "100vh", display: "block" }}>
        <Box
          style={{
            position: "relative",
            textAlign: "center",
            color: "white",
            marginTop: "0px",
            marginBottom: "30px",
            width: "100%",
          }}
        >
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              width: "100%",
              hight: "300px",
              marginTop: "10px",
              marginBottom: "30px",
              borderRadius: "10px",
              "@media (max-width:900px)": {
                img: {
                  display: "none",
                },
              },
            }}
          >
            <img
              src={Img}
              alt="image"
              style={{
                width: "-webkit-fill-available",
                height: "500px",
              }}
            />
          </Box>
          <MainHeading
            sx={{
              "@media (max-width:900px)": {
                display: "none",
              },
            }}
          >
            Purpose
          </MainHeading>
        </Box>

        <Box sx={mainStyle.content}>
          <Typography sx={mainStyle.boxtypo}>{purposeHeading}</Typography>{" "}
          <Typography sx={mainStyle.typodetail}>{purposeDetail}</Typography>
        </Box>

        <Box
          sx={{
            marginBottom: "120px",
            marginTop: "10px",
          }}
        >
          {config.purposeData.map(
            (faq: { question: string; answer: string }, i: number) => (
              <AccordionStyle
                key={i}
                expanded={expanded === `panel${i}`}
                onChange={handleChange(`panel${i}`)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${i}bh-content`}
                  id={`panel${i}bh-header`}
                >
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      color: "#1e293b",
                      fontSize: "16px",
                      fontWeight: "700",
                      lineHeight: "21px",
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    style={{
                      color: "#334155",
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "30px",
                    }}
                  >
                    {faq.answer.split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </Typography>
                </AccordionDetails>
              </AccordionStyle>
            )
          )}
        </Box>
      </Container>
    </Box>
  );
};

const MainHeading = styled(Typography)({
  position: "absolute",
  top: "10%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "52px",
  color: "white",
  fontWeight: "bold",
  "@media (max-width: 1172px)": {
    fontSize: "42px",
  },
});

const AccordionStyle = styled(Accordion)({
  "&.MuiAccordion-root": {
    boxShadow: "-1px 3px 10px 0px rgba(0, 0, 0, 0.10)",
    marginBottom: "26px",
    borderColor: "transparent",
    padding: "10px 24px",
    maxWidth: "971px",
    marginLeft: "auto",
    marginRight: "auto",
    "&.MuiAccordion-rounded": {
      borderRadius: "8px",
    },
    "&::before": {
      backgroundColor: "#fff",
      boxShadow: "-1px 3px 10px 0px rgba(0, 0, 0, 0.10)",
    },
  },
});

const mainStyle = {
  content: {
    dispaly: "flex",
    justifyContent: "center",
    marginBottom: "40px",
    marginTop: "40px",
  },

  boxtypo: {
    textAlign: "center" as "center",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "32px",
    marginBottom: "8px",
    fontFamily: "Lato",
    letterSpacing: "-0.12px",
    color: "rgba(30, 41, 59, 1)",
    "@media (max-width:1024px)": {
      fontSize: "40px",
    },
  },
  typodetail: {
    marginTop: "3rem",
    textAlign: "justify",
    color: "rgba(30, 41, 59, 1)",
    "@media (max-width:1024px)": {
      fontSize: "18px",
    },
  },
};

export default Purpose;
