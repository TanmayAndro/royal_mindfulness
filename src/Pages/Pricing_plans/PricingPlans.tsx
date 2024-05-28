import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { MainGrid } from "../Login/login";
import "../../fonts.css";
import "./PricingPlans.css";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

const config = require("../../config");

const PricingPlans = () => {
  return (
    <MainGrid
      container
      style={{
        display: "flex",
        gap: "8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        paddingInline: 20,
      }}
    >
      <Typography
        style={{
          fontFamily: "Inter",
          fontSize: "60px",
          fontWeight: 700,
          lineHeight: "44px",
          letterSpacing: "0.02em",
          color: "#050A44",
        }}
      >
        {config.pricingPlansLabel}
      </Typography>
      <Grid
        container
        style={{
          display: "flex",
          gap: "15px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {config.pricingPlans.map(
          (item: {
            title: string;
            id: number;
            price: string;
            valid: string;
            month: string;
            plans: { id: number; title: string; check: boolean }[];
          }) => {
            return (
              <Grid
                key={`${item.id}${item.title}`}
                xs={12}
                md={3}
                sm={12}
                lg={3}
                style={{
                  boxShadow: "0px 9.07px 36.27px 0px rgba(0, 0, 0, 0.06)",
                  padding: "30px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  gap: 30,
                }}
              >
                <Typography className="pricing_plan_typography_css">
                  {item.title}
                </Typography>

                <Typography className="pricing_plan_price_css">
                  <sup className="pricing_plan_typography_css">$</sup>
                  {item.price}
                </Typography>
                <Typography className="pricing_plan_typography_label">
                  {item.month}
                </Typography>
                <Typography className="pricing_plan_typography_second_heading">
                  {item.valid}
                </Typography>
                <Button
                  variant="contained"
                  className="pricing_plan_typography_btn"
                >
                  {config.btn_name}
                </Button>
                <hr className="border_color" />
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    gap: "12px",
                  }}
                >
                  {item.plans.map(
                    (item: { title: string; id: number; check: boolean }) => {
                      const { title, id, check } = item;
                      return (
                        <Typography
                          key={`${id}${check}`}
                          className="subHeadingValid_css"
                        >
                          {check ? <CheckIcon /> : <CloseIcon />}
                          {title}
                        </Typography>
                      );
                    }
                  )}
                </Box>
              </Grid>
            );
          }
        )}
      </Grid>
    </MainGrid>
  );
};

export default PricingPlans;
