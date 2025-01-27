import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { NavMenu } from "./NavMenu";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { LogoIcon } from "./LogoIcon";
import { Link } from "react-router";
import { UserMenu } from "./UserMenu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext, useState, useEffect } from "react";
import { AuthContext, ItemsContext } from "../App/AppContext";
import { Badge } from "@mui/material";

const pages = [
  { name: "Catalog", path: "/catalog" },
  { name: "Admin Panel", path: "/admin" },
];

export const AppBar = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  const authorization = useContext(AuthContext);
  const { items } = useContext(ItemsContext);
  const [role, setRole] = useState<string>(String(localStorage.getItem("userRole")));

  useEffect(() => {
    setRole(String(localStorage.getItem("userRole")));
  }, [authorization.auth]);

  return (
    <MuiAppBar position="sticky">
      <Toolbar>
        <NavMenu pages={pages} />
        <LogoIcon sx={{ mr: 1 }} />
        <Typography
          variant={mobile ? "h5" : "h6"}
          noWrap
          component={Link}
          to="/"
          sx={{
            mr: 2,
            flexGrow: mobile ? 1 : 0,
            fontFamily: "monospace",
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Tea Market
        </Typography>
        <Box flexGrow={1} sx={{ display: { xs: "none", md: "flex" } }}>
          <Button color="inherit" component={Link} to={"/catalog"}>
            Каталог
          </Button>
          {role === "admin" ? (
            <Button color="inherit" component={Link} to={"/admin"}>
              Страница администратора
            </Button>
          ) : (
            <></>
          )}
        </Box>
        <IconButton sx={{ marginRight: 1 }} color="inherit" component={Link} to={"/basket"} aria-label="cart">
          <Badge badgeContent={items.length} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <UserMenu />
      </Toolbar>
    </MuiAppBar>
  );
};
