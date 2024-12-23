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
    <div>
      <Card>
        <CardContent className="card-content" sx={{ padding: "200px 0 0 100px" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
              <Grid className="website-owner-details" item xs={10}>

                <span className="website-owner-name">
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
                  <br/>
                  <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis iure dolor, officiis facilis ex assumenda omnis voluptatibus pariatur corrupti aspernatur sit excepturi? Quibusdam, ipsam magni natus amet libero pariatur?
                  </p>
                </Typography>
              </Grid>
              <Grid item xs={2}>
                Lorem ipsum dolor sit a
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default Home;
