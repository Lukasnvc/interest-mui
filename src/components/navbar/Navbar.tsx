import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import ImageSearchbar from "../searchbar/ImageSearchbar";
import NavbarMenu from "./NavbarMenu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, position: "sticky", top: 0, zIndex: 2 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            INTEREST
          </Typography>
          {/* search */}
          <ImageSearchbar />
          <NavbarMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
