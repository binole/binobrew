import config from "../config";
import useFetch from "./useFetch";

const useBreweryById = (id) => {
  return useFetch(`${config.apiUrl}/breweries/${id}`);
};

export default useBreweryById;
