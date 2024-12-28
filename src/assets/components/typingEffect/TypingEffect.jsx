import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import "./TypingEffect.css";

const TypingEffect = () => {
  const [typingText, setTypingText] = useState("");
  const fullText = "Frontend Developer";
  const typingSpeed = 150;
  const pauseTime = 2000; // Time to pause after full text is typed
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    const type = () => {
      const currentLength = typingText.length;

      if (!isDeleting && currentLength === fullText.length) {
        // Pause before starting to delete
        timer = setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }

      if (isDeleting && currentLength === 0) {
        // Pause before starting to type again
        timer = setTimeout(() => setIsDeleting(false), pauseTime);
        return;
      }

      const nextText = isDeleting
        ? fullText.substring(0, currentLength - 1)
        : fullText.substring(0, currentLength + 1);

      setTypingText(nextText);

      timer = setTimeout(type, typingSpeed);
    };

    timer = setTimeout(type, typingSpeed);

    return () => clearTimeout(timer);
  }, [typingText, isDeleting]);

  return (
    <span className="typing-effect-container" sx={{ display: "inline" }}>
      <Typography
        variant="h3"
        component="div"
        sx={{
          fontWeight: "bold",
          display: "inline",
          color: "#1976d2",
        }}
      >
        I'm a{" "}
      </Typography>{" "}
      <span className="typing-effect" sx={{ display: "inline" }}>{typingText}</span>
      <span className="cursor" sx={{ display: "inline" }}>|</span>
    </span>
  );
};

export default TypingEffect;
