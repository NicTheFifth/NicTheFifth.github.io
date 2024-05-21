import Container from "@mui/material/Container";

type Props = {
  children: React.ReactNode;
};

const BaseLayout = ({ children }: Props) => {
  return (
    <>
      <main>
        <Container maxWidth="md" sx={{ mt: 5 }}>
          {children}
        </Container>
      </main>
    </>
  );
};

export default BaseLayout;
