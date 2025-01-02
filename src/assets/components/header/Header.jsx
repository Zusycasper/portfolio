  import React, { useState } from "react";
  import { Card, CardContent, IconButton } from "@mui/material";
  import MenuIcon from '@mui/icons-material/Menu';
  import CloseIcon from '@mui/icons-material/Close';
  import "./Header.css";

  function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    };

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
      <header className="header">
        <Card className="header-card">
          <CardContent className="header-card-content">
            <div className="logo">
              <a href="#home">
                <img src="/logoblue.png" alt="Logo" />
              </a>
            </div>
            <IconButton className="menu-toggle" onClick={toggleMenu} color="inherit">
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <nav className={`nav-container ${isMenuOpen ? 'open' : ''}`}>
              <ul>
                <li>
                  <a href="#home" onClick={() => scrollToSection('home')}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={() => scrollToSection('about')}>
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#projects" onClick={() => scrollToSection('projects')}>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={() => scrollToSection('contact')}>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </CardContent>
        </Card>
      </header>
    );
  }

  export default Header;

