import React, { useState } from "react";
import { getCountry } from "../services/RestCountries";
import { Button, FormControl, Input, Stack } from "@mui/joy";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [country, setCountry] = useState(null);

  const handleSearch = async () => {
    const country = await getCountry(input);
    setCountry(country[0]);
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

          <Button onClick={handleSearch} type="submit" variant="soft">
            Search
          </Button>
        </Stack>
      </form>
    </>
  );
};
export default SearchBar;
