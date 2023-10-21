import React, { useState } from "react";
import { getCountry } from "../services/RestCountries";
import { validateInput } from "../utils/validateInput";
import { Button, FormControl, Input, Stack } from "@mui/joy";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
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
      </form>
    </>
  );
};
export default SearchBar;
