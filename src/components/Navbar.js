import { Mail,  Notifications, Pets } from '@mui/icons-material'
import { AppBar, Toolbar, Typography,styled, Badge, Avatar, Menu, MenuItem, InputBase, Button, Container } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { CardMedia } from '@mui/material';
const pages=["Home","Relations investisseurs","Contact"]
const StyledToolbar=styled(Toolbar) ({
    display:"flex",
    justifyContent:"space-between",
    backgroundColor:"white"
    
})

const Search=styled("div") (({theme})=>({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width:"40%"
}))

const Icons=styled(Box) (({theme})=>({
    display:"flex",
    alignItems:"center",
    gap:"20px",
    [theme.breakpoints.down("sm")] :{
        display:"none"
    }
    // backgroundColor:"white",
    // padding:"0 10px",
    // borderRadius :theme.shape.borderRadius,
    
}))

const UserBox=styled(Box) (({theme})=>({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    [theme.breakpoints.up("sm")] :{
        display:"none"
    }
    
}))
export const Navbar = () => {
    const [open,setOpen]=useState(false)
  return (
    // sx={{display:"flex", alignItems:"center" }}
    <AppBar position="static">
      <Container maxWidth="xl" >
      <Toolbar>
      <Box component="img" src="Grodesto H.png"  style={{width:159,height:37,display:{xs:"none" ,md:"flex" }, marginRight:100}} alt="The house from the offer." />
      <Box sx={{flexGrow:1 , display:{xs:"none",md:"flex "}}}>
      {pages.map((page) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block',fontSize:16 }}
              >
                {page}
              </Button>
            ))}  
      </Box>
      <Button variant="outlined" sx={{backgroundColor:"white",display:{xs:"none",md:"flex "},width:164,height:56  }} > Partenariat</Button>
      <Button variant="outlined" sx={{backgroundColor:"white",display:{xs:"none",md:"flex "},width:260,height:56 }} > Commencer à vendre</Button>

      
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
  )
}
