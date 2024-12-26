import { Box, CardContent, Grid, Paper, Typography, Card } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import "./Home.css";
import TypingEffect from "../../components/typingEffect/TypingEffect";

function Home() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="home-container">
      <Card>
        <CardContent
          className="card-content"
          sx={{ padding: "200px 0 0 100px" }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
              <Grid className="website-owner-details" item xs={8}>
                <span className="website-owner-name-title">
                  Sureshi Siriwardena [ZusyCasper]
                </span>
                <Typography
                  variant="h1"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Space Grotesk, sans-serif",
                  }}
                >
                  Hi, I'm Zusy
                  <br />
                  <span className="typed-text">
                    <TypingEffect />
                  </span>
                  <br />
                  <p className="description-about-admin">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt corporis iure dolor, officiis facilis ex assumenda
                    omnis voluptatibus pariatur corrupti aspernatur sit
                    excepturi? Quibusdam, ipsam magni natus amet libero
                    pariatur?
                  </p>
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <div className="hs-banner">
                  <img
                    className="admin-image"
                    src="/profile-pic (1).png"
                    alt="admin-image"
                  />
                </div>
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
              borderRadius: 1,
              bgcolor: "#040c16",
              "&:hover": {
                bgcolor:"#04160E",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
