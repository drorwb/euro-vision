import React from "react";
import "./Footer.css";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <p>
        This website was created by -{" "}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/dror-brown-404930177/"
          rel="noopener noreferrer"
        >
          Dror Brown
        </a>{" "}
        |{" "}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/jonathan-morag/"
          rel="noopener noreferrer"
        >
          Jonathan Morag
        </a>{" "}
        |{" "}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/noa-feldberg-9b5917148/"
          rel="noopener noreferrer"
        >
          Noa Feldberg
        </a>
        <br />
        All Rights Reserved © {year}
        <br />
      </p>
    </div>
  );
};
