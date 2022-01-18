import { Box, CssBaseline, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Search from "./components/Search";
import useBreweries from "./hooks/useBreweries";

const theme = createTheme();

function App() {
  const { data } = useBreweries();

  console.log({ data });

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "100%",
            px: 2,
          }}
        >
          <Typography variant="h1">Brewery</Typography>
          <Search />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
