import config from "../config";
import useFetch from "./useFetch";

const useBreweries = () => {
  return useFetch(`${config.apiUrl}/breweries`);
};

export default useBreweries;
