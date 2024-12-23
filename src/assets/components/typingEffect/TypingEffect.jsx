import React, { useState, useEffect } from "react";
import "./TypingEffect.css";

const TypingEffect = () => {
  const [text, setText] = useState("");
  const fullText = "I'm a Frontend Developer"; 
  const typingSpeed = 150;  

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText[index]); 
        index++;
      } else {
        clearInterval(typingInterval); 
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <span>{text}</span>
  );
};

export default TypingEffect;
