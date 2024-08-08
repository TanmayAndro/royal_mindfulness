import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography, styled } from '@mui/material'
import React,{useState} from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AllStyle } from '../Login/login';
const config=require('../../config')
  
  const FAQ = () => {
    const [expanded, setExpanded] = useState<string | false>(false);
  
    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    return (
      <Box>
        <Container style={{ minHeight: '100vh', display: "block" }}>
          <Box
            style={{
            ...AllStyle.heading,
              justifyContent: "center",
              marginTop: "65px",
              marginBottom:'30px'
            }}
          >
            <Typography style={{  ...AllStyle.heading,color: "rgba(30, 41, 59, 1)" }}>
              Frequently Asked Questions
            </Typography>
          </Box>
  
          <Box style={{ marginBottom: "120px" }}>
            {config.faqs.map((faq: { question: string, answer: string }, i: number) => (
              <AccordianStyle
                key={i}
                expanded={expanded === `panel${i}`}
                onChange={handleChange(`panel${i}`)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${i}bh-content`}
                  id={`panel${i}bh-header`}
                >
                  <Typography style={{ fontFamily: "Inter", color: "#1e293b", fontSize: "16px", fontWeight: "700", lineHeight: "21px" }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ color: "#334155", fontFamily: "Inter", fontSize: "16px", fontWeight: "400", lineHeight: "30px" }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </AccordianStyle>
            ))}
          </Box>
        </Container>
      </Box>
    );
  }
  

const AccordianStyle = styled(Accordion)({
    "&.MuiAccordion-root":{
      boxShadow:"-1px 3px 10px 0px rgba(0, 0, 0, 0.10)",
      marginBottom:"26px",
      borderColor:"transparent",
      padding:"10px 24px",
      maxWidth:"971px",
      marginLeft:"auto",
      marginRight:"auto",
      "&.MuiAccordian-rounded":{
        borderRadius:"8px",
      },
      "&::before":{
        backgroundColor:"#fff",
        boxShadow:"-1px 3px 10px 0px rgba(0, 0, 0, 0.10)",
      }

},
})

export default FAQ;