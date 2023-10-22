import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";

interface Country {
  name: {
    common: string;
  };
  capital: string[];
  flags: {
    png: string;
    alt: string;
  };
  population: number;
  area: number;
  latlng: number[];
}

interface CountryProps {
  country: Country;
}

const CountryCard: React.FC<CountryProps> = ({ country }) => {
  const { name, capital, flags, population, area, latlng } = country;
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
          <Sheet
            sx={{
              bgcolor: "background.level1",
              borderRadius: "sm",
              p: 1.5,
              my: 1.5,
              display: "flex",
              gap: 2,
              "& > div": { flex: 1 },
            }}
          >
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Population
              </Typography>
              <Typography fontWeight="lg">
                {population.toLocaleString()}
              </Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Area
              </Typography>
              <Typography fontWeight="lg">
                {area.toLocaleString()} km<sup>2</sup>
              </Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Coordinates
              </Typography>
              <Typography fontWeight="lg">
                {latlng[0]}, {latlng[1]}
              </Typography>
            </div>
          </Sheet>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CountryCard;
