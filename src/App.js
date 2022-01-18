import { Container, CssBaseline, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BreweryItem from "./components/BreweryItem";
import BreweryList from "./components/BreweryList";
import Search from "./components/Search";
import useBreweries from "./hooks/useBreweries";

const theme = createTheme();

function App() {
  const { data: items } = useBreweries();

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
          <Typography variant="h1">Brewery</Typography>
          <Search />
          {items?.length ? (
            <BreweryList
              items={items}
              renderItem={({ name, brewery_type, country }) => (
                <BreweryItem
                  name={name}
                  type={brewery_type}
                  country={country}
                />
              )}
            />
          ) : null}
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
