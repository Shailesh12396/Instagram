// import React from 'react'

// function Forgot() {
//   return (
//     <div><h1>hello</h1></div>
//   )
// }

// export default Forgot

import * as React from 'react';
import { useContext,useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { makeStyles } from '@mui/styles';
import Alert from '@mui/material/Alert';
import './Login.css'
import logo from '../Resource/logo.png'
import bg from '../Resource/bg.jpg'
import img1 from '../Resource/img1.jpg'
import img2 from '../Resource/img2.jpg'
import img3 from '../Resource/img3.jpg'
import img4 from '../Resource/img4.jpg'

import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';

export default function Forgot() {
  const store=useContext(AuthContext)
  console.log(store);
    const useStyles=makeStyles({
        text1:{
            color: 'grey',
            textAlign:'center'
        },
        card2:{
            height:'4vh',
            marginTop:'2%'
        },
        text2:{
            textAlign:'center'
        }
    })
    const classes=useStyles();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const [loading,setLoading]=useState(false);
    const history=useNavigate();
    const {forgot}=useContext(AuthContext);

    const handleClick=async()=>{
      try{
        setError('');
        setLoading(true);
        let res=await forgot(email);
        setLoading(false);
        history('/');
      }
      catch(err){
        setError(err);
        setTimeout(()=>{
          setError('')
        },2000);
        setLoading(false);
      }
      }

  return (
     <div className='login-wrapper'>
        <div className='img-card' style={{backgroundImage:'url('+bg+')', backgroundSize:'cover'}}>
            <div className='card'>
            <CarouselProvider
            visibleSlides={1}
            totalSlides={4}
            
        naturalSlideWidth={270}
        naturalSlideHeight={490}
        hasMasterSpinner
        isPlaying={true}
        infinite={true}
        dragEnabled={false}
        touchEnabled={false}
      >
        <Slider>
          <Slide index={0}><Image src={img1}></Image></Slide>
          <Slide index={1}><Image src={img2}></Image></Slide>
          <Slide index={2}><Image src={img3}></Image></Slide>
          <Slide index={3}><Image src={img4}></Image></Slide>

        </Slider>
      </CarouselProvider>
            </div>
        </div>
        <div className='login-card'>
        <Card variant='outlined'>
          <div className='insta-logo'>
            <img src={logo} alt=""/>
          </div>
        
        <CardContent>
          <Typography className={classes.text1} variant="subtitle1" >
            Forgot your password
          </Typography>
          {error!='' && <Alert severity="error">{error}</Alert>}
          <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        {/* <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small" value={password} onChange={(e)=>setPassword(e.target.value)}/> */}
          
        </CardContent>
     
      <CardActions>
        <Button color="primary" fullWidth={true} variant="contained" disabled={loading} onClick={handleClick} >
          Submit
        </Button>
      </CardActions>
      
        </Card>
        
            </div>
        </div>
    
  )
}