import React from "react";
import { Card, CardContent } from "@mui/material";
import "./Header.css";

function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <header className="header">
        <Card className="header-card">
          <CardContent className="header-card-content">
            <div className="logo">
              <a href="#home">
                <img src="/logoblue.png" alt="Logo" />
              </a>
            </div>
            <nav className="nav-container">
              <ul className="flex justify-center space-x-6">
                <li>
                  <a
                    href="#home"
                    className="text-gray-800 hover:text-green-600"
                    onClick={() => scrollToSection('home')}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-800 hover:text-green-600"
                    onClick={() => scrollToSection('about')}
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-800 hover:text-green-600"
                    onClick={() => scrollToSection('projects')}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-800 hover:text-green-600"
                    onClick={() => scrollToSection('contact')}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </CardContent>
        </Card>
      </header>
    </>
  );
}

export default Header;
