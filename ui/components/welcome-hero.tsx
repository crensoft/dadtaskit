import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { FunctionComponent } from "react";

export const WelcomeHero: FunctionComponent<{}> = () => {
  return (
    <Box sx={{ bgcolor: "primary.main" }}>
      <Container maxWidth="xl">
        <Grid container alignItems="center" spacing={6}>
          <Grid item xs={12} md={6}>
            <Stack direction="column" sx={{ py: 12 }} spacing={2}>
              <Typography variant="h2" color="secondary">
                <strong>Empowering Dads Everywhere.</strong>
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.2rem" }}
                color="primary.contrastText"
              >
                Get things done, stay on top of priorities, and track daily
                tasks <em>like a pro</em>.
              </Typography>
              <Box>
                <Link href="/app">
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    href="/app"
                  >
                    Get Started
                  </Button>
                </Link>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            [media]
          </Grid>
        </Grid>
      </Container>{" "}
    </Box>
  );
};
