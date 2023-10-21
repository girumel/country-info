import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

interface Country {
  name: {
    common: string;
  };
  capital: string[];
  flags: {
    png: string;
    alt: string;
  };
}

interface CountryProps {
  country: Country;
}

const CountryCard: React.FC<CountryProps> = ({ country }) => {
  const { name, capital, flags } = country;
  return (
    <Box
      className="country-card"
      sx={{
        width: "100%",
        position: "relative",
        justifyContent: "center",
        overflow: { xs: "auto", sm: "initial" },
      }}
    >
      <Card orientation="horizontal">
        <CardContent>
          <AspectRatio flex ratio="1" maxHeight={160} sx={{ minWidth: 320 }}>
            <img src={flags.png} loading="lazy" alt={flags.alt} />
          </AspectRatio>
          <Typography fontSize="xl" fontWeight="lg">
            {name.common},{" "}
            <Typography
              level="body-sm"
              fontWeight="lg"
              textColor="text.tertiary"
            >
              {capital[0]}
            </Typography>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CountryCard;
