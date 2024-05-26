import Typography from "@mui/material/Typography";
import BaseLayout from "../components/BaseLayout";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const HomePage = () => {
  return (
    <BaseLayout>
      <Box sx={{ mt: 5, px: "auto" }}>
        <Box height={0}>
          <Paper
            sx={{
              rotate: "11deg",
              skewY: "11deg",
              width: "fit-content",
              mx: "auto",
              borderRadius: 10,
              backgroundImage: "linear-gradient(45deg, #3ca59d, #38a16f)",
              height: "3rem",
              position: "relative",
            }}
          >
            <Typography variant="h1" visibility="hidden">
              Welcome to derg Noctis' page.
            </Typography>
          </Paper>
        </Box>
        <Paper
          sx={{
            rotate: "-11deg",
            skewY: "-11deg",
            width: "fit-content",
            mx: "auto",
            borderRadius: 10,
            backgroundImage: "linear-gradient(45deg, #38a16f, #3ca59d)",
            position: "relative",
          }}
        >
          <Typography variant="h1" sx={{ rotate: "11deg", skewY: "11deg" }}>
            Welcome to derg Noctis' page.
          </Typography>
        </Paper>
      </Box>
    </BaseLayout>
  );
};

export default HomePage;
