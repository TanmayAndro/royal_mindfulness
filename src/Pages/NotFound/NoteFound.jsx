import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const token = localStorage.getItem("user_token");
  const first_name = localStorage.getItem("first_name");
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>404</h1>
        <p style={styles.message}>Oops! Page not found.</p>
        {token && first_name ? (
          <Link to="/" style={styles.link}>
            Go to Home
          </Link>
        ) : (
          <Link to="/" style={styles.link}>
            Go to Home
          </Link>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "calc(100vh - 210px)",
    textAlign: "center",
    padding: "20px",
  },
  content: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  heading: {
    fontSize: "4rem",
    margin: "0",
    color: "#1470AF",
  },
  message: {
    fontSize: "1.5rem",
    color: "#333",
  },
  link: {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "1rem",
    textDecoration: "none",
    color: "#fff",
    backgroundColor: "#1470AF",
    borderRadius: "4px",
  },
};

export default NotFound;
