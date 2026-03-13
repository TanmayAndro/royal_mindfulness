// import ReactGA from "react-ga4";
import ReactGA from "react-ga";

const TRACKING_ID = "G-SNZDQG6PM4";

export const initGA = () => {
  ReactGA.initialize(TRACKING_ID);
};

// Track page view
export const logPageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
};

// Track events (button click etc.)
export const trackEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });

  console.log("Event Tracked:", category, action, label);
};