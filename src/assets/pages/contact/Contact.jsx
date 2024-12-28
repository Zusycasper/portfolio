import React, { useState } from "react";
import { Box, Card, CardContent, Divider, Typography, TextField, Button, Snackbar, Alert } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./Contact.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch("https://formspree.io/f/xrbbqjrr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus('error');
    }
  };

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
                <Grid item xs={12} md={4}>
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
                  <Grid item container direction="column" spacing={2} style={{ textAlignLast: "start" }}>
                    <Grid item>
                      <label style={{ fontWeight: "bold", color:"white", paddingRight: "10px" }}>Email: </label>
                      <a href="mailto:smsureshi7@gmail.com">
                        smsureshi7@gmail.com
                      </a>
                    </Grid>
                    <Divider />
                    <Grid item>
                      <label style={{ fontWeight: "bold", color:"white", paddingRight: "10px" }}>Phone Number: </label>
                      <a href="tel:+94713333059">+94713333059</a>
                    </Grid>
                    <Divider />
                    <Grid item className="contact-icon-container" style={{ justifyContent: "space-evenly" }}>
                      <a href="https://www.linkedin.com/in/sureshi-siriwardena-537453118/">
                        <LinkedInIcon fontSize="large" />
                      </a>
                      <a href="https://github.com/Zusycasper/portfolio.git">
                        <GitHubIcon fontSize="large" />
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Box className="contact-form-container">
                    <Typography variant="h4" component="h4" className="contact-form-title">
                      Share Review
                    </Typography>
                    <p
                      className="contact-form-description"
                      style={{paddingLeft: "50px",paddingRight: "50px", textAlign: "left" }}
                    >
                      Share your thoughts with me and If I am a good fit for the
                      position you are looking for, I would love to hear from
                      you.
                    </p>
                    <form onSubmit={handleSubmit} className="contact-form" style={{ padding: "50px", color: "white" }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth
                            label="Your Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            InputLabelProps={{style: {color: "white"}}}
                            InputProps={{style: {border: "1px solid white", color: "white"}}}                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth
                            label="Your Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            InputLabelProps={{style: {color: "white"}}}
                            InputProps={{style: {border: "1px solid white", color: "white"}}}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            InputLabelProps={{style: {color: "white"}}}
                            InputProps={{style: {border: "1px solid white", color: "white"}}}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Your message"
                            name="message"
                            multiline
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            InputLabelProps={{style: {color: "white"}}}
                            InputProps={{style: {border: "1px solid white", color: "white"}}}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            fullWidth
                          >
                            Send Message
                          </Button>
                        </Grid>
                      </Grid>
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
              height: "50px",
              textAlignLast: "center",
              alignContent: "space-evenly",
              // borderRadius: 1,
              bgcolor: "#082742",
              "&:hover": {
                bgcolor: "#040c16",
              },
            }}
          >
          Designed and developed by ZusyCasper. © 2024. All rights reserved.
          </Box>
        </div>
      </div>
      <Snackbar open={status === 'success' || status === 'error'} autoHideDuration={6000} onClose={() => setStatus(null)}>
        <Alert onClose={() => setStatus(null)} severity={status === 'success' ? 'success' : 'error'} sx={{ width: '100%' }}>
          {status === 'success' ? 'Message sent successfully!' : 'Failed to send message. Please try again.'}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Contact;

