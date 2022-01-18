import config from "../config";
import useFetch from "./useFetch";

const useBreweries = ({ query }) => {
  const url = new URL(
    query
      ? `${config.apiUrl}/breweries/search?query=${query}`
      : `${config.apiUrl}/breweries`
  );

  return useFetch(url.toString());
};

export default useBreweries;
