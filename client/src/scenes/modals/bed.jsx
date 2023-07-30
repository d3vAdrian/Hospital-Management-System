import React ,{ useState }from 'react'
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { useFormik } from "formik";
import * as Yup from 'yup'
import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import { MultiInputDateTimeRangeField } from '@mui/x-date-pickers-pro/MultiInputDateTimeRangeField';
import Autocomplete from '@mui/material/Autocomplete';
import MenuItem from '@mui/material/MenuItem';
import { useGetWardQuery} from "../../state/api";
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';



const bed = ({handleClose,handleBedModalClose}) => {
    const [initialDate, setInitialDate] = useState(new Date());
    const handleDateChange = (date) => {
      setInitialDate(date);
    }; 
    const formik = useFormik({
        initialValues: {
          firstName: "",
          lastName: "",
          email: "",
          plan:'',
          ward:'',
          bedName:'',
          durationDate:initialDate,
          description:'',
          Date:new Date(),
        },
    
        validationSchema: Yup.object({
          firstName: Yup.string()
            .max(15, "First name must be 15 characters or less.")
            .required("First name is required"),
          lastName: Yup.string()
            .max(20, "Last name must be 20 characters or less.")
            .required("Last name is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          plan: Yup.string()
          .min(1, "Client plan is required please choose")
          .required("Client plan is required"),
          ward: Yup.string()
          .min(1, "Ward info is required please choose")
          .required("Ward info is required"),
          bedName: Yup.string()
          .min(1, "Bed info is required please choose")
          .required("Bed info is required"),
          description: Yup.string()
          .min(2, "Reasons must be 10 characters or more.")
          .required("Reasons is required")
        }),
    
        onSubmit: async(values,onSubmitProps) => {
          console.log("form submitted");
          // await login(values,onSubmitProps);
          try {
            const response = await fetch("http://localhost:5001/auth/regEmployee", {
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
      const [value, setValue] = React.useState([
        dayjs('2022-04-17'),
        dayjs('2022-04-21'),
      ]);
      const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 },
        {
          label: 'The Lord of the Rings: The Return of the King',
          year: 2003,
        },
        { label: 'The Good, the Bad and the Ugly', year: 1966 },
        { label: 'Fight Club', year: 1999 },
        {
          label: 'The Lord of the Rings: The Fellowship of the Ring',
          year: 2001,
        },
        {
          label: 'Star Wars: Episode V - The Empire Strikes Back',
          year: 1980,
        },
        { label: 'Forrest Gump', year: 1994 },
        { label: 'Inception', year: 2010 },
        {
          label: 'The Lord of the Rings: The Two Towers',
          year: 2002,
        },
        { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
        { label: 'Goodfellas', year: 1990 },
        { label: 'The Matrix', year: 1999 },
        { label: 'Seven Samurai', year: 1954 },
        {
          label: 'Star Wars: Episode IV - A New Hope',
          year: 1977,
        },
        { label: 'City of God', year: 2002 },
        { label: 'Se7en', year: 1995 },
        { label: 'The Silence of the Lambs', year: 1991 },
        { label: "It's a Wonderful Life", year: 1946 },
        { label: 'Life Is Beautiful', year: 1997 },
        { label: 'The Usual Suspects', year: 1995 },
        { label: 'Léon: The Professional', year: 1994 },
        { label: 'Spirited Away', year: 2001 },
        { label: 'Saving Private Ryan', year: 1998 },
        { label: 'Once Upon a Time in the West', year: 1968 },
        { label: 'American History X', year: 1998 },
        { label: 'Interstellar', year: 2014 },
        { label: 'Casablanca', year: 1942 },
        { label: 'City Lights', year: 1931 },
        { label: 'Psycho', year: 1960 },
        { label: 'The Green Mile', year: 1999 },
        { label: 'The Intouchables', year: 2011 },
        { label: 'Modern Times', year: 1936 },
        { label: 'Raiders of the Lost Ark', year: 1981 },
        { label: 'Rear Window', year: 1954 },
        { label: 'The Pianist', year: 2002 },
        { label: 'The Departed', year: 2006 },
        { label: 'Terminator 2: Judgment Day', year: 1991 },
        { label: 'Back to the Future', year: 1985 },
        { label: 'Whiplash', year: 2014 },
        { label: 'Gladiator', year: 2000 },
        { label: 'Memento', year: 2000 },
        { label: 'The Prestige', year: 2006 },
        { label: 'The Lion King', year: 1994 },
        { label: 'Apocalypse Now', year: 1979 },
        { label: 'Alien', year: 1979 },
        { label: 'Sunset Boulevard', year: 1950 },
        {
          label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
          year: 1964,
        },
        { label: 'The Great Dictator', year: 1940 },
        { label: 'Cinema Paradiso', year: 1988 },
        { label: 'The Lives of Others', year: 2006 },
        { label: 'Grave of the Fireflies', year: 1988 },
        { label: 'Paths of Glory', year: 1957 },
        { label: 'Django Unchained', year: 2012 },
        { label: 'The Shining', year: 1980 },
        { label: 'WALL·E', year: 2008 },
        { label: 'American Beauty', year: 1999 },
        { label: 'The Dark Knight Rises', year: 2012 },
        { label: 'Princess Mononoke', year: 1997 },
        { label: 'Aliens', year: 1986 },
        { label: 'Oldboy', year: 2003 },
        { label: 'Once Upon a Time in America', year: 1984 },
        { label: 'Witness for the Prosecution', year: 1957 },
        { label: 'Das Boot', year: 1981 },
        { label: 'Citizen Kane', year: 1941 },
        { label: 'North by Northwest', year: 1959 },
        { label: 'Vertigo', year: 1958 },
        {
          label: 'Star Wars: Episode VI - Return of the Jedi',
          year: 1983,
        },
        { label: 'Reservoir Dogs', year: 1992 },
        { label: 'Braveheart', year: 1995 },
        { label: 'M', year: 1931 },
        { label: 'Requiem for a Dream', year: 2000 },
        { label: 'Amélie', year: 2001 },
        { label: 'A Clockwork Orange', year: 1971 },
        { label: 'Like Stars on Earth', year: 2007 },
        { label: 'Taxi Driver', year: 1976 },
        { label: 'Lawrence of Arabia', year: 1962 },
        { label: 'Double Indemnity', year: 1944 },
        {
          label: 'Eternal Sunshine of the Spotless Mind',
          year: 2004,
        },
        { label: 'Amadeus', year: 1984 },
        { label: 'To Kill a Mockingbird', year: 1962 },
        { label: 'Toy Story 3', year: 2010 },
        { label: 'Logan', year: 2017 },
        { label: 'Full Metal Jacket', year: 1987 },
        { label: 'Dangal', year: 2016 },
        { label: 'The Sting', year: 1973 },
        { label: '2001: A Space Odyssey', year: 1968 },
        { label: "Singin' in the Rain", year: 1952 },
        { label: 'Toy Story', year: 1995 },
        { label: 'Bicycle Thieves', year: 1948 },
        { label: 'The Kid', year: 1921 },
        { label: 'Inglourious Basterds', year: 2009 },
        { label: 'Snatch', year: 2000 },
        { label: '3 Idiots', year: 2009 },
        { label: 'Monty Python and the Holy Grail', year: 1975 },
      ];
      const mstatus =[
        {value:'Vip',label:'Vip'},
        {value:'Veteran',label:'Veteran'},
        {value:'VVip',label:'VVip'},
        {value:'Regular',label: 'Regular'},
        {value:'Special persons',label: 'Special persons'}
      ]
      const { data, isLoading } = useGetWardQuery();
      // debug
      // console.log(formik.values)
      const handleSubmit = async(event,onSubmitProps)=>{
        event.preventDefault();
          const values = formik.values;
          console.log(values)
          try {
          const response = await fetch("http://localhost:5001/client/reserveBed", {
            method: "POST",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(values),
          });
        
          if (response.ok) {
            const data = await response.json();
            if(data){
              handleClose() || handleBedModalClose()
              // onSubmitProps.resetForm();
              console.log('success')
            // navigate("/dashboard");
            }
        
          } else {
            // Handle server error (e.g., 400 Bad Request)
            console.log("Reserve registration failed");
            // Show an error message to the user
          }
          } catch (error) {
          console.log("Error occurred:", error);
          // Show an error message to the user
          }
        }
  return (
    <>
      <form  onSubmit={handleSubmit}>
              
                  <div className="flex flex-col items-center gap-2 w-[100%]">
                  <div className="flex justify-between w-[60ch] items-center mb-1 ">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Bed Reservation form
                    </Typography>
                    <IconButton aria-label="close" onClick={handleClose || handleBedModalClose}>
                      <CloseIcon />
                    </IconButton>
                  </div>
                  <div className="w-[60ch] gap-3 flex ">
                    <TextField
                        name="firstName"
                            id="outlined-multiline-flexible"
                            label='Patient first name'
                            values={formik.values.firstName}
                            maxRows={4}
                            helperText={formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName:''}
                            onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        sx={{
                        margin:'10px 0',
                        width:'50%'
                        }}
                        />
                    <TextField
                        name="lastName"
                            id="outlined-multiline-flexible"
                            label="Patient last name"
                            values={formik.values.lastName}
                            maxRows={4}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        helperText={formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName:''}
                        sx={{
                        margin:'10px 0',
                        width:'48%'
                        }}
                        />
                  </div>
                  <TextField
                        name="email"
                            id="outlined-multiline-flexible"
                            label='Email'
                            values={formik.values.email}
                            maxRows={4}
                            helperText={formik.touched.email && formik.errors.email ? formik.errors.email:''}
                            onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        sx={{
                        margin:'10px 0',
                        width:'60ch'
                        }}
                    />
                    <div className="w-[60ch] mb-2">
                    <TextField
                      id="outlined-select-currency"
                      select
                      name="plan"
                      label="Client status plan"
                      sx={{width:'60ch'}}
                      values={formik.values.plan}
                      helperText={formik.touched.plan && formik.errors.plan ? formik.errors.plan:''}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      >
                        {mstatus.map((option) => (
                          <MenuItem key={option.value} name='session' value={option.value}>
                            <div className="text-left">{option.label}</div>
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                    <div className="flex w-[60ch] gap-2">
                    <Autocomplete
                      options={(data && data.wards) ||[]}
                      getOptionLabel={(option) => option.ward}
                      // defaultValue={[data.patients[1]]}
                      filterSelectedOptions
                      name='ward'
                      sx={{width:'40ch'}}
                      values={formik.values.ward}
                      helperText={formik.touched.ward && formik.errors.ward ? formik.errors.ward:''}
                      onBlur={formik.handleBlur}
                      // onChange={formik.handleChange}
                      onChange={(event, value) => {
                        formik.setFieldValue('ward', value); // Update the field value
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label='Bed Ward'
                          placeholder="Empty ward"
                        />
                      )}
                    />
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        name='bedName'
                        options={(data && data.wards)||[]}
                        values={formik.values.bedName}
                        getOptionLabel={(option) => option.name}
                        helperText={formik.touched.bedName && formik.errors.bedName ? formik.errors.bedName:''}
                        onBlur={formik.handleBlur}
                        onChange={(event, value) => {
                          formik.setFieldValue('bedName', value); // Update the field value
                        }}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Bed name" />}
                      />
                    </div>
                  <div className="w-[60ch] flex flex-col">
                    <Typography id="modal-modal-title" variant="h6" component="h4">
                      <div className="text-left">Reservation date and time</div>
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['MultiInputTimeRangeField', 'SingleInputTimeRangeField']}>
                        <DateRangePicker
                            // value={value}
                            name='durationDate'
                            values={formik.values.durationDate}
                            helperText={formik.touched.durationDate && formik.errors.durationDate ? formik.errors.bedName:''}
                            onBlur={formik.handleBlur}
                            onChange={(value) => formik.setFieldValue('durationDate', value)}
                          />
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
                 
                  <TextField
                    id="filled-multiline-static"
                    label="Description"
                    multiline
                    name="description"
                    rows={7}
                    defaultValue="Minimum characters should be atleast 10 words...."
                    // variant="filled"
                    sx={{
                      width:'60ch',
                      margin:'10px 0'
                    }}
                    values={formik.values.description}
                    helperText={formik.touched.description && formik.errors.description ? formik.errors.description:''}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                    <div className="flex w-[60ch] gap-2 mt-10">
                      <button className="rounded-md w-[80%] bg-blue-900 text-slate-100" type='submit'>ADD</button>
                      <Button type='submit' variant="outlined" size="small" className='bg-blue-900 rounded-md' endIcon={<CloseIcon />}>
                        Close
                      </Button>
                    </div>
                  </div>   
      </form>
    </>
  )
}

export default bed