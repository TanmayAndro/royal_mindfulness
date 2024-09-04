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
import { term_condition } from "../../assests";

const config = require("../../config");

const TermsCondition = () => {
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
              overflow:'hidden',
              width: "100%",
              hight:"300px",
              marginTop: "0px",
              marginBottom: "30px"
            }}
          >
            <img
              src={term_condition}
              alt="image"
              style={{width:"-webkit-fill-available", height: "600px" }}
            />
          </Box>
          <MainHeading>Terms And Conditions</MainHeading>
        </Box>

        <Box style={{ marginBottom: "120px", marginTop: "10px" }}>
          {config.tacs.map(
            (faq: { summary: string; details: string }, i: number) => (
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
                    {faq.summary}
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
                    {faq.details}
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
    top: "8%",
  },
  "@media (max-width: 955px)": {
    fontSize: "35px",
    top: "8%",
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

export default TermsCondition;
