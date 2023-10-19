import Typography from "@mui/joy/Typography";

const HeaderBanner = () => {
  return (
    <div className="header">
      <Typography level="h1" fontSize="x1" color="primary">
        Country Information
      </Typography>
      <Typography level="body-lg" fontSize="x4" color="neutral">
        Search and view information about different countries
      </Typography>
    </div>
  );
};

export default HeaderBanner;
