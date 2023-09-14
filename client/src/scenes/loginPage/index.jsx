import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width: 720px");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          SocioPedia
        </Typography>
      </Box>

      <Box
        width={isNonMobile ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
        textAlign="center"
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.2rem" }}>
          Welcome To SocioPedia!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
