import ReactGA from "react-ga4";

const TRACKING_ID = "G-SNZDQG6PM4"; // Replace with your Google Analytics Measurement ID

export const initGA = () => {
  ReactGA.initialize(TRACKING_ID);
};

export const logPageView = () => {
  ReactGA.send("pageview");
};
