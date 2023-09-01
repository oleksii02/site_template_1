import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import './DrawerAppBar.css'

const drawerWidth = 240;
const navItems = [
    {name: "Main", id: '#main'},
    {name: "About Us", id: '#about_us'},
    {name: "Features", id: '#features'},
    {name: 'Screenshots', id: '#screenshots'},
    {name: 'Process', id: '#process'},
    {name: 'Contacts', id: '#contacts'},
];

function DrawerAppBar(props) {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: "center"}} className={'nav-wrapper'}>
            <Typography  sx={{my: 2}}>
                <a href="/" className="brand-logo"><h1>LOGO HERE!</h1></a>
            </Typography>
            <Divider/>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{textAlign: "center"}}>
                            <ListItemText primary={<a href={item.id}>{item.name}</a>}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{display: "flex"}} className={'nav-wrapper'} >
            <CssBaseline/>
            <AppBar component="nav" sx={{
                backgroundColor: '#11ffee00',
                padding:0,
                position: 'inherit', boxShadow: 'none'
            }}>
                <Toolbar sx={{justifyContent: 'flex-end', padding:0}}>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1, color: "#292D32"}}
                    >
                        <a href="/" className="brand-logo"><h1>LOGO HERE!</h1></a>
                    </Typography>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggle}

                        sx={{mr: 2, display: {md: 'none'}, color: "#292D32"}}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <Box sx={{display: {xs: 'none', md: 'block'}}}>
                        <div className={'hide-on-med-and-down'}>
                        {navItems.map((item) => (
                            <Button key={item.name} sx={{color: "#292D32",display:'block'}}>
                                <a href={item.id}>{item.name}</a>
                            </Button>

                        ))}</div>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true // Better open performance on mobile.
                    }}
                    sx={{
                        display: {sm: 'block', md: 'none'},
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth
                        }
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>

        </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func
};

export default DrawerAppBar;
