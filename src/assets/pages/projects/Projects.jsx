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
        style: { color: "black" },
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
        ],
        type: "Web Application",
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
        ],
        type: "Web Application",
        languages: "HTML, CSS, Javascript, Bootstrap, PHP (laravel)",
        platform: "React Web",
        country: "Thailand",
        liveUrl: "https://co2-asset-management.com/sign-in",
      },
    ],

    //wordpress projects
    wordpress: [
      {
        id: 1,
        title: "CO2 Website",
        description:
          "The CO2 Website is built using the Astra theme and Elementor page builder. It offers a flexible and user-friendly design, enabling easy customization and responsiveness. The combination of Astra and Elementor ensures a seamless, professional appearance while providing an intuitive interface for managing content and enhancing user experience.",
        images: [
          {
            src: "/Projects/Wordpress/co2/co2website.png?height=50&width=100",
          },
          {
            src: "/Projects/Wordpress/co2/page2.png?height=50&width=100",
          },
          {
            src: "/Projects/Wordpress/co2/page3.png?height=50&width=100",
          },
          {
            src: "/Projects/Wordpress/co2/page4.png?height=50&width=100",
          },
        ],
        type: "Website",
        languages: "none",
        platform: "WordPress",
        country: "Thailand",
        liveUrl: "https://www.co2.co.th/",
      },
      {
        id: 2,
        title: "Luxury Holidays",
        description:
          "The Luxury Holidays website is built using the Theme-2015 theme. It offers an elegant and user-friendly design, showcasing luxury holiday packages with a focus on ease of navigation and visual appeal. The theme ensures a responsive layout, providing a seamless browsing experience across different devices.",
        images: [
          {
            src: "/Projects/Wordpress/luxuryholidays/page1.png?height=50&width=100",
          },
          {
            src: "/Projects/Wordpress/luxuryholidays/page2.png?height=50&width=100",
          },
          {
            src: "/Projects/Wordpress/luxuryholidays/page3.png?height=50&width=100",
          },
        ],
        type: "Website",
        languages: "none",
        platform: "WordPress",
        country: "Sri Lanka",
        liveUrl: "https://luxuryholidays.tours/",
      },
      {
        id: 3,
        title: "Tourman",
        description:
          "The TourMan website is built using the Theme-2015 theme. It features a clean and professional design, tailored for promoting tour packages and travel services. The theme ensures a responsive and user-friendly experience, making it easy for visitors to explore travel options and plan their trips.",
        images: [
          {
            src: "/Projects/Wordpress/tourman/page1.png?height=50&width=100",
          },
          {
            src: "/Projects/Wordpress/tourman/page2.png?height=50&width=100",
          },
          {
            src: "/Projects/Wordpress/tourman/page3.png?height=50&width=100",
          },
        ],
        type: "Website",
        languages: "none",
        platform: "WordPress",
        country: "Sri Lanka",
        liveUrl: "https://tourman.tours/",
      },
    ],

    // ui interface designs
    ui: [
      {
        id: 1,
        title:
          "BLOCKCHAIN INTEGRATION DIGITAL COMMUNITY BIOMASS POWER PLANT IN SRI LANKA",
        description:
          "The Digital Community Biomass Power Plant system leverages local biomass resources to address Sri Lanka's energy and economic challenges. By integrating Blockchain technology and smart contracts, it ensures secure, transparent, and efficient energy transactions, fostering sustainability and community-driven renewable energy solutions. This approach promotes decentralized energy generation, peer-to-peer trading, and carbon credit management.",
        images: [
          {
            src: "/Projects/Figma/coconut/coconutplantation.png?height=50&width=100",
          },
          {
            src: "/Projects/Figma/coconut/dashboard.png?height=50&width=100",
          },
          {
            src: "/Projects/Figma/coconut/profile.png?height=50&width=100",
          },
          {
            src: "/Projects/Figma/coconut/Report.png?height=50&width=100",
          },
        ],
        type: "Figma Design - web",
        languages: "none",
        platform: "Figma",
        country: "Thailand and Sri Lanka",
        liveUrl: "none",
      },
      {
        id: 2,
        title:
          "BLOCKCHAIN INTEGRATION DIGITAL COMMUNITY BIOMASS POWER PLANT IN SRI LANKA",
        description:
          "The Digital Community Biomass Power Plant system leverages local biomass resources to address Sri Lanka's energy and economic challenges. By integrating Blockchain technology and smart contracts, it ensures secure, transparent, and efficient energy transactions, fostering sustainability and community-driven renewable energy solutions. This approach promotes decentralized energy generation, peer-to-peer trading, and carbon credit management.",
        images: [
          {
            src: "/Projects/Figma/coco-mobile/Desktop1.png?height=50&width=100",
          },
        ],
        type: "Figma Design - mobile",
        languages: "none",
        platform: "Figma",
        country: "Thailand and Sri Lanka",
        liveUrl: "none",
      },
      {
        id: 3,
        title: "MAINTANANCE MANAGEMENT SYSTEM",
        description:
          "This maintenance management system is designed for CO2 power plants to streamline equipment tracking, schedule preventive maintenance, and efficiently manage resources. It ensures optimal performance and reliability of plant operations through well-organized workflows.",
        images: [
          {
            src: "/Projects/Figma/maintanance-mgt/login page.png?height=50&width=100",
          },
          {
            src: "/Projects/Figma/maintanance-mgt/User Management.png?height=50&width=100",
          },
          {
            src: "/Projects/Figma/maintanance-mgt/Work Order design 9.png?height=50&width=100",
          },
          {
            src: "/Projects/Figma/maintanance-mgt/Work Request design 3.png?height=50&width=100",
          },
        ],
        type: "Figma Design - web",
        languages: "none",
        platform: "Figma",
        country: "Thailand",
        liveUrl: "none",
      },
      {
        id: 4,
        title: "OPERATION AND MAINTANANCE SYSTEM",
        description:
          "The O&M system for CO2 power plants is designed to optimize operations and maintenance processes by streamlining equipment tracking, scheduling preventive maintenance, and managing resources efficiently. It ensures reliability and sustainability in plant performance while minimizing downtime.",
        images: [
          {
            src: "/Projects/Figma/omsystem/Login 2.png?height=50&width=100",
          },
          {
            src: "/Projects/Figma/omsystem/fuel Inventory.png?height=50&width=100",
          },
          {
            src: "/Projects/Figma/omsystem/Heat and mass 1.png?height=50&width=100",
          },

          {
            src: "/Projects/Figma/omsystem/Utility dashboard.png?height=50&width=100",
          },
        ],
        type: "Figma Design - web",
        languages: "none",
        platform: "Figma",
        country: "Thailand",
        liveUrl: "none",
      },
    ],
  };

  const handleProjectClick = (category) => {
    setSelectedCategory(category);
    setDialogOpen(true);
  };

  return (
    <div className="project-container" id="projects">
      <Card className="card-projects-full">
        <CardContent className="card-content-projects" sx={{ padding: "50px" }}>
          <span className="website-owner-name" style={{color:"white"}}>My Work</span>
          <Typography
            variant="h4"
            component="div"
            sx={{
              fontWeight: "bold",
              fontFamily: "Space Grotesk, sans-serif",
              paddingLeft: "50px",
              color: "white",
            }}
          >
            My most recent projects
          </Typography>
          <div className="all-projects-container-inline">
            <div className="project-box">
              <div
                className="developer-projects"
                style={{ backgroundColor: "#f1f8ff" }}
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
                  <Grid item xs={8}>
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
                          backgroundColor: "#f1f8ff",
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
                        Frontend Development
                      </span>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      backgroundColor: "#f1f8ff",
                      alignContent: "center",
                      paddingLeft: "7px",
                    }}
                  >
                    <Box className="arrow-right">
                      <Button
                        variant="contained"
                        onClick={() => handleProjectClick("frontend")}
                        sx={{
                          backgroundColor: "1976d2",
                          border: "1px solid #1976d2",
                        }}
                      >
                        <KeyboardArrowRightIcon
                          sx={{
                            color: "black",
                            "&:hover": {
                              color: "white",
                            },
                          }}
                        />
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
                style={{ backgroundColor: "#f1f8ff" }}
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
                  <Grid item xs={8}>
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
                          backgroundColor: "#f1f8ff",
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
                    xs={4}
                    sx={{
                      backgroundColor: "#f1f8ff",
                      alignContent: "center",
                      paddingLeft: "7px",
                    }}
                  >
                    <Box className="arrow-right">
                      <Button
                        variant="contained"
                        onClick={() => handleProjectClick("wordpress")}
                        sx={{
                          backgroundColor: "1976d2",
                          border: "1px solid #1976d2",
                        }}
                      >
                        <KeyboardArrowRightIcon
                          sx={{
                            color: "black",
                            "&:hover": {
                              color: "white",
                            },
                          }}
                        />
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
                style={{ backgroundColor: "#f1f8ff" }}
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
                  <Grid item xs={8}>
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
                          backgroundColor: "#f1f8ff",
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
                        User Interface Designs
                      </span>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      backgroundColor: "#f1f8ff",
                      alignContent: "center",
                      paddingLeft: "7px",
                    }}
                  >
                    <Box className="arrow-right" style={{ paddingLeft: "7px" }}>
                      <Button
                        className="project-button"
                        variant="contained"
                        onClick={() => handleProjectClick("ui")}
                        sx={{
                          backgroundColor: "1976d2",
                          border: "1px solid #1976d2",
                          "&:hover": {
                            borderColor: "#1976d2",
                            backgroundColor: "#040c16",
                            color: "#ffffff",
                          },
                        }}
                      >
                        <KeyboardArrowRightIcon
                          sx={{
                            color: "black",
                            "&:hover": {
                              color: "white",
                            },
                          }}
                        />
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
                sx={{ backgroundColor: "#f1f8ff" }}
              />
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Projects;
