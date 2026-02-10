import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

export const Navbar = () => {
  const navItems = ["About", "Projects", "Experience", "Testimonials"];

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          AY.
        </Typography>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          {navItems.map((item) => (
            <MuiLink
              component={RouterLink}
              key={item}
              to={`/${item.toLowerCase()}`}
              color="inherit"
              underline="none"
              sx={{ mr: 2 }}
            >
              {item}
            </MuiLink>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
