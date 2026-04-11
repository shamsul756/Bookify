import React from "react";

const Errorpage = () => {
  return (
    <div style={styles.wrap}>
      <p style={styles.badge}>Error</p>

      <h1 style={styles.code}>
        <span style={styles.accent}>4</span>0<span style={styles.accent}>4</span>
      </h1>

      <div style={styles.iconCircle}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="13" stroke="#7F77DD" strokeWidth="2" />
          <line x1="16" y1="9" x2="16" y2="18" stroke="#7F77DD" strokeWidth="2" strokeLinecap="round" />
          <circle cx="16" cy="22" r="1.2" fill="#7F77DD" />
        </svg>
      </div>

      <div style={styles.divider} />

      <h2 style={styles.title}>Page not found</h2>
      <p style={styles.subtitle}>
        The page you're looking for doesn't exist or has been moved.
        Let's get you back on track.
      </p>

      <div style={styles.btnRow}>
        <button style={styles.btnPrimary} onClick={() => history.back()}>
           Go home
        </button>
       
      </div>
    </div>
  );
};

const styles = {
  wrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    textAlign: "center",
    padding: "2rem",
    fontFamily: "sans-serif",
    backgroundColor: "#f9f9fb",
  },
  badge: {
    display: "inline-block",
    fontSize: "11px",
    fontWeight: 500,
    background: "#EEEDFE",
    color: "#3C3489",
    borderRadius: "20px",
    padding: "4px 12px",
    marginBottom: "1rem",
    letterSpacing: "0.5px",
  },
  code: {
    fontSize: "96px",
    fontWeight: 500,
    letterSpacing: "-4px",
    color: "#1a1a1a",
    lineHeight: 1,
    margin: 0,
  },
  accent: {
    color: "#7F77DD",
  },
  iconCircle: {
    width: 72,
    height: 72,
    borderRadius: "50%",
    background: "#EEEDFE",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "1.5rem auto 1rem",
  },
  divider: {
    width: 40,
    height: 2,
    background: "#AFA9EC",
    borderRadius: 2,
    margin: "1rem auto",
  },
  title: {
    fontSize: "22px",
    fontWeight: 500,
    margin: "0 0 0.5rem",
    color: "#1a1a1a",
  },
  subtitle: {
    fontSize: "15px",
    color: "#666",
    margin: "0 0 2rem",
    maxWidth: 320,
    lineHeight: 1.6,
  },
  btnRow: {
    display: "flex",
    gap: 12,
    justifyContent: "center",
    flexWrap: "wrap",
  },
  btnPrimary: {
    padding: "10px 24px",
    borderRadius: "8px",
    border: "none",
    background: "#7F77DD",
    color: "#fff",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
  },

};

export default Errorpage;