import { Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Outlet } from "react-router-dom";

const theme = createTheme();

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: [4, 8],
          }}
        >
          <Outlet />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
