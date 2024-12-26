import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./Projects.css";
import ProjectDialog from "../../components/projectDialog/ProjectDialog";

const Projects = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const projectsData = {
    frontend: [
      {
        id: 1,
        title: "Operational and Maintanance System",
        description:
          "Our CO2 O&M System is a streamlined operations and maintenance platform designed for efficiency and reliability. It integrates key systems like fuel management, boiler operations, and utilities, offering real-time monitoring and analytics. With a focus on proactive maintenance, it reduces downtime and boosts productivity, empowering industries to achieve sustainable, cost-effective operations.",
        images: [
          {
            src: "/Projects/WebApplications/omsystem/page1.png?height=50&width=100",
          },
          {
            src: "/Projects/WebApplications/omsystem/page2.png?height=50&width=100",
          },
          {
            src: "/Projects/WebApplications/omsystem/page3.png?height=50&width=100",
          },
          {
            src: "/Projects/WebApplications/omsystem/page4.png?height=50&width=100",
          },
        ],
        type: "Web Application",
        languages: "React.js, HTML, CSS",
        platform: "React Web",
        country: "Thailand",
        liveUrl: "not hosted yet",
      },
      {
        id: 2,
        title: "Project Management Software",
        description:
          "The project management tool (PMT) system you developed is designed to streamline workflows, enhance team collaboration, and improve task management. Similar to ClickUp, it offers features such as task tracking, project organization, team communication, and deadline management. The system aims to provide an intuitive, user-friendly interface that helps teams stay organized, track progress, and achieve project goals more efficiently.",
        
          images: [
            {
              src: "/Projects/WebApplications/Projectmanagement/page1.png?height=50&width=100",
            },
            {
              src: "/Projects/WebApplications/Projectmanagement/page2.png?height=50&width=100",
            },
            {
              src: "/Projects/WebApplications/Projectmanagement/page3.png?height=50&width=100",
            },
          ], 
        type: "Web Application",
        languages: "React.js, HTML, CSS",
        platform: "React Web",
        country: "Thailand",
        liveUrl: "not hosted yet",
      },
      {
        id: 3,
        title: "Fuel Management System",
        description:
          "The KKGreen Fuel Management System is designed to efficiently monitor and manage fuel usage across various operations. It includes features for tracking fuel inventory, managing diesel-related processes, and ensuring smooth operation across multiple subsystems. The system is being transitioned to a more flexible hosting environment to improve performance, scalability, and reliability. This upgrade is aimed at optimizing fuel management, enhancing real-time data accessibility, and supporting future growth and technological improvements.",
          images: [
            {
              src: "/Projects/WebApplications/fuelmanagement/kk-green.png?height=50&width=100",
            },
            {
              src: "/Projects/WebApplications/fuelmanagement/page1.png?height=50&width=100",
            },
            {
              src: "/Projects/WebApplications/fuelmanagement/page2.png?height=50&width=100",
            },
            {
              src: "/Projects/WebApplications/fuelmanagement/page3.png?height=50&width=100",
            },
          ], 
                  type: "Web Application",
        languages: "React.js, HTML, CSS",
        platform: "React Web",
        country: "Thailand",
        liveUrl: "https://kkg.co2-asset-management.com/auth/login",
      },
      {
        id: 4,
        title: "Report Management System",
        description:
          "CO2 Innovations Report Management System (RMS) is designed to streamline the management, tracking, and reporting of fuel usage and performance in plants. It operates similarly to a fuel management system, but its primary focus is on gathering detailed fuel consumption data, monitoring fuel efficiency, and maintaining comprehensive reports at daily, weekly, and monthly intervals.",
          images: [
            {
              src: "/Projects/WebApplications/report/page1.png?height=50&width=100",
            },
            {
              src: "/Projects/WebApplications/report/page2.png?height=50&width=100",
            },
            {
              src: "/Projects/WebApplications/report/page3.png?height=50&width=100",
            },
            {
              src: "/Projects/WebApplications/report/page4.png?height=50&width=100",
            },
          ],         type: "Web Application",
        languages: "HTML, CSS, Javascript, Bootstrap, PHP (laravel)",
        platform: "React Web",
        country: "Thailand",
        liveUrl: "https://report.co2-asset-management.com/",
      },
      {
        id: 5,
        title: "Assest Management System",
        description:
          "The Asset Management Software is designed to track and manage client land assets. It provides detailed information about both sold and unsold lands, including cost, population, and other relevant metrics. The system helps clients efficiently monitor the status of their land properties, track their investment details, and gain insights into the demographic and financial aspects of each land parcel. It enhances decision-making by offering a clear view of asset performance and current status.",
          images: [
            {
              src: "/Projects/WebApplications/assest/page1.png?height=50&width=100",
            },
            {
              src: "/Projects/WebApplications/assest/page2.png?height=50&width=100",
            },
            {
              src: "/Projects/WebApplications/assest/page3.png?height=50&width=100",
            },
            {
              src: "/Projects/WebApplications/assest/page4.png?height=50&width=100",
            },
          ],         type: "Web Application",
        languages: "HTML, CSS, Javascript, Bootstrap, PHP (laravel)",
        platform: "React Web",
        country: "Thailand",
        liveUrl: "https://co2-asset-management.com/sign-in",
      },
    ],
    wordpress: [
      {
        id: 1,
        title: "Website Design for Marketing Agency Startup",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/placeholder.svg?height=600&width=800",
        type: "Website",
        languages: "PHP, HTML, CSS, JS",
        platform: "WordPress",
        country: "USA",
      },
      {
        id: 2,
        title: "te Design for Marketing Agency Startup",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/placeholder.svg?height=600&width=800",
        type: "Website",
        languages: "PHP, HTML, CSS, JS",
        platform: "WordPress",
        country: "USA",
      },
      {
        id: 3,
        title: "3 Website Design for Marketing Agency Startup",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/placeholder.svg?height=600&width=800",
        type: "Website",
        languages: "PHP, HTML, CSS, JS",
        platform: "WordPress",
        country: "USA",
      },
      {
        id: 4,
        title: "4 Website Design for Marketing Agency Startup",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/placeholder.svg?height=600&width=800",
        type: "Website",
        languages: "PHP, HTML, CSS, JS",
        platform: "WordPress",
        country: "USA",
      },
    ],
    // ui interface designs
    ui: [
      {
        id: 1,
        title: "Website Design for Marketing Agency Startup",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/placeholder.svg?height=600&width=800",
        type: "Website",
        languages: "PHP, HTML, CSS, JS",
        platform: "WordPress",
        country: "USA",
      },
      {
        id: 2,
        title: "te Design for Marketing Agency Startup",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/placeholder.svg?height=600&width=800",
        type: "Website",
        languages: "PHP, HTML, CSS, JS",
        platform: "WordPress",
        country: "USA",
      },
      {
        id: 3,
        title: "3 Website Design for Marketing Agency Startup",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/placeholder.svg?height=600&width=800",
        type: "Website",
        languages: "PHP, HTML, CSS, JS",
        platform: "WordPress",
        country: "USA",
      },
      {
        id: 4,
        title: "4 Website Design for Marketing Agency Startup",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/placeholder.svg?height=600&width=800",
        type: "Website",
        languages: "PHP, HTML, CSS, JS",
        platform: "WordPress",
        country: "USA",
      },
    ],
  };

  const handleProjectClick = (category) => {
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
                      <Button
                        variant="contained"
                        onClick={() => handleProjectClick("frontend")}
                        sx={{
                          backgroundColor: "transparent",
                          border: "1px solid #07ffb5",
                        }}
                      >
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
                      <Button
                        variant="contained"
                        onClick={() => handleProjectClick("wordpress")}
                        sx={{
                          backgroundColor: "transparent",
                          border: "1px solid #07ffb5",
                        }}
                      >
                        <KeyboardArrowRightIcon sx={{ color: "black" }} />
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
                      <Button
                        variant="contained"
                        onClick={() => handleProjectClick("ui")}
                        sx={{
                          backgroundColor: "transparent",
                          border: "1px solid #07ffb5",
                        }}
                      >
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
                sx={{ backgroundColor: "rgb(240, 255, 249)" }}
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
};

export default Projects;
