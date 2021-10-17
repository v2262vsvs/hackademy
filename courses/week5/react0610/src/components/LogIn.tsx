//import React from 'react';

import { useForm } from "react-hook-form";

import {
    makeStyles,
    Container,
    Typography,
    TextField,
    Button,
  } from "@material-ui/core";





  interface IFormInput {
    email: string;
    firstName: string;
    password: string;
  }
  
  const useStyles = makeStyles((theme) => ({
    heading: {
      textAlign: "center",
      margin: theme.spacing(1, 0, 4),
    },
    submitButton: {
      marginTop: theme.spacing(4),
    },
  }));
  



function LogIn (){
    const {
        register,
        handleSubmit,
      } = useForm<IFormInput>();
    
      const { heading, submitButton } = useStyles();
    
      //const [json, setJson] = useState<string>();
      
    
      const refreshPage = ()=>{
        window.location.reload();
      }
    
    
    
      const onSubmit = (data: IFormInput) => {
        if (JSON.stringify(data) === localStorage.getItem('data')){
          window.localStorage.setItem('logged',JSON.stringify(data))
          
          refreshPage();
          console.log("YOU ARE LOGGED IN");
        }else {
          window.localStorage.setItem('data',JSON.stringify(data))
          console.log("YOU ARE SINGED UP");
        }
        
    
        //setJson(JSON.stringify(data));
      };
    
    
    
      
      return (
        <Container maxWidth="xs">
          <Typography className={heading} variant="h3">
            Sign Form
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}  noValidate>
            <TextField
              {...register("email")}
              variant="outlined"
              margin="normal"
              label="Email"
              fullWidth
              required
            />
            <TextField
              {...register("firstName")}
              variant="outlined"
              margin="normal"
              label="First Name"
              fullWidth
              required
            />
            <TextField
              {...register("password")}
              variant="outlined"
              margin="normal"
              label="Password"
              type="password"
              fullWidth
              required
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={submitButton}
            >
              Sign Up/In
            </Button>
            
           
          </form>
          
          

        </Container>
        
      );
      
}
export default LogIn;