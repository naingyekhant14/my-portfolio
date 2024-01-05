import { Box, Divider, Drawer, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 300;

const navItems = [
  {
    id: 1,
    label: "Home",
    route: "/",
  },

  {
    id: 2,
    label: "About",
    route: "#about",
  },

  {
    id: 3,
    label: "Projects",
    route: "#project",
  },
  {
    id: 4,
    label: "Contact",
    route: "#contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpenDrawer = () => {
    setOpen((preState) => !preState);
  };

  const drawer = (
    <Box
      onClick={handleOpenDrawer}
      sx={{
        textAlign: "center",
        bgcolor: "success.main",
        color: "primary",
        height: "100vh",
      }}
    >
      <Typography
        variant="h6"
        sx={{ my: 2, fontWeight: "bold", color: "primary.main" }}
      >
        <Link
          style={{
            textDecoration: "none",
            cursor: "pointer",
          }}
          href={"/"}
        >
          <Typography
            sx={{
              color: "primary.main",
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            NYK
          </Typography>
        </Link>
      </Typography>
      <Divider />
      {navItems.map((item) => {
        return (
          <Link
            style={{
              textDecoration: "none",
              cursor: "pointer",
            }}
            key={item.id}
            href={item.route}
          >
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: "bold",
                color: "primary.main",
                mt: 2.5,
              }}
            >
              {item.label}
            </Typography>
          </Link>
        );
      })}
    </Box>
  );
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        bgcolor: "primary.main",
        mx: 10,
        position: "sticky",
        top: 0,
        py: 1.5,
      }}
    >
      <IconButton
        onClick={handleOpenDrawer}
        sx={{ color: "success.main", display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Link
          style={{
            textDecoration: "none",
            cursor: "pointer",
          }}
          href={"/"}
        >
          <Typography
            sx={{
              color: "success.main",
              fontSize: 40,
              fontWeight: "bold",
              display: { xs: "none", sm: "block" },
            }}
          >
            NYK
          </Typography>
        </Link>
        <Box sx={{ display: "flex" }}>
          {navItems.map((item) => {
            return (
              <Link
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  marginLeft: 30,
                }}
                key={item.id}
                href={item.route}
              >
                <Typography
                  sx={{
                    color: "success.main",
                    fontSize: 20,
                    fontWeight: 700,
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  {item.label}
                </Typography>
              </Link>
            );
          })}
        </Box>
      </Box>
      <Drawer
        variant="temporary"
        open={open}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar;
