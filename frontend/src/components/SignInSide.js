// perfectly working
// import * as React from 'react';
// import React, {useState} from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// // import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import sidepage from '../assets/sidepage.png'; 

// const defaultTheme = createTheme();

// export default function SignInSide() {

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       username: data.get('username'),
//       password: data.get('password'),
//     });
//   };



//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Grid container component="main" sx={{ height: '100vh' }}>
//         <CssBaseline />
//         <Grid
//           item
//           xs={false}
//           sm={3}
//           md={5}  
//           sx={{
//             backgroundImage: `url(${sidepage})`,
//             backgroundColor: (t) =>
//               t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
//         <Grid item xs={12} sm={9} md={7} component={Paper} elevation={6} square>
//           <Box
//             sx={{
//               my: 8,
//               mx: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >

//             <Typography component="h1" variant="h5">
//               Sign in
//             </Typography>
//             <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="username"
//                 label="Username"
//                 name="username"
//                 autoComplete="username"
//                 autoFocus
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//               />
//               <FormControlLabel
//                 control={<Checkbox value="remember" color="primary" />}
//                 label="Remember me"
//               />
//               <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3, mb: 2, width: '100%' }}>
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   sx={{ flexGrow: 1, mr: 1 }}
//                 >
//                   Sign In
//                 </Button>
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   sx={{ flexGrow: 1, ml: 1 }}
//                 >
//                   Register
//                 </Button>
//               </Box>
//               <Grid container>
//                 <Grid item xs>
//                   <Link href="#" variant="body2">
//                     Forgot password?
//                   </Link>
//                 </Grid>
//                 <Grid item>
//                   <Link href="#" variant="body2">
//                     {"Don't have an account? Sign Up"}
//                   </Link>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// }



// api integration

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import sidepage from '../assets/sidepage.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const defaultTheme = createTheme();

export default function SignInSide() {
  const [error, setError] = useState('');


  const url = "http://localhost:5000/api/auth/login";


  const navigate = useNavigate("")

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get('username');
    const password = data.get('password');

    try {
      // const response = await axios.post('/api/auth/login', { username, password });
      const response = await axios.post(url, { username, password });
      const token = response.data.token;

      localStorage.setItem('token', token);

      window.location.href = '/dashboard';
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Invalid credentials');
      } else {
        setError('Server error, please try again later');
      }
    }
  };

  // const handleLogout = async () => {
  //   localStorage.removeItem('token');
  //   sessionStorage.removeItem('token');
  //   window.location.href = '/';
  // }

  // const handleLogout = async () => {
  //   localStorage.removeItem("token")
  //   setToken("")
  //   navigate("/")
  //   window.location.href = '/';
  // };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={3}
          md={5}
          sx={{
            backgroundImage: `url(${sidepage})`,
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={9} md={7} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              {error && <Typography color="error">{error}</Typography>}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3, mb: 2, width: '100%' }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ flexGrow: 1, mr: 1 }}
                >
                  Sign In
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ flexGrow: 1, ml: 1 }}
                >
                  Register
                </Button>
              </Box>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
