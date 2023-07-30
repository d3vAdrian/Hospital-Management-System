import React,{useState}from 'react'
import { useFormik } from "formik";
import * as Yup from 'yup'
import { TextField } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Autocomplete from '@mui/material/Autocomplete';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';

const inventory = ({handleClose}) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      volume: "",
      manufacturer: "",
      category: "",
      reorderLevel: "",
      measurement:'Microgram',
      currency:'KSH',
      quantity:'',
      reorderCount: "",
      description: '',
      rating: '2',
      Date:new Date(),
    },

    validationSchema: Yup.object({
      itemName: Yup.string()
        .max(15, "Item name must be 15 characters or less.")
        .required("Item name is required"),
        manufacturer: Yup.string()
        .required("Manufacture is required"),
        category: Yup.string()
        .min(5, "Category should contain 10 characters or more.")
        .required("Category is required"),
        reorderLevel: Yup.string()
        .min(5, "please select one.")
        .required("Reorder level is required"),
        measurement: Yup.string()
        .min(2, "please select one.")
        .required("Required"),
        currency: Yup.string()
        .required("Required"),
        price: Yup.number()
        .min(1, "Must be more than 1")
        .required("Price per item is required"),
        volume: Yup.number()
        .min(1, "Must be greater than 1")
        .required("Volume of item is required"),
        quantity: Yup.number()
        .min(1, "Must be more than 10 characters")
        .required("Quantity is required"),
        reorderCount: Yup.number()
        .min(1, "Must be more than 10 characters")
        .required("Reorder count number is required"),
        description: Yup.string()
        .min(5, "Description contain 10 characters or more.")
        .required("Description is required"),
    }),

    onSubmit: async(values,onSubmitProps) => {
      console.log("form submitted");
      // await login(values,onSubmitProps);
      try {
        const response = await fetch("http://localhost:5001/client/addProducts", {
          method: "POST",
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(values),
        });
        // onSubmitProps.resetForm();
        if (response.ok) {
          console.log("Request successful");
          const data = await response.json();
          // Login successful, create cookie or handle the token
          console.log(data);
          if(data)
            navigate("/");
            onSubmitProps.resetForm();
        } else {
          console.log("Request error:", response.status);
        }
      } catch (error) {
        // Error occurred during the request, handle the error
        console.log("Request error:", error);
      }
        
    }
  });
  // debug
  // console.log(formik.values)

  const country = [
    {
      value: 'Kenya',
      label: 'Kenya',
    },
    {
      value: 'Tanzania',
      label: 'Tanzania',
    },
    {
      value: 'Uganda',
      label: 'Uganda',
    },
    {
      value: 'Sudan',
      label: 'Sudan',
    },
  ];
  const mstatus = [
    {
      value: 'minor',
      label: 'minor',
    },
    {
      value: 'single',
      label: 'single',
    },
    {
      value: 'married',
      label: 'married',
    },
    {
      value: 'divorced',
      label: 'divorced',
    },
    {
      value: 'widowed',
      label: 'widowed',
    },
  ];
  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'KSH',
      label: 'KSH',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
  const measurement = [
    {
      value: 'grams',
      label: 'g',
    },
    {
      value: 'Milliliter ',
      label: 'ml',
    },
    {
      value: 'litre',
      label: 'l',
    },
    {
      value: 'Kilogram ',
      label: 'kg',
    },
    {
      value: 'Microgram',
      label: 'mcg',
    },
    {
      value: 'Milligram  ',
      label: 'mg',
    },
    {
      value: 'Cubic centimete',
      label: 'cc',
    },
  ];
  const handleSubmit = async(event,onSubmitProps) => {
    event.preventDefault();
    console.log("form submitted");
    // await login(values,onSubmitProps);
    const values = formik.values;
    try {
      const response = await fetch("http://localhost:5001/client/addProducts", {
        method: "POST",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(values),
      });
      // onSubmitProps.resetForm();
      if (response.ok) {
        console.log("Request successful");
        const data = await response.json();
        // Login successful, create cookie or handle the token
        // console.log(data);
        if(data)
          handleClose();
          navigate("/inventory");
          // onSubmitProps.resetForm();
      } else {
        console.log("Request error:", response.status);
      }
    } catch (error) {
      // Error occurred during the request, handle the error
      console.log("Request error:", error);
    }
      
  }
  return (
    <>
    
      <form  onSubmit={handleSubmit} id='addproduct'>
              
                  <div className="flex flex-col items-center gap-2 w-[100%]">
                  <div className="flex justify-between w-[60ch] items-center mb-1 ">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Inventory form
                    </Typography>
                    <IconButton aria-label="close" onClick={handleClose} >
                      <CloseIcon />
                    </IconButton>
                  </div>
                  <div className="w-[60ch] gap-3 flex ">
                    <TextField
                        name="name"
                            id="outlined-multiline-flexible"
                            label='Item name'
                            values={formik.values.name}
                            maxRows={4}
                            helperText={formik.touched.name && formik.errors.name ? formik.errors.name:''}
                            onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        sx={{
                        margin:'10px 0',
                        width:'50%'
                        }}
                        />
                    <TextField
                        name="manufacturer"
                            id="outlined-multiline-flexible"
                            label="Item manufacturer"
                            values={formik.values.manufacture}
                            maxRows={4}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        helperText={formik.touched.manufacture && formik.errors.manufacture ? formik.errors.manufacture:''}
                        sx={{
                        margin:'10px 0',
                        width:'48%'
                        }}
                        />
                  </div>
                    <div className="w-[60ch] gap-2 flex">
                      <TextField
                            id="outlined-select-currency"
                            select
                            name="category"
                            label="Category"
                            value={formik.values.category}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            sx={{width:'30ch'}}
                            helperText={formik.touched.category && formik.errors.category ? formik.errors.category:'Please select your realtionship'}
                          >
                            {mstatus.map((option) => (
                              <MenuItem key={option.value} name='relationship' value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                      </TextField>
                      <TextField
                            id="outlined-select-currency"
                            select
                            name="reorderLevel"
                            label="Reorder level"
                            value={formik.values.reorderLevel}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            sx={{width:'30ch'}}
                            helperText={formik.touched.reorderLevel && formik.errors.reorderLevel ? formik.errors.reorderLevel:'Please select your realtionship'}
                          >
                            {mstatus.map((option) => (
                              <MenuItem key={option.value} name='relationship' value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                      </TextField>
                    </div>
                    <div className="flex flex-col">
                      <label className='text-left'>Volume per item</label>

                      <TextField
                      id="outlined-start-adornment"
                      sx={{width: '60ch',margin:'5px 0 0 0'}}
                      InputProps={{
                        startAdornment: <InputAdornment position="start">
                          <TextField
                            id="outlined-select-currency"
                            select
                            defaultValue="Microgram"
                            margin="none"
                            name='measurement'
                            value={formik.values.measurement}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            sx={{margin:'0 2px 0 -12px'}}
                          >
                            {measurement.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        </InputAdornment>,
                      }}
                        name='volume'
                        type='number'
                        value={formik.values.volume}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        helperText={formik.touched.volume && formik.errors.volume ? formik.errors.volume:''}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className='text-left'>Cost per item</label>

                      <TextField
                        id="outlined-start-adornment"
                        sx={{width: '60ch' }}
                        InputProps={{
                          startAdornment: <InputAdornment position="start">
                            <TextField
                              id="outlined-select-currency"
                              select
                              defaultValue="KSH"
                              name='currency'
                              value={formik.values.currency}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              margin="none"
                              sx={{margin:'0 2px 0 -12px',height:'max-content'}}
                            >
                              {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                  {option.label}
                                </MenuItem>
                              ))}
                            </TextField>
                          </InputAdornment>,
                        }}
                        name='price'
                        type='number'
                        value={formik.values.price}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        helperText={formik.touched.price && formik.errors.price ? formik.errors.price:''}
                      />
                    </div>
                  <TextField
                    id="outlined-number"
                    label="Quantity"
                    name='quantity'
                    type="number"
                    value={formik.values.quantity}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    helperText={formik.touched.quantity && formik.errors.quantity ? formik.errors.quantity:''}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{
                    width: '60ch',
                    margin:'25px 0 0 0'
                    }}
                  />
                  <TextField
                    id="outlined-number"
                    label="Item Reorder Count"
                    type="number"
                    name='reorderCount'
                    value={formik.values.reorderCount}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    helperText={formik.touched.reorderCount && formik.errors.reorderCount ? formik.errors.reorderCount:''}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{
                    width: '60ch',
                    margin:'25px 0 0 0'
                    }}
                  />
                  <TextField
                    id="filled-multiline-static"
                    label="Description"
                    multiline
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    rows={7}
                    placeholder="Minimum characters should be atleast 10 words...."
                    // variant="filled"
                    sx={{
                      width:'60ch',
                      margin:'10px 0'
                    }}
                    helperText={formik.touched.description && formik.errors.description ? formik.errors.description:''}
                  />

                  <Rating
                    name="rating"
                    // defaultValue={2}
                    sx={{width: '100%', height:'105px',alignItems:'left'}} 
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    onBlur={formik.handleBlur}
                  />
                    <div className="flex w-[60ch] gap-2 mt-20">
                      <button className="rounded-md w-[80%] bg-blue-900 text-slate-100" type='submit' form='addproduct'>ADD</button>
                      <Button variant="outlined" size="small" className='bg-blue-900 rounded-md' endIcon={<CloseIcon />}>
                        Close
                      </Button>
                    </div>
                  </div>   
      </form>
                
    </>
    
  )
}

export default inventory