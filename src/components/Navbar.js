import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  styled,
  Button,
  useTheme,
  Menu,
  IconButton,
  Typography,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { ButtonGr } from "./ui/ButtonGr";
const pages = ["Home", "Relations investisseurs", "Contact"];

const DeskStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));
const MobileStyle = styled(Box)(({ theme }) => ({
  display: "none",
  justifyContent: "space-between",
  [theme.breakpoints.down("lg")]: {
    display: "flex",
  },
}));

export const Navbar = () => {
  const [openNavMenu, setOpenNavMenu] = useState(false);
  const theme = useTheme();
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", boxShadow: "none" }}
    >
      <Toolbar
        sx={{
          height: "100px",
          display: "flex",
          justifyContent: "space-between",
          [theme.breakpoints.down("lg")]: {
            height: "50px",
            minHeight: "40px",
            padding: "8px",
          },
        }}
      >
        <Box
          component="img"
          src="Grodesto H.png"
          style={{
            width: 159,
            height: 37,
            display: "flex",
          }}
          alt="GroDesto LOGO"
        />
        <DeskStyle>
          <Box
            sx={{
              flexGrow: 1,

              marginRight: "79px",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  fontSize: 16,
                  fontFamily: "Poppins",
                  color: "#707070",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <ButtonGr
              title="Partenariat"
              variant="outlined"
              style={{
                background: theme.palette.BlueGradient.main,
                background: theme.palette.BlueGradient.mainGradient,
                width: 164,
                height: 56,
                marginRight: 2,
              }}
            ></ButtonGr>
            <ButtonGr
              title="Commencer à vendre"
              variant="outlined"
              style={{
                background: theme.palette.YellowGradient.main,
                background: theme.palette.YellowGradient.mainGradient,
                width: 260,
                height: 56,
              }}
            ></ButtonGr>
          </Box>
        </DeskStyle>
        <MobileStyle>
          <IconButton
            onClick={(e) => {
              setOpenNavMenu(true);
            }}
          >
            <MenuIcon sx={{ color: theme.palette.BlueGroDesto.main }} />
          </IconButton>
          <Menu
            open={openNavMenu}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            onClose={(e) => setOpenNavMenu(false)}
            
            
          >
            <MenuItem sx={{display:"flex" , flexDirection:"column",}}>
            {pages.map((page) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  fontSize: 10,
                  fontFamily: "Poppins",
                  color: "#707070",
                }}
              >
                {page}
              </Button>
            ))}
            </MenuItem>
            
            
              <MenuItem >
               <ButtonGr
              title="Partenariat"
              variant="outlined"
              style={{
                background: theme.palette.BlueGradient.main,
                background: theme.palette.BlueGradient.mainGradient,
                width: 82,
                height: 28,
                fontSize: 5,
                
              }}
            ></ButtonGr> 
              </MenuItem>
              <MenuItem>

            <ButtonGr
              title="Commencer à vendre"
              variant="outlined"
              style={{
                background: theme.palette.YellowGradient.main,
                background: theme.palette.YellowGradient.mainGradient,
                width: 130,
                height: 28,
                fontSize: 5,
                
              }}
            ></ButtonGr> 
              </MenuItem>
            
            
          </Menu>
        </MobileStyle>
      </Toolbar>
    </AppBar>

    // <div>
    // <AppBar position="sticky">

    //     <StyledToolbar>
    //       {/* <img src="Grodesto H.png" style={{width:159,height:37,display:{xs:"none" ,sm:"block" }}}/>  */}

    //         {/* <Typography variant="h6" sx={{display:{color:"black"}}}> Testing nav bar</Typography>
    //          */}
    //          <Box component="img" src="Grodesto H.png"  style={{width:159,height:37,display:{xs:"none" ,sm:"block" }}} alt="The house from the offer." />

    //         <Icons >
    //         <Button color="secondary">Primary</Button>
    //         <Button color="secondary">Primary</Button>
    //         <Button color="secondary">Primary</Button>

    //         <Button  variant="outlined" color="success">Partenariat</Button>
    //         <Button  variant="outlined" color="success" sx={{width:170}}>Commencer à vendre</Button>

    //         </Icons>

    //     </StyledToolbar>
    //     <Menu
    //     id="demo-positioned-menu"
    //     aria-labelledby="demo-positioned-button"
    //     open={open}
    //     onClose={(e)=>setOpen(false)}
    //     anchorOrigin={{
    //       vertical: 'top',
    //       horizontal: 'right',
    //     }}
    //     transformOrigin={{
    //       vertical: 'top',
    //       horizontal: 'right',
    //     }}
    //   >
    //     <MenuItem >Profile</MenuItem>
    //     <MenuItem >My account</MenuItem>
    //     <MenuItem >Logout</MenuItem>
    //   </Menu>
    // </AppBar>
    // </div>
  );
};
