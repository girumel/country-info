import React, { useState } from "react";
import { getCountry } from "../services/RestCountries";
import { validateInput } from "../utils/validateInput";
import { Button, FormControl, FormHelperText, Input, Stack } from "@mui/joy";
import SearchIcon from "@mui/icons-material/Search";
import { InfoOutlined } from "@mui/icons-material";
import CountryCard from "./CountryCard";

const SearchBar: React.FC = () => {
  const [input, setInput] = useState("");
  const [country, setCountry] = useState(null);

  const handleSearch = async (event: any) => {
    event.preventDefault();
    if (validateInput(input)) {
      const country = await getCountry(input);
      if (country) {
        setCountry(country[0]);
      } else {
        setCountry(null);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <Stack direction="row" spacing={2}>
          <FormControl>
            <Input
              required
              value={input}
              onChange={(event) => setInput(event.target.value)}
              startDecorator={<SearchIcon />}
              placeholder="Search for a country..."
              variant="soft"
              size="lg"
            />
          </FormControl>

          <Button
            onClick={handleSearch}
            disabled={!validateInput(input)}
            type="submit"
            variant="soft"
          >
            Search
          </Button>
        </Stack>
        {!validateInput(input) && (
          <FormControl error>
            <FormHelperText>
              <InfoOutlined fontSize="small" />
              Please enter a valid country name
            </FormHelperText>
          </FormControl>
        )}
      </form>
      <div>{country && <CountryCard country={country} />}</div>
    </>
  );
};
export default SearchBar;
