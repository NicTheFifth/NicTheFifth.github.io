import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

type Props = {
  children: React.ReactNode;
};

const BaseLayout = ({ children }: Props) => {
  return (
    <Box
      sx={{ background: "linear-gradient(#1a857d, #167c4c)" }}
      minHeight={"100vh"}
    >
      <Container maxWidth="md" sx={{ pt: 5 }}>
        {children}
      </Container>
    </Box>
  );
};

export default BaseLayout;
