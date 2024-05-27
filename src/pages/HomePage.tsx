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
              backgroundImage: "linear-gradient(-11deg, #38a16f, #3ca59d)",
              position: "relative",
              zIndex: 2,
            }}
          >
            <Typography
              variant="h1"
              sx={{ rotate: "11deg", skewY: "11deg" }}
              visibility="hidden"
            >
              Welcome to derg Noctis' page
            </Typography>
          </Paper>
        </Box>
        <Box height={0}>
          <Paper
            sx={{
              rotate: "-11deg",
              skewY: "-11deg",
              width: "fit-content",
              mx: "auto",
              borderRadius: 10,
              backgroundImage: "linear-gradient(45deg, #38a16f, #3ca59d)",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Typography
              variant="h1"
              sx={{ rotate: "11deg", skewY: "11deg" }}
              visibility="hidden"
            >
              Welcome to derg Noctis' page
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
            backgroundImage: "linear-gradient(11deg, #38a16f, #3ca59d)",
            position: "relative",
            zIndex: 2,
            boxShadow: "none",
          }}
        >
          <Typography variant="h1" sx={{ rotate: "11deg", skewY: "11deg" }}>
            Welcome to derg Noctis' page
          </Typography>
        </Paper>
      </Box>
    </BaseLayout>
  );
};

export default HomePage;
