/*import Home from "./Home"
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
    makeStyles,
    Container,
    Typography,
    TextField,
    Button,
  } from "@material-ui/core";

import React from "react"*/






  function LogOut (){

    

      //let logged=false;
      localStorage.removeItem("logged");
      // window.location.reload(); 
    
      return(
        <div>
            Click the "Log Out" link one more time, to Log Out!
        </div>

      );
  }




  export default LogOut;