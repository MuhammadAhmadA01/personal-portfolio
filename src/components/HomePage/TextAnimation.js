import React, { useEffect, useState } from "react";
import "./TextAnimation.css";
import { Button } from "@mui/material";

const TextAnimation = () => {
  const [currentLine, setCurrentLine] = useState(1);
  const [visibleCharacters, setVisibleCharacters] = useState(0);

  const lines = [
    "I'm Muhammad Ahmad",
    "I'm a Frontend Developer",
    "I study BSCS at FAST-NU",
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (visibleCharacters < lines[currentLine - 1].length) {
        setVisibleCharacters((prevCount) => prevCount + 1);
      } else {
        setCurrentLine((prevLine) => (prevLine === 3 ? 1 : prevLine + 1));
        setVisibleCharacters(0);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [currentLine, visibleCharacters]);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="text-animation">
          <h4>Welcome</h4>

          <h2 className={currentLine === 1 ? "active" : ""}>
            {lines[0].substring(0, visibleCharacters)}
          </h2>
          <h2 className={currentLine === 2 ? "active" : ""}>
            {lines[1].substring(0, visibleCharacters)}
          </h2>
          <h2 className={currentLine === 3 ? "active" : ""}>
            {lines[2].substring(0, visibleCharacters)}
          </h2>

          <Button
            href="mailto:mahmad.8962@gmail.com"
            sx={{ "&:hover": { backgroundColor: "#20c997", color: "#ffffff" } }}
            style={{
              position: "fixed",
              marginTop: "350px",
              marginLeft: "420px",
              color: "#ffffff",
              borderRadius: "50px",
              paddingTop: "15px",
              paddingBottom: "15px",
              paddingLeft: "35px",
              paddingRight: "35px",
              borderColor: "#ffffff",
            }}
            size="large"
            variant="outlined"
          >
            Hire me
          </Button>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default TextAnimation;
