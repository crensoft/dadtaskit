import { Box, Container, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Topbar } from "../components/topbar";
import { WelcomeHero } from "../components/welcome-hero";

const Home: NextPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flexGrow={1}
      sx={{ minHeight: "100vh", bgcolor: "#eee" }}
    >
      <Head>
        <title>DadTaskIt</title>
        <meta
          name="description"
          content="Productivity software for busy dads."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Topbar />

      <Box component="main" flexGrow={1}>
        <WelcomeHero />
        <Container maxWidth="xl"></Container>
      </Box>

      <Box component="footer">
        <Container maxWidth="xl" sx={{ textAlign: "center" }}>
          <Typography variant="caption" align="center">
            {new Date().getFullYear()} - <strong>DadTaskIt</strong>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
