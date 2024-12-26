import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "./Projects.css";

function Projects() {
  return (
    <div>
      <Card>
        <CardContent className="card-content-projects" sx={{ padding: "50px" }}>
          <span className="website-owner-name" sx={{ paddingBottom: "1000px" }}>
            My Projects
          </span>
          <Typography
            variant="h4"
            component="div"
            sx={{
              fontWeight: "bold",
              fontFamily: "Space Grotesk, sans-serif",
              paddingLeft: "50px",
            }}
          >
            My Projects
          </Typography>
          <div className="all-projects-container-inline">
            <div className="project-box">
              <div className="developer-projects">
                <img
                  className="developer-projects-image"
                  src="/mylogo.png"
                  alt="project"
                />
              </div>
              <div
                className="project-type-container"
                style={{ marginTop: "40px" }}
              >
                <div className="project-type">
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      fontSize: "1.25rem",
                      fontWeight: "bold",
                      fontFamily: "Arial, Helvetica, sans-serif",
                      paddingLeft: "5px",
                      color: "black",
                      backgroundColor: "aliceblue",
                      fontSize: "20px",
                    }}
                  >
                    Web Development
                  </Typography>
                  <span
                    className="project-description"
                    style={{
                      marginTop: "10px",
                      marginBottom: "10px",
                      color: "black",
                      paddingLeft: "5px",

                    }}
                  >
                    Frontend Development of Web Applications
                  </span>
                  
                </div>
                <div className="arrow-right">
                <KeyboardArrowRightIcon sx={{ color: "black" }}/>
                </div>
              </div>
            </div>

            <div className="project-box">
              <div className="wordpress-projects">
                <img
                  className="wordpress-projects-image"
                  src="/mylogo.png"
                  alt="project"
                />
              </div>
            </div>
            <div className="project-box">
              <div className="figma-projects">
                <img
                  className="figma-projects-image"
                  src="/mylogo.png"
                  alt="project"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="seperator">
        <div className="seperator-line">
          <Box
            className="wave"
            sx={{
              width: "100%",
              height: "100px",
              borderRadius: 1,
              bgcolor: "#040c16",
              "&:hover": {
                bgcolor: "#04160E",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
