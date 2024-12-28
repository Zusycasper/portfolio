import React from "react";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
// import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import "./Contact.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CoPresentIcon from "@mui/icons-material/CoPresent";
function Contact() {
  return (
    <div className="contact-container">
      <Card className="contact-card-full">
        <CardContent
          className="card-content-contact"
          sx={{ padding: "50px", justifySelf: "center" }}
        >          
          <Box className="contact-box">
            <Box className="contact-box-content">
              
            <Box className="contact-box-header"/>
              <Grid className="contact-grid-container" container spacing={2}>
                <Grid size={4}>
                  <img
                    src="/profile-pic (4).png"
                    alt="admin-pic"
                    style={{
                      width: "300px",
                      height: "300px",
                      marginBottom: "50px",
                      zIndex: "1",
                    }}
                  />
                  <Grid item xs={8} container direction="column" spacing={2}>
                    <Grid item>
                      <label>Email: </label>
                      <a href="mailto:0lNlK@example.com">
                        smsureshi7@gmail.com
                      </a>
                    </Grid>
                    <Divider />
                    <Grid item>
                      <label>Phone Number: </label>
                      <a href="tel:+94713333059">+94713333059</a>
                    </Grid>
                    <Divider />
                    <Grid item className="contact-icon-container">
                      <a href="https://www.linkedin.com/in/sureshi-siriwardena-537453118/">
                        <LinkedInIcon fontSize="large" />
                      </a>
                      <a href="https://github.com/Zusycasper/portfolio.git">
                        <CoPresentIcon fontSize="large" />
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid size={8}>
                  <Box className="contact-form-container">
                    <Typography variant="h4" component="h4">
                      Share Review
                    </Typography>
                    <p
                      className="contact-form-description"
                      style={{paddingLeft: "50px",paddingRight: "50px", textalignlast: "left" }}
                    >
                      Share your thoughts with me and If I am a good fit for the
                      position you are looking for, I would love to hear from
                      you.
                    </p>
                    <form id="contact-form" className="contact-form" style={{ padding: "50px"}}>
                      <div class="row gx-3 gy-4">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="form-label">Your Name</label>
                            <input
                              name="name"
                              placeholder="Name *"
                              class="form-control"
                              type="text"
                              required=""
                              value=""
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="form-label">Your Email</label>
                            <input
                              name="email"
                              placeholder="Email *"
                              class="form-control"
                              type="email"
                              required=""
                              value=""
                            />
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-group">
                            <label class="form-label">Subject</label>
                            <input
                              name="subject"
                              placeholder="Subject *"
                              class="form-control"
                              type="text"
                              required=""
                              value=""
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <label class="form-label">Your message</label>
                            <textarea
                              name="message"
                              placeholder="Your message *"
                              rows="4"
                              class="form-control"
                              required=""
                            ></textarea>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="send">
                            <button class="px-btn w-100" type="submit">
                              Send Message
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </Box>
                </Grid>
              </Grid>
            </Box>
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

export default Contact;
