
import {
    makeStyles,
    Container,
    Typography,
    TextField,
    Button,

  } from "@material-ui/core";

import React from 'react'




  interface IFormInput {
    email: string;
    firstname: string;
    password: string;
  }
  


  interface SignUpProps {
    name?: any;
    value?: any;
 }
 type SignUpState = {
    dat?:IFormInput,
    
 }
 
  
 let var1="";
 let var2="";
 let var3="";
  

class LogIn extends React.Component<SignUpProps, SignUpState>{
  constructor(props: SignUpProps) {
    super(props);
     this.state = {
        dat : ({
        firstname : '',
        email : '',
        password : '',
        }),
        
      };
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     
}


handleChange = (event : any) => {
  event.preventDefault();
  //const { name, value } = event.target;
  const target = event.target;
  const value = target.value ;
  const name = target.name;

  
  
  switch (name){
    case 'firstname':
      var1=value;
      break;
    case 'email':
      var2=value;
      break;
    case 'password':
      var3=value;
      break;
  }

  switch (name) {
    case 'firstname':
      this.setState({dat:({firstname: target.value,email:var2,password:var3,})});
       break;
    case 'email':
      this.setState({dat:({firstname: var1,email:target.value,password:var3,})});
       break;
    case 'password':
      this.setState({dat:({firstname: var1,email:var2,password:target.value,})});
       break;
    default:
      break;
  }



}

refreshPage = ()=>{
  window.location.reload();
}

 handleSubmit = (event : any) => {
  event.preventDefault();
  
  const data =this.state.dat;
 
  console.log(this.state.dat);

  if (JSON.stringify(data) === localStorage.getItem('data')){
    window.localStorage.setItem('logged',JSON.stringify(data))
    
    this.refreshPage();
    console.log("YOU ARE LOGGED IN");
  }else {
    //event.preventDefault();
    window.localStorage.setItem('data',JSON.stringify(data))
    console.log("YOU ARE SINGED UP");
    
  }
 }

      render(){

      return (
        <Container maxWidth="xs">
          <Typography className="rounded-sm" variant="h3">
            Sign Form
          </Typography>
          <form onSubmit={this.handleSubmit}  noValidate>
            <TextField
              name="email"
              value={this.state.dat?.email}
              
              onChange={this.handleChange}
              variant="outlined"
              margin="normal"
              label="Email"
              fullWidth
              required
            />
            <TextField
              name="firstname"
              value={this.state.dat?.firstname}
              
              onChange={this.handleChange}
              variant="outlined"
              margin="normal"
              label="First Name"
              fullWidth
              required
            />
            <TextField
              name="password"
              value={this.state.dat?.password}
              
              onChange={this.handleChange}
              variant="outlined"
              margin="normal"
              label="Password"
              fullWidth
              required
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className="rounded-sm"
            >
              Sign Up/In
            </Button>
            
           
          </form>
          
          

        </Container>
        
      );
      }
      
}


export default LogIn;