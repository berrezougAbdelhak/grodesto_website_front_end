import { Mail, Notifications, Pets } from "@mui/icons-material";
import "./style.css"
import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  InputBase,
  Button,
  Container,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { CardMedia } from "@mui/material";
const pages = ["Home", "Relations investisseurs", "Contact"];
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "white",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  // backgroundColor:"white",
  // padding:"0 10px",
  // borderRadius :theme.shape.borderRadius,
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    // sx={{display:"flex", alignItems:"center" }}
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            height: "100px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            component="img"
            src="Grodesto H.png"
            style={{
              width: 159,
              height: 37,
              display: { sm: "none", md: "flex" },
            }}
            alt="The house from the offer."
          />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                flexGrow: 1,
                display: { sm: "none", md: "flex " },
                marginRight: "79px",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  
                  // onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    fontSize: 16,
                    fontFamily: "Poppins",
                    color:"#707070",
                    
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                className="navBarButton"              
                variant="outlined"
                sx={{
                  background: "rgb(31,49,117)",
                  background: "linear-gradient(180deg, rgba(31,49,117,1) 0%, rgba(22,36,87,1) 100%)",
                  borderRadius: "10px",
                  border: "none",
                  display: { xs: "none", md: "flex " },
                  width: 164,
                  height: 56,
                  marginRight: 2,
                  color: "white",
                  fontSize: 16,
                  fontFamily: "Poppins",
                  "&:hover": {
                    backgroundColor: "#E5EAFF"
                  }

                }}
              >
                {" "}
                Partenariat
              </Button>
              <Button
                variant="outlined"
                sx={{
                  background: "rgb(247,181,0)",
                  background:
                    "linear-gradient(185deg, rgba(247,181,0,1) 0%, rgba(247,141,0,1) 100%)",
                  borderRadius: "10px",
                  border: "none",
                  display: { xs: "none", md: "flex " },
                  width: 260,
                  height: 56,
                  color: "white",
                  fontSize: 16,
                  fontFamily: "Poppins",
                  ":hover": {
                    backgroundColor: "#E5EAFF"
                  }
                  
                }}
              >
                {" "}
                Commencer à vendre
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
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
