import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Grid, Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./Projects.css";
import ProjectDialog from "../../components/projectDialog/ProjectDialog";

const Projects = () => {

  const [dialogOpen,setDialogOpen] = useState(false);
  const [selectedCategory,setSelectedCategory] = useState(null);

  const projectsData = {
    frontend: [
      {
        id: 1,
        title: "Website Design for Marketing Agency Startup",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/placeholder.svg?height=600&width=800",
        type: "Website",
        languages: "PHP, HTML, CSS, JS",
        platform: "WordPress",
        country: "USA",
        liveUrl: "www.example.com"
      },
      {
        id: 2,
        title: "te Design for Marketing Agency Startup",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/placeholder.svg?height=600&width=800",
        type: "Website",
        languages: "PHP, HTML, CSS, JS",
        platform: "WordPress",
        country: "USA",
        liveUrl: "www.example.com"
      },
      {
        id: 3,
        title: "3 Website Design for Marketing Agency Startup",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/placeholder.svg?height=600&width=800",
        type: "Website",
        languages: "PHP, HTML, CSS, JS",
        platform: "WordPress",
        country: "USA",
        liveUrl: "www.example.com"
      },
      {
        id: 4,
        title: "4 Website Design for Marketing Agency Startup",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/placeholder.svg?height=600&width=800",
        type: "Website",
        languages: "PHP, HTML, CSS, JS",
        platform: "WordPress",
        country: "USA",
        liveUrl: "www.example.com"
      },
    ],
    wordpress: [
      {
        id: 1,
        title: "Website Design for Marketing Agency Startup",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/placeholder.svg?height=600&width=800",
        type: "Website",
        languages: "PHP, HTML, CSS, JS",
        platform: "WordPress",
        country: "USA",
        liveUrl: "www.example.com"
      },
      {
        id: 2,
        title: "te Design for Marketing Agency Startup",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/placeholder.svg?height=600&width=800",
        type: "Website",
        languages: "PHP, HTML, CSS, JS",
        platform: "WordPress",
        country: "USA",
        liveUrl: "www.example.com"
      },
      {
        id: 3,
        title: "3 Website Design for Marketing Agency Startup",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/placeholder.svg?height=600&width=800",
        type: "Website",
        languages: "PHP, HTML, CSS, JS",
        platform: "WordPress",
        country: "USA",
        liveUrl: "www.example.com"
      },
      {
        id: 4,
        title: "4 Website Design for Marketing Agency Startup",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/placeholder.svg?height=600&width=800",
        type: "Website",
        languages: "PHP, HTML, CSS, JS",
        platform: "WordPress",
        country: "USA",
        liveUrl: "www.example.com"
      },
    ],
    // ui interface designs
    ui: [
      {
        id: 1,
        title: "Website Design for Marketing Agency Startup",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/placeholder.svg?height=600&width=800",
        type: "Website",
        languages: "PHP, HTML, CSS, JS",
        platform: "WordPress",
        country: "USA",
        liveUrl: "www.example.com"
      },
      {
        id: 2,
        title: "te Design for Marketing Agency Startup",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/placeholder.svg?height=600&width=800",
        type: "Website",
        languages: "PHP, HTML, CSS, JS",
        platform: "WordPress",
        country: "USA",
        liveUrl: "www.example.com"
      },
      {
        id: 3,
        title: "3 Website Design for Marketing Agency Startup",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/placeholder.svg?height=600&width=800",
        type: "Website",
        languages: "PHP, HTML, CSS, JS",
        platform: "WordPress",
        country: "USA",
        liveUrl: "www.example.com"
      },
      {
        id: 4,
        title: "4 Website Design for Marketing Agency Startup",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/placeholder.svg?height=600&width=800",
        type: "Website",
        languages: "PHP, HTML, CSS, JS",
        platform: "WordPress",
        country: "USA",
        liveUrl: "www.example.com"
      },
    ]
  }

  const handleProjectClick= (category) => {
    setSelectedCategory(category);
    setDialogOpen(true);
  };

  return (
    <div className="project-container">
      <Card>
        <CardContent className="card-content-projects" sx={{ padding: "50px" }}>
          <span className="website-owner-name" sx={{ paddingBottom: "1000px" }}>
            My Work
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
            My most recent projects
          </Typography>
          <div className="all-projects-container-inline">
            <div className="project-box">
              <div
                className="developer-projects"
                style={{ backgroundColor: "rgb(240, 255, 249)" }}
              >
                <img
                  className="developer-projects-image"
                  src="/Projects/WebApplications/fuelmanagement/kk-green.png"
                  alt="project"
                  style={{ width: "100%", height: "220px" }}
                />
              </div>
              <div
                className="project-type-container"
                style={{ marginTop: "70px" }}
              >
                <Grid
                  className="project-description-container"
                  container
                  spacing={2}
                >
                  <Grid item xs={10}>
                    <Box className="project-type">
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{
                          fontSize: "1.25rem",
                          fontWeight: "bold",
                          fontFamily: "Arial, Helvetica, sans-serif",
                          paddingLeft: "5px",
                          color: "black",
                          backgroundColor: "rgb(240, 255, 249)",
                          
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
                        Frontend Web Development
                      </span>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    sx={{
                      backgroundColor: "rgb(240, 255, 249)",
                      alignContent: "center",
                      paddingLeft: "7px",
                    }}
                  >
                    <Box className="arrow-right">
                      <Button variant="contained" onClick ={() => handleProjectClick('frontend')} sx={{ backgroundColor: "transparent", border: "1px solid #07ffb5" }}>
                      <KeyboardArrowRightIcon sx={{ color: "black" }} />
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </div>
            </div>

            {/* web designer projects wordpress */}

            <div className="project-box">
              <div
                className="wordpress-projects"
                style={{ backgroundColor: "rgb(240, 255, 249)" }}
              >
                <img
                  className="wordpress-projects-image"
                  src="/Projects/Wordpress/co2/co2website.png"
                  alt="project"
                  style={{ width: "100%", height: "220px" }}
                />
              </div>
              <div
                className="project-type-container"
                style={{ marginTop: "70px" }}
              >
                <Grid
                  className="project-description-container"
                  container
                  spacing={2}
                >
                  <Grid item xs={10}>
                    <Box className="project-type">
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{
                          fontSize: "1.25rem",
                          fontWeight: "bold",
                          fontFamily: "Arial, Helvetica, sans-serif",
                          paddingLeft: "5px",
                          color: "black",
                          backgroundColor: "rgb(240, 255, 249)",
                          
                        }}
                      >
                        Web Design
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
                        WordPress Website Design
                      </span>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    sx={{
                      backgroundColor: "rgb(240, 255, 249)",
                      alignContent: "center",
                      paddingLeft: "7px",
                    }}
                  >

                    <Box className="arrow-right">
                      <Button variant='contained'  onClick ={() => handleProjectClick('wordpress')} sx={{ backgroundColor: "transparent", border: "1px solid #07ffb5" }}>

                      
                      <KeyboardArrowRightIcon sx={{ color: "black" }}  />
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </div>
            </div>

            {/* ui/ux designer figma */}
            <div className="project-box">
              <div
                className="figma-projects"
                style={{ backgroundColor: "rgb(240, 255, 249)" }}
              >
                <img
                  className="figma-projects-image"
                  src="/Projects/Figma/coconut/coconutplantation.png"
                  alt="project"
                  style={{ width: "100%", height: "220px" }}
                />
              </div>
              <div
                className="project-type-container"
                style={{ marginTop: "70px" }}
              >
                <Grid
                  className="project-description-container"
                  container
                  spacing={2}
                >
                  <Grid item xs={10}>
                    <Box className="project-type">
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{
                          fontSize: "1.25rem",
                          fontWeight: "bold",
                          fontFamily: "Arial, Helvetica, sans-serif",
                          paddingLeft: "5px",
                          color: "black",
                          backgroundColor: "rgb(240, 255, 249)",
                          
                        }}
                      >
                        UI/UX
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
                        User Interfaces for web and mobile
                      </span>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    sx={{
                      backgroundColor: "rgb(240, 255, 249)",
                      alignContent: "center",
                      paddingLeft: "7px",
                    }}
                  >
                    <Box className="arrow-right">
                      <Button variant='contained' onClick ={() => handleProjectClick('ui')}  sx={{ backgroundColor: "transparent", border: "1px solid #07ffb5" }}>
                      <KeyboardArrowRightIcon sx={{ color: "black" }} />
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </div>
            </div>
            {selectedCategory && (
          <ProjectDialog
            open={dialogOpen}
            onClose={() => setDialogOpen(false)}
            projects={projectsData[selectedCategory]}
            initialProject={projectsData[selectedCategory][0]}
          />
        )}
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
