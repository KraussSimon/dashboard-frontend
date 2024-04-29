import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";

export default function MyAppBar(props) {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const DrawerList = (
        <Box sx={{ width: '250px' }} role="presentation" onClick={toggleDrawer}>

            <List>
                {[{linkText: 'Home', displayText: "Home", icon: <HomeIcon fontSize="large"/>}, 
                  {linkText: 'Master', displayText: "Master", icon: <EngineeringIcon fontSize="large"/>},
                  {linkText: 'Client1', displayText: "Client 1", icon: <SpaceDashboardIcon fontSize="large"/>},
                  {linkText: 'Client2', displayText: "Client 2", icon: <SpaceDashboardIcon fontSize="large"/>}].map((linkObject) => (
                    <ListItem key={linkObject.linkText} disablePadding>
                        <ListItemButton onClick={() => navigate(`/${linkObject.linkText}`)}>
                            <ListItemIcon>
                               {linkObject.icon}
                            </ListItemIcon>
                            <ListItemText primary={linkObject.displayText} primaryTypographyProps={{variant: "h6"}}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box>
            <AppBar position="static" color='primary' enableColorOnDark>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        {props.pageName}
                    </Typography>
                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
            <Drawer open={open} onClose={toggleDrawer}>
                {DrawerList}
            </Drawer>
        </Box>
    );
};