// import ReactGA from "react-ga4";
// // import ReactGA from "react-ga";

// const TRACKING_ID = "G-SNZDQG6PM4";

// export const initGA = () => {
//   ReactGA.initialize(TRACKING_ID);
// };

// // Track page view
// export const logPageView = () => {
//   ReactGA.pageview(window.location.pathname + window.location.search);
// };

// // Track events (button click etc.)
// export const trackEvent = (category, action, label) => {
//   ReactGA.event({
//     category: category,
//     action: action,
//     label: label,
//   });

//   console.log("Event Tracked:", category, action, label);
// };

import ReactGA from "react-ga4";

const GA_TRACKING_ID = "G-SNZDQG6PM4";

const GOOGLE_ADS_ID = "AW-17856177748";

export const initGA = () => {

  ReactGA.initialize([
    {
      trackingId: GA_TRACKING_ID,
    },
    {
      trackingId: GOOGLE_ADS_ID,
    },
  ]);

  console.log("Google Analytics Initialized");
};

// Track Page Views
export const logPageView = () => {

  const page =
    window.location.pathname + window.location.search;

  ReactGA.send({
    hitType: "pageview",
    page,
  });

  console.log("Tracking page view:", page);
};

// Track Events
export const trackEvent = (
  category,
  action,
  label,
  isConversion = false
) => {

  // Google Analytics Event
  ReactGA.event({
    category,
    action,
    label,
  });

  console.log(
    "Event Tracked:",
    category,
    action,
    label
  );

  // Google Ads Conversion
  if (isConversion) {

    console.log("Trying Google Ads Conversion");

    // Wait slightly to ensure gtag is ready
    setTimeout(() => {

      if (typeof window.gtag === "function") {

        console.log("Google Ads Conversion Fired");

        window.gtag("event", "conversion", {
          send_to: "AW-17856177748/DLE2CLHY390bENTMvsJC",
          value: 1.0,
          currency: "INR",
        });

      } else {

        console.error("window.gtag not found");

      }

    }, 300);
  }
};

