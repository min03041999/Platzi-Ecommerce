//Đổi Port
//export PORT=8000

<!-- import {
  Toolbar,
  Typography,
  Divider,
  AppBar,
  Tooltip,
  Avatar,
  Box,
  Badge,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { logoutAsync } from "../../app/features/loginSlice";
import { Outlet, useNavigate } from "react-router-dom";
import React, { useState } from "react";

const StyledRoot = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
  background: "#fff",
});

const drawerWidth = 250;

const DashboardLayout = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const user = useSelector((state: any) => state.authentication.user);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const settingMenu = [
    {
      title: "Profile",
      action: () => {
        navigate("/admin/profile");
      },
    },
    {
      title: "Logout",
      action: () => {
        dispatch(logoutAsync() as any);
        navigate("/admin");
      },
    },
  ];

  return (
    <StyledRoot>
      <div className="admin-nav">
        <Toolbar>
          <Typography variant="h6">Platzi Dashboard</Typography>
        </Toolbar>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          sx: "0",
        }}
      >
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start">
            <MenuIcon />
          </IconButton>
          <Typography sx={{ flexGrow: 1 }} />
          <Box>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ paddingLeft: "15px" }}
              >
                <Avatar alt="Remy Sharp" src={user.avatar} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settingMenu.map((item, i) => (
                <MenuItem key={i} onClick={item.action}>
                  <Typography textAlign="center">{item.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Box sx={{ p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </StyledRoot>
  );
};

export default DashboardLayout; -->
