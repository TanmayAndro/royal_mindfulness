import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Container,
  Typography,
} from "@mui/material";
import { AllStyle } from "../Login/login";
import "./PrivacyPolicy.css"
const config = require("../../config");

const PrivacyPolicy = () => {
  const makeTextBoldAndLink = (text: string) => {
    const boldPattern = /“([^”]+)”/gi;
    const urlPattern = /(https?:\/\/[^\s]+)/gi;
    const emailPattern = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/gi;
    const logoPattern = /logo/gi;

    const parts = text.split(
      // /(“[^”]+”|https?:\/\/[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/gi
       /(“[^”]+”|https?:\/\/[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|logo)/gi
    );

    return (
      <>
        {parts.map((part, index) => {
          if (boldPattern.test(part)) {
            return <strong key={index}>{part}</strong>;
          }
          if (urlPattern.test(part)) {
            return (
              <a
                key={index}
                href={part}
                target="_blank"
                rel="noopener noreferrer"
              >
                {part}
              </a>
            );
          }
          if (emailPattern.test(part)) {
            return (
              <a key={index} href={`mailto:${part}`} rel="noopener noreferrer">
                {part}
              </a>
            );
          }
          if (logoPattern.test(part)) {
            return (
              <a href="https://your-logo-link.com" key={index} target="_blank" rel="noopener noreferrer">
                {part}
              </a>
            );
          }
          return <span key={index}>{part}</span>;
        })}
      </>
    );
  };

  return (
    <Box >
      <Container style={{ minHeight: "100vh", display: "block"}} 
      >
        <Box
       
          style={{
            ...AllStyle.heading,
            justifyContent: "center",
            marginTop: "65px",
            marginBottom: "30px",
            
          }}
        >
          <Typography
            style={{ ...AllStyle.heading, color: "rgba(30, 41, 59, 1)" }}
          >
            Privacy Policy
          </Typography>
        </Box>
        <Box style={{ marginBottom: "120px" }}>
          <div
            style={{
              color: "#334155",
              fontFamily: "Lato",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "30px",
            }}
          >
            {config.privacyPolicyText.map(
              (paragraph: string, index: number) => (
                <p key={index}>{makeTextBoldAndLink(paragraph)}</p>
              )
            )}
          </div>
          <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="table_head">Category</TableCell>
                <TableCell className="table_head">Sources of Collection</TableCell>
                <TableCell className="table_head">Purposes of Collection</TableCell>
                <TableCell className="table_head">Disclosures for a Business Purpose</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {config.tableData.map((row: any, index: number) => (
                <TableRow key={index} >
                  <TableCell className="table_data">{row.category}</TableCell>
                  <TableCell className="table_data">{row.sources}</TableCell>
                  <TableCell className="table_data">{row.purposes}</TableCell>
                  <TableCell className="table_data">{row.disclosures}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
           <div
            style={{
              color: "#334155",
              fontFamily: "Lato",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "30px",
            }}
          >
            {config.privacyPolicyTextRemaining.map(
              (paragraph: string, index: number) => (
                <p key={index}>{makeTextBoldAndLink(paragraph)}</p>
              )
            )}
          </div>
        </Box>
       
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
