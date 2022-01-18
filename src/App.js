import { Container, CssBaseline, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useCallback, useState } from "react";
import BreweryItem from "./components/BreweryItem";
import BreweryList from "./components/BreweryList";
import Search from "./components/Search";
import useBreweries from "./hooks/useBreweries";

const theme = createTheme();

function App() {
  const [query, setQuery] = useState("");
  const { data: items } = useBreweries({ query });

  const handleSearch = useCallback((term) => {
    setQuery(term);
  }, []);

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
          <Search onSubmit={handleSearch} />
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
