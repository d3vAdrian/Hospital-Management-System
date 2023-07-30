import {useState ,useEffect}from 'react';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SendIcon from '@mui/icons-material/Send';
import MenuItem from '@mui/material/MenuItem';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useGetApptQuery} from "../../state/api";

export default function BasicModal({handleClose}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const { data, isLoading } = useGetApptQuery();

  const mstatus = [
    {
      value: 'High',
      label: 'High',
    },
    {
      value: 'Triage Level 1',
      label: 'Resuscitation',
    },
    {
      value: 'Triage Level 2',
      label: 'Emergent',
    },
    {
      value: 'Triage Level 3',
      label: 'Urgent',
    },
    {
      value: 'Triage Level 4',
      label: 'Less Urgent',
    },
    {
      value: 'Triage Level 5',
      label: 'Non Urgent',
    },
  ];
  const msession = [
    {
      value: '1 hour',
      label: '1 hour',
    },
    {
      value: '< 3 hours',
      label: 'less than 3 hours',
    },
    {
      value: '< 4 hours',
      label: 'less than 4 hours',
    },
    {
      value: '> 4 hours',
      label: 'Longer than 4 hours',
    }
  ];
  const [initialDate, setInitialDate] = useState(new Date());

  // Handle the user's input to update the initial date value
  const handleDateChange = (date) => {
    setInitialDate(date);
  }; 
  const formik = useFormik({
    initialValues: {
      task: "",
      title: "",
      session: "",
      doctors: [],
      patients:[],
      // date: initialDate,
      priority:'',
      description: "",
    },

    validationSchema: Yup.object({
      title: Yup.string()
        .min(4, "First name must be 15 characters or less.")
        .required("First name is required"),
        date: Yup.object()
        .required("Status is required"),
      doctors: Yup.string()
        .min(5, "please select one.")
        .required("Status is required"),
      patients: Yup.string()
        .min(5, "please select one.")
        .required("Status is required"),
      session: Yup.string()
        .min(2, "please select one.")
        .required("Required"),
      priority: Yup.string()
        .min(1, "please select one.")
        .required("Required"),
      task: Yup.string()
        .min(2, "please select one.")
        .required("Required"),
        description: Yup.string()
        .min(5, "First name must be 15 characters or less.")
        .required("first name is required"),
    }),
    onSubmit: async(values,onSubmitProps) => {
      console.log("form submitted");
      await makeAppt(values,onSubmitProps);
      // try {
      //   const response = await fetch("http://localhost:5001/client/assign", {
      //     method: "POST",
      //     headers: { 'Content-type': 'application/json' },
      //     body: JSON.stringify(values),
      //   });
      //   // onSubmitProps.resetForm();
      //   if (response.ok) {
      //     console.log("Request successful");
      //     const data = await response.json();
      //     // Login successful, create cookie or handle the token
      //     console.log(data);
      //     if(data)
      //       navigate("/patients");
      //       // onSubmitProps.resetForm();
      //   } else {
      //     console.log("Request error:", response.status);
      //   }
      // } catch (error) {
      //   // Error occurred during the request, handle the error
      //   console.log("Request error:", error);
      // }
        
    },

    // onSubmit: handleSubmit
  });
  // console.log(formik.values)
  
  
  const handleSubmit = async(event,onSubmitProps)=>{
    event.preventDefault();
      const values = formik.values;
      console.log(values)
      try {
      const response = await fetch("http://localhost:5001/client/assign", {
        method: "POST",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(values),
      });
    
      if (response.ok) {
        const data = await response.json();
        if(data){
          handleClose();
          onSubmitProps.resetForm();
          console.log('success')
        // navigate("/dashboard");
        }
    
      } else {
        // Handle server error (e.g., 400 Bad Request)
        console.log("Appt registration failed");
        // Show an error message to the user
      }
      } catch (error) {
      console.log("Error occurred:", error);
      // Show an error message to the user
      }
    }
  return (  
      <form onSubmit={handleSubmit}>
            <div className="flex justify-between w-[100%] items-center">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Appointment Details
              </Typography>
              <IconButton aria-label="close" onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </div>
          <div className="w-[100%]">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDateTimePicker orientation="landscape" 
                name='date'
                values={formik.values.date}
                onChange={(date) => {
                  formik.setFieldValue('date', date);
                  handleDateChange(date);
                }}
                />
            </LocalizationProvider>
          </div>
          <div className="flex flex-col gap-5 w-[100%]">
            <Autocomplete
              multiple
              options={(data && data.doctors)||[]}
              getOptionLabel={(option) => option.name}
              // defaultValue={[data.doctors[1]]}
              filterSelectedOptions
              name='doctors'
              values={formik.values.doctors}
              // helperText={formik.touched.doctors && formik.errors.doctors ? formik.errors.doctors:''}
              onBlur={formik.handleBlur}
              // onChange={formik.handleChange}
              onChange={(event, value) => {
                formik.setFieldValue('doctors', value); // Update the field value
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Doctor'
                  values={formik.values.doctors}
                  placeholder="Doctors to be enganged"
                />
              )}
            />
            <Autocomplete
              multiple
              options={(data && data.patients)||[]}
              getOptionLabel={(option) => option.name}
              // defaultValue={[data.patients[1]]}
              filterSelectedOptions
              name='patients'
              values={formik.values.patients}
              // helperText={formik.touched.patients && formik.errors.patients ? formik.errors.patients:''}
              onBlur={formik.handleBlur}
              // onChange={formik.handleChange}
              onChange={(event, value) => {
                formik.setFieldValue('patients', value); // Update the field value
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Patients'
                  placeholder="Patients to be enganged"
                />
              )}
            />
          
            <TextField label="Appt Title"
              name='title'
              values={formik.values.title}
              helperText={formik.touched.title && formik.errors.title ? formik.errors.title:''}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}/>
            <div className="flex justify-evenly">
              <TextField
                id="outlined-select-currency"
                select
                name="priority"
                label="Priority"
                sx={{width:'48%'}}
                value={formik.values.priority}
              helperText={formik.touched.priority && formik.errors.priority ? formik.errors.priority:''}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              >
                {mstatus.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField> 
              <TextField
                id="outlined-select-currency"
                select
                name="session"
                label="Session time"
                value={formik.values.session}
              helperText={formik.touched.session && formik.errors.session ? formik.errors.session:''}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
                sx={{width:'50%'}}
              >
                {msession.map((option) => (
                  <MenuItem key={option.value}  value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <TextField
              id="outlined-multiline-static"
              label="Task"
              multiline
              name='task'
              values={formik.values.task}
              helperText={formik.touched.task && formik.errors.task ? formik.errors.task:''}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              rows={2}
              defaultValue="Default Value"
            />
          </div>
          <div className="desc w-[100%]">
          <TextField
              id="outlined-multiline-static"
              label="Appt Description"
              multiline
              name='description'
              rows={3}
              values={formik.values.description}
              helperText={formik.touched.description && formik.errors.description ? formik.errors.description:''}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              defaultValue="Default Value"
              sx={{width:"100%", margin :'15px 0'}}
          />
            
          </div>
          {/* <Button variant="contained" size="small" type='submit' endIcon={<SendIcon />}>
            Save
          </Button> */}
          <button className="signup" type='submit'>Add Appointment</button>
      </form>
  );
}