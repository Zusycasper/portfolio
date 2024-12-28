import {
  Card,
  CardContent,
  Box,
  Typography,
  Grid,
  CardHeader,
  Divider,
} from "@mui/material";
import "./About.css";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import React from "react";

function About() {
  return (
    <div>
      <Card className="about-card">
        <CardContent
          className="card-content-about"
          sx={{ padding: "200px 0 0 100px" }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
              <Grid item xs={4}>
                <div className="admin-photo">
                  <img
                    className="gif-rotate"
                    src="/spin-logo.gif"
                    alt="gif"
                  />
                  <img
                    className="gif-rotate-2"
                    src="/spin-logo.gif"
                    alt="gif2"
                  />

                  <img
                    className="admin-image2"
                    src="/blue-background-pic.png"
                    alt="admin-image"
                  />
                </div>
              </Grid>
              <Grid className="website-owner-details" item xs={8}>
                <span
                  className="website-owner-name"
                  sx={{ paddingBottom: "1000px" }}
                >
                  About me
                </span>
                <Typography>
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Space Grotesk, sans-serif",
                      paddingLeft: "50px",
                    }}
                  >
                    I'm an experienced{" "}
                    <Typography
                      variant="h4"
                      component="span" 
                      sx={{
                        color: "#1976d2",
                        fontWeight: "bold",
                      }}
                    >
                      front-end developer
                    </Typography>
                  </Typography>
                  <br />
                  <span className="typed-text"></span>
                  <br />
                  {/* error in p */}
                  <p
                    className="description"
                    sx={{
                      fontSize: "16px",
                    }}
                  >
                    Currently employed at CO2 Pvt. Ltd. as a Frontend Developer,
                    specializing in building user-friendly and visually
                    appealing web interfaces. Possess hands-on experience with
                    modern frontend technologies and frameworks, contributing to
                    the development of high-quality, responsive, and scalable
                    applications.
                  </p>
                </Typography>
                <Box className="card-experience-container">
                  <Card className="card-experience">
                    <CardContent className="card-experience-details">
                      <Typography
                        variant="h5"
                        sx={{
                          fontSize: "1.2rem",
                          fontWeight: 500,
                          lineHeight: 1.5,
                          fontFamily: "Space Grotesk, sans-serif",
                          textAlignLast: "center",
                        }}
                      >
                        Developer
                      </Typography>
                      <Divider sx={{ border: "0.5px solidrgb(255, 255, 255)" }} />

                      <div className="column">
                        <div className="card-center">
                          <span>
                            <i className="developer"></i>
                          </span>
                          <h3>
                            <DeveloperModeIcon sx={{ marginBottom: "20px" }} />
                            <br />
                            1+
                          </h3>
                          <p className="experinece-text">
                            HTML, CSS, JavaScript, React.JS, Bootstrap,
                            Tailwind, Material UI, Redux, Express.js, MySQL,
                            PHP, GIT version control, API
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="card-experience">
                    <CardContent>
                      <Typography
                        variant="h5"
                        sx={{
                          fontSize: "1.2rem",
                          fontWeight: 500,
                          lineHeight: 1.5,
                          fontFamily: "Space Grotesk, sans-serif",
                          textAlignLast: "center",
                        }}
                      >
                        Desinger
                      </Typography>
                      <Divider sx={{ border: "0.5px solidrgb(255, 255, 255)" }} />

                      <div className="column">
                        <div className="card-center">
                          <span>
                            <i className="developer"></i>
                          </span>
                          <h3>
                            <DesignServicesIcon sx={{ marginBottom: "20px" }} />
                            <br />
                            1+
                          </h3>
                          <p className="experinece-text">
                            Figma, Wordpress, Canva, Adobe Photoshop, Adobe
                            Illustrator
                          </p>
                          <p className="dummy-text">
                            Figma, Wordpress, Canva, Adobe Photoshop, Adobe
                            Illustrator
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
      <div className="seperator">
        <div className="seperator-line">
          <Box
            className="wave"
            sx={{
              width: "100%",
              height: "100px",
              // borderRadius: 1,
              backgroundImage: "linear-gradient(90deg, #07233b 1.67%, #041d34 39.95%, #04192d 58.24%, #040e18 80.28%, #050c16 101.48%)",
              "&:hover": {
                bgcolor: "#040c16",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
