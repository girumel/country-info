import axios from 'axios';

const API_URL = 'https://restcountries.com/v3.1/name/';

export const getCountry = async (countryName: string) => {
  try {
    const response = await axios.get(`${API_URL}${countryName}`);
    if (response.status === 200) {
      return response.data;
    } else if (response.status === 404) {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
}
