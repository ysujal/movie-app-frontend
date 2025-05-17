import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#222",
        color: "#fff",
        padding: "20px",
        textAlign: "center",
        marginTop: "40px",
      }}
    >
      <p>🎬 Movie App © {new Date().getFullYear()}</p>
      <p>Made with ❤️ by Sujal Yadav</p>
    </footer>
  );
}

export default Footer;
