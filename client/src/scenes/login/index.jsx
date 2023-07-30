import {
	TextField,
  } from "@mui/material";
  import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
  import { Formik } from "formik";
  import * as Yup from "yup";
  import { setLogin } from "../../state/index.js";
  import  { useState, useEffect } from 'react';
  import "./index.css"
  import LastPageIcon from '@mui/icons-material/LastPage';
  import FirstPageIcon from '@mui/icons-material/FirstPage';
  import FormControlLabel from '@mui/material/FormControlLabel';
  import Checkbox from '@mui/material/Checkbox';
  import { useNavigate } from 'react-router-dom';
  import { useDispatch } from 'react-redux';
  import './index.css'
  import { useFormik } from "formik";
  import Radio from '@mui/material/Radio';
  import RadioGroup from '@mui/material/RadioGroup';
  import Cookies from 'js-cookie';
  import * as React from 'react';

  
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


  
  
  const Login = () => {
  // button action movemen.....
	const signUpButton = document.getElementById('signUp');
	const signInButton = document.getElementById('signIn');
	const container = document.getElementById('container');
	const [currentIndex, setCurrentIndex] = useState(0);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const Alert = React.forwardRef(function Alert(props, ref) {
		return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
	  });
  
	const register = async (values, onSubmitProps) => {
	  try {
		const response = await fetch("http://localhost:5001/auth/signup", {
		  method: "POST",
		  headers: { 'Content-type': 'application/json' },
		  body: JSON.stringify(values),
		});
		onSubmitProps.resetForm();
		if (response.ok) {
		  console.log("Request successful");
		  const data = await response.json();
		  // Login successful, create cookie or handle the token
		  Cookies.set('userData', JSON.stringify(data));
		  console.log(data);
		  if(data){
			dispatch(
			  setLogin({
				user: data.user,
				token: data.token,
			  })
			);
			navigate("/dashboard");
		  }
  
		} else {
		  console.log("Request error:", response.status);
		}
	  } catch (error) {
		// Error occurred during the request, handle the error
		console.log("Request error:", error);
	  }
	};
   
	const testi = [
		  {
			text: "I have been the head of XYZ Hospital for many years now, and I can confidently say that the care and treatment provided by our staff is second to none.",
			pic: "pic",
			author: "Adrian karanja",
			role:"founder,Catalog",
			dept:"CEO"
  
		  },
		  {
			text: "I have  Hospital for many years now, and I can confidently say that the care and treatment provided by our staff is second to none.",
			pic: "pic",
			author: "Adrian karanja",
			role:"founder,Catalog",
			dept:"CEO"
  
		  },
		  {
			text: "I have been the head of XYZ Hospital for many years now, and I can confidently say that the care and treatment provided by our staff is second to none.",
			pic: "pic",
			author: "Adrian karanja",
			role:"founder,Catalog",
			dept:"CEO"
  
		  },
		  {
			text: "I have beenr many years now, and I can confidently say that the care and treatment provided by our staff is second to none.",
			pic: "pic",
			author: "Adrian karanja",
			role:"founder,Catalog",
			dept:"CEO"
  
		  }
	  ];
	const testimonials = [
		  {
			text: "I have been the head of XYZ Hospital for many years now, and I can confidently say that the care and treatment provided by our staff is second to none.",
			author: "Adrian karanja",
			role:"founder,Catalog",
			dept:"CEO"
  
		  },
		  {
			text: "We move 10x faster than our peers and stay consistent.While they're bogged down with design debt, we're releasing new features",
			author: "Jane Smith",
			role:"founder,Catalog",
			dept:"Manager",
  
		  },
		  {
			text: "Our state-of-the-art facility is equipped with the latest technology and equipment, and our doctors are some of the best in the field.",
			author: "Bob Johnson",
			role:"founder,Catalog",
			dept:"gynaenology"
  
		  }
	  ];
  // movemnt
	signInButton?.addEventListener('click', () => {
	  container.classList.remove("right-panel-active");
	});
	signUpButton?.addEventListener('click', () => {
		container.classList.add("right-panel-active");
	});
  
	const handlePrevClick = () => {
	setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
	};
  
	const handleNextClick = () => {
	setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  
	};
  //testimonial in signIn 
	useEffect(() => {
	const intervalId = setInterval(() => {
	  setCurrentIndex((currentIndex + 1) % testimonials.length);
	}, 3000);
	return () => clearInterval(intervalId);
	}, [currentIndex]);
	
   
const formik = useFormik({
  initialValues: {
	firstName: "",
	lastName: "",
	username: "",
	email: "",
	occupation: "",
	country: "Kenya",
	password: "",
	confirmPassword: "",
	gender: ""
  },

  validationSchema: Yup.object({
	firstName: Yup.string()
	  .max(15, "Firstname must be 15 characters or less.")
	  .required("Name is required"),
	lastName: Yup.string()
	  .max(20, "Lastname must be 20 characters or less.")
	  .required("Name is required"),
	username: Yup.string()
	  .min(4, "Userame must be 4 characters or more.")
	  .required("userame is required"),
	email: Yup.string()
	  .email("Invalid email address")
	  .required("Email is required"),
	password: Yup.string()
	  .required("password is required"),
	confirmPassword: Yup.string()
	  .required("password is required"),
	gender: Yup.string().required("Gender:"),
  }),

  onSubmit: async(values,onSubmitProps) => {
	console.log("form submitted");
	// await login(values,onSubmitProps);
	  await register(values,onSubmitProps);
	  
  }
});
const [loginSuccess, setLoginSuccess] = useState(false);
const [loginFail, setloginFail] = useState(false);

const handleLogin =async(event,values)=>{
  event.preventDefault();
	  const formValues = {
		email: formik.values.email,
		password: formik.values.password,
	  };
	  try {
		const response = await fetch("http://localhost:5001/auth/login", {
		  method: "POST",
		  headers: { 'Content-type': 'application/json' },
		  body: JSON.stringify(formValues),
		});
	
		if (response.ok) {
		  const data = await response.json();
		  // Login successful, create cookie or handle the token
		  Cookies.set('userData', JSON.stringify(data));
		  setLoginSuccess(true); 
		  console.log(data);
		  if(data){
			dispatch(
			  setLogin({
				user: data.user,
				token: data.token,
			  })
			);
			navigate("/dashboard");
		  }
  
		} else {
			setloginFail(true); 
		  // Handle server error (e.g., 400 Bad Request)
		  console.log("Login failed");
		  // Show an error message to the user
		}
	  } catch (error) {
		<Alert severity="warning">This is a warning message!</Alert>
		console.log("Error occurred:", error);
		// Show an error message to the user
	  }
	}
  
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
		  return;
		}
	
		setLoginSuccess(false);
	  };
	return (
	  <>
<div className="L-cont">

  <div className="container" id="container">
	<div className="form-container sign-up-container">
   
				  <form  onSubmit={formik.handleSubmit}>
					
					<h1>Create Account</h1>
					<span>or use your email account</span>
					<div className="social-container">
					  <a href="#" className="social">
						  <span className="icon"></span>
						  <span className="buttonText">Sign in with Google</span>
					  </a>
					</div>
					<span>or use your your personal info for registration</span>
					<div className="signup-top">
					<TextField
						name="firstName"
							id="outlined-multiline-flexible"
							label='firstname'
							values={formik.values.firstName}
							maxRows={4}
							helperText={formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName:''}
							onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						sx={{
						margin:'10px 0',
						backgroundColor:'#eee',
						width:'100%'
						}}
						/>
					<TextField
						name="lastName"
							id="outlined-multiline-flexible"
							label="Last Name"
							values={formik.values.lastName}
							maxRows={4}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						helperText={formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName:''}
						sx={{
						margin:'10px 0',
						backgroundColor:'#eee',
						width:'100%'
						}}
						/>
					</div>
  
					<TextField
						name="username"
							id="outlined-multiline-flexible"
							label="Username"
							values={formik.values.username}
							maxRows={4}
							helperText={formik.touched.username && formik.errors.username ? formik.errors.username :''}
							onBlur={formik.handleBlur}
					   onChange={formik.handleChange}
						sx={{
						width:'100%',
						margin:'10px 0',
						backgroundColor:'#eee',
						}}
						/>
					<div className="gender">
					  <h4 className={`${formik.touched.gender && formik.errors.gender ? "text-red-700" :''}`} >{formik.touched.gender && formik.errors.gender ? formik.errors.gender:'Gender :'}</h4>
					  <RadioGroup
						row
						aria-labelledby="demo-row-radio-buttons-group-label"
						name="row-radio-buttons-group"
						onBlur={formik.handleBlur}
					  >
						<FormControlLabel value="male" control={<Radio />} name="gender"label="Male" onChange={formik.handleChange}/>
						<FormControlLabel value="female" control={<Radio />} name="gender"label="Female" onChange={formik.handleChange}/>
						<FormControlLabel value="other" control={<Radio />}name="gender" label="Other" onChange={formik.handleChange}/>
					  </RadioGroup>
					</div>
					<TextField
						name="email"
							id="outlined-multiline-flexible"
							label="Email"
							onBlur={formik.handleBlur}
							values={formik.values.email}
							maxRows={4}
							helperText={formik.touched.email && formik.errors.email ? formik.errors.email:''}
					   onChange={formik.handleChange}
						sx={{
						width:'100%',
						margin:'10px 0',
						backgroundColor:'#eee',
  
						}}
						/>
					<TextField
						name="password"
							id="outlined-multiline-flexible"
							label="Password"
							onBlur={formik.handleBlur}
							values={formik.values.password}
							maxRows={4}
							helperText={formik.touched.password && formik.errors.password ? formik.errors.password:''}
							onChange={formik.handleChange}
						sx={{
						width:'100%',
						margin:'10px 0',
						backgroundColor:'#eee',
  
						}}
						/>
					<TextField
						name="confirmPassword"
							id="outlined-multiline-flexible"
							label="Confirm password"
							onBlur={formik.handleBlur}
							 values={formik.values.confirmPassword}
							 helperText={formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword:''}
							maxRows={4}
						onChange={formik.handleChange}
						sx={{
						width:'100%',
						margin:'10px 0',
						backgroundColor:'#eee',
  
						}}
						/>
					<span className="su-cont">
  
					By creating an account, you agree to our
					<a className="signup-sublink">Terms</a>
					  and have read and acknowledge the 				
					<a className="signup-sublink"> Global Privacy Statement.</a>
					
					</span>
					<button className="signup" type='submit'>Sign Up</button>
					<span className="siLink">Have an account?
						<a className="sublink" id="signIn">Log in.</a>			
					</span>
				  </form>
				  
				</div>
				<div className="form-container sign-in-container">
				  <form onSubmit={handleLogin}>
					<h1>Welcome Back</h1>
					<span className="sub-title">Welcome back! Please enter your details.</span>
  
					
					{/* <h4 className="sub-title">Welcome back! Please enter your details.</h4> */}
					<span>Sign in with Socials</span>
					<div className="social-container">
					  <a href="#" className="social">
						  <span className="icon"></span>
						  <span className="buttonText">Sign in with Google</span>
					  </a>
					  <a href="#" className="social">
						  <span className="icon"></span>
						  <span className="buttonText">Sign in with LinkedIn</span>
					  </a>
					</div>
					<span>or use your account</span>
					<TextField
						name="email"
							id="outlined-multiline-flexible"
							label="Email"
							values={formik.values.email}
							maxRows={4}
							onBlur={formik.handleBlur}
							helperText={formik.touched.email && formik.errors.email ? formik.errors.email:''}
							onChange={formik.handleChange}
						sx={{
						width:'100%',
						margin:'10px 0',
						backgroundColor:'#eee',
  
						}}
						/>
					<TextField
						name="password"
							id="outlined-multiline-flexible"
							label="Password"
							onBlur={formik.handleBlur}
							values={formik.values.password}
							helperText={formik.touched.password && formik.errors.password ? formik.errors.password:''}
							maxRows={4}
							type="password"
							onChange={formik.handleChange}
						sx={{
						width:'100%',
						margin:'10px 0',
						backgroundColor:'#eee',
  
						}}
						/>
					<div className="forgot">
					<a href="#">Forgot your Email?</a>
					<div className="spacer">⚫</div>
					<a href="#"> Forgot your password?</a>
					</div>
					<button type="submit" className="login">Log In</button>
					<span className="si-cont">
					  New here or no account 
					  <a id="signUp" className="signup-sublink"> sign Up</a>
					</span>
					
  
					
				  </form>
				</div>
  
				<div className="overlay-container">
				  <div className="overlay">
					<div className="overlay-panel overlay-left">
						<div className="ol-cont">
						<div className="ol-top">
						  <h1>HMS</h1>
						</div>
						<div className="ol-mid">
							<h2 className="mid-title">Start your health care journey with us.</h2>
						  <p className="mid-content">Experience world class health care services and Discover the world's best community and Health care practitioners</p>
						</div>
						<div className="ol-bottom">
						  <div className="bottom-testi">
							<div className="testi-card">
								<p className="testi-text">{testi[currentIndex].text}</p>
							  <div className="testi-profile">
								<div className="testi-profile-pic">{testi[currentIndex].pic}</div>
								<div className="testi-profile-info">
								  <h2 className="testi-name">{testi[currentIndex].author}</h2>
								  <h3 className="testi-role">{testi[currentIndex].role}</h3>
								</div>
							  </div>
							</div>
						  </div>
						</div>
						</div>
  
  
  
  
					  {/* <h1>Welcome Back!</h1>
					  <p>To keep connected with us please login with your personal info</p> */}
					  {/* <button className="ghost" id="signIn">Sign In</button> */}
					</div>
					<div className="overlay-panel overlay-right">
					  <div className="right-content">
					  <div className="lposts">
							  <p>{testimonials[currentIndex].text}</p>
							  <div className="content-bottom">
								<div className="cred">
								  <h1> {testimonials[currentIndex].author}</h1>
								  <span>{testimonials[currentIndex].role}</span>
								  <span>{testimonials[currentIndex].dept}</span>
								</div>
								<div className="rating">
								  <div className="btn-icon" onClick={handlePrevClick} ><FirstPageIcon sx={{ fontSize:"26px"}}/></div>
								  <div className="btn-icon" onClick={handleNextClick} ><LastPageIcon  sx={{ fontSize:"26px"}} /></div>
								</div>
							  </div>
					  </div>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
				{loginSuccess && 	  
				<Alert onClose={handleClose} severity="success" sx={{marginTop:'10px', width: '40%', vertical: 'top', horizontal: 'left'}}>
					Login Success.
				</Alert>}
			  {loginFail && 	  
				<Alert onClose={handleClose} severity="error" sx={{marginTop:'10px', width: '40%', vertical: 'top', horizontal: 'left'}}>
					Login failed! Incorrect email or password.
				</Alert>}
			</div>
	  </>
	)
  }
  
  export default Login