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


const regEmployee = () => {
  const register = async (values,onSubmitProps)=> {
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
          navigate("/doctors");
          onSubmitProps.resetForm();
      } else {
        console.log("Request error:", response.status);
      }
    } catch (error) {
      // Error occurred during the request, handle the error
      console.log("Request error:", error);
    }
  }
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      emergencyfirstName:'',
      emergencylastName:'',
      middleName:'',
      occupation: "",
      country: '',
      county: '',
      gender: "",
      emergencyEmail:'',
      address:'',
      address2:'',
      martialStatus:'',
      relationship:'',
      role:'',
      experience:'',
      hireReaasons:'',
      occupation:'staff',
      dob:'',
      hireDate:new Date(),
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "First name must be 15 characters or less.")
        .required("First name is required"),
        country: Yup.object()
        .required("State is required"),
        county: Yup.object()
        .required("Status is required"),
      martialStatus: Yup.string()
        .min(5, "please select one.")
        .required("Status is required"),
      role: Yup.string()
        .min(2, "please select one.")
        .required("Required"),
      experience: Yup.string()
        .min(1, "please select one.")
        .required("Required"),
      relationship: Yup.string()
        .min(5, "please select one.")
        .required("Required"),
        emergencyfirstName: Yup.string()
        .max(15, "First name must be 15 characters or less.")
        .required("first name is required"),
        emergencylastName: Yup.string()
        .max(15, "Last name must be 15 characters or less.")
        .required("Last name is required"),
      middleName: Yup.string()
        .max(20, "Middlename must be 20 characters or less.")
        .required("Middle name is required"),
      lastName: Yup.string()
        .max(20, "Last name must be 20 characters or less.")
        .required("Last name is required"),
      username: Yup.string()
        .min(4, "Userame must be 4 characters or more.")
        .required("userame is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      emergencyEmail: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      address: Yup.string()
      .max(15, "Address must be 8 characters or more.")
      .required("Address is required"),
      address2: Yup.string()
      .min(5, "Address must be 5 characters or more."),
      hireReaasons: Yup.string()
      .min(2, "Reasons must be 10 characters or more.")
      .required("Reasons is required"),
      hireDesc: Yup.string()
      .min(5, "Description contain 10 characters or more.")
      .required("Description is required"),
      gender: Yup.string().required("Gender:"),
    }),

    onSubmit: async(values,onSubmitProps) => {
      console.log("form submitted");
      await register(values,onSubmitProps);  
    }
  });
  // debug
  console.log(formik.values)
   
  
  const mstatus = [
    
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
  const exprience = [
    {
      value: '<1',
      label: 'less than 1 year',
    },
    {
      value: '1-3',
      label: '1-3 years',
    },
    {
      value: '3-5',
      label: '3-5 years',
    },
    {
      value: '< 10',
      label: 'less than 10 years',
    },
    {
      value: '>10',
      label: 'more than 10 years',
    },
  ];
  const department = [
    {
      value: 'Pharmacist',
      label: 'Pharmacist',
    },
    {
      value: 'doctor',
      label: 'doctor',
    },
    {
      value: 'nurse',
      label: 'nurse',
    },
    {
      value: 'Staff',
      label: 'Staff',
    },
    {
      value: 'Accountant',
      label: 'Accountant',
    },
  ];
  const county =[
    { label: 'mombasa'},
    { label: 'kwale'},
    { label: 'kilifi'},
    { label: 'tana river'},
    { label: 'lamu'},
    { label: 'taita/tavelta'},
    { label: 'wajir'},
    { label: 'meru'},
    { label: 'thika'},
    { label: 'kirinyanga'},
    { label: 'kiambu'},
    { label: 'nakuru'},
    { label: 'west pokoto'},
    { label: 'baringo'},
    { label: 'narok'},
    { label: 'kajiado'},
    { label: 'bomet'},
    { label: 'siaya'},
    { label: 'migori'},
    { label: 'kisi'},
    { label: 'nairobi'},
    { label: 'kericho'},
    { label: 'uasin gishu'},
    { label: 'samburu'},
    { label: 'vihiga'},
  ];
  const countries = [
    { code: 'AD', label: 'Andorra', phone: '376' },
    {
      code: 'AE',
      label: 'United Arab Emirates',
      phone: '971',
    },
    { code: 'AF', label: 'Afghanistan', phone: '93' },
    {
      code: 'AG',
      label: 'Antigua and Barbuda',
      phone: '1-268',
    },
    { code: 'AI', label: 'Anguilla', phone: '1-264' },
    { code: 'AL', label: 'Albania', phone: '355' },
    { code: 'AM', label: 'Armenia', phone: '374' },
    { code: 'AO', label: 'Angola', phone: '244' },
    { code: 'AQ', label: 'Antarctica', phone: '672' },
    { code: 'AR', label: 'Argentina', phone: '54' },
    { code: 'AS', label: 'American Samoa', phone: '1-684' },
    { code: 'AT', label: 'Austria', phone: '43' },
    {
      code: 'AU',
      label: 'Australia',
      phone: '61',
      suggested: true,
    },
    { code: 'AW', label: 'Aruba', phone: '297' },
    { code: 'AX', label: 'Alland Islands', phone: '358' },
    { code: 'AZ', label: 'Azerbaijan', phone: '994' },
    {
      code: 'BA',
      label: 'Bosnia and Herzegovina',
      phone: '387',
    },
    { code: 'BB', label: 'Barbados', phone: '1-246' },
    { code: 'BD', label: 'Bangladesh', phone: '880' },
    { code: 'BE', label: 'Belgium', phone: '32' },
    { code: 'BF', label: 'Burkina Faso', phone: '226' },
    { code: 'BG', label: 'Bulgaria', phone: '359' },
    { code: 'BH', label: 'Bahrain', phone: '973' },
    { code: 'BI', label: 'Burundi', phone: '257' },
    { code: 'BJ', label: 'Benin', phone: '229' },
    { code: 'BL', label: 'Saint Barthelemy', phone: '590' },
    { code: 'BM', label: 'Bermuda', phone: '1-441' },
    { code: 'BN', label: 'Brunei Darussalam', phone: '673' },
    { code: 'BO', label: 'Bolivia', phone: '591' },
    { code: 'BR', label: 'Brazil', phone: '55' },
    { code: 'BS', label: 'Bahamas', phone: '1-242' },
    { code: 'BT', label: 'Bhutan', phone: '975' },
    { code: 'BV', label: 'Bouvet Island', phone: '47' },
    { code: 'BW', label: 'Botswana', phone: '267' },
    { code: 'BY', label: 'Belarus', phone: '375' },
    { code: 'BZ', label: 'Belize', phone: '501' },
    {
      code: 'CA',
      label: 'Canada',
      phone: '1',
      suggested: true,
    },
    {
      code: 'CC',
      label: 'Cocos (Keeling) Islands',
      phone: '61',
    },
    {
      code: 'CD',
      label: 'Congo, Democratic Republic of the',
      phone: '243',
    },
    {
      code: 'CF',
      label: 'Central African Republic',
      phone: '236',
    },
    {
      code: 'CG',
      label: 'Congo, Republic of the',
      phone: '242',
    },
    { code: 'CH', label: 'Switzerland', phone: '41' },
    { code: 'CI', label: "Cote d'Ivoire", phone: '225' },
    { code: 'CK', label: 'Cook Islands', phone: '682' },
    { code: 'CL', label: 'Chile', phone: '56' },
    { code: 'CM', label: 'Cameroon', phone: '237' },
    { code: 'CN', label: 'China', phone: '86' },
    { code: 'CO', label: 'Colombia', phone: '57' },
    { code: 'CR', label: 'Costa Rica', phone: '506' },
    { code: 'CU', label: 'Cuba', phone: '53' },
    { code: 'CV', label: 'Cape Verde', phone: '238' },
    { code: 'CW', label: 'Curacao', phone: '599' },
    { code: 'CX', label: 'Christmas Island', phone: '61' },
    { code: 'CY', label: 'Cyprus', phone: '357' },
    { code: 'CZ', label: 'Czech Republic', phone: '420' },
    {
      code: 'DE',
      label: 'Germany',
      phone: '49',
      suggested: true,
    },
    { code: 'DJ', label: 'Djibouti', phone: '253' },
    { code: 'DK', label: 'Denmark', phone: '45' },
    { code: 'DM', label: 'Dominica', phone: '1-767' },
    {
      code: 'DO',
      label: 'Dominican Republic',
      phone: '1-809',
    },
    { code: 'DZ', label: 'Algeria', phone: '213' },
    { code: 'EC', label: 'Ecuador', phone: '593' },
    { code: 'EE', label: 'Estonia', phone: '372' },
    { code: 'EG', label: 'Egypt', phone: '20' },
    { code: 'EH', label: 'Western Sahara', phone: '212' },
    { code: 'ER', label: 'Eritrea', phone: '291' },
    { code: 'ES', label: 'Spain', phone: '34' },
    { code: 'ET', label: 'Ethiopia', phone: '251' },
    { code: 'FI', label: 'Finland', phone: '358' },
    { code: 'FJ', label: 'Fiji', phone: '679' },
    {
      code: 'FK',
      label: 'Falkland Islands (Malvinas)',
      phone: '500',
    },
    {
      code: 'FM',
      label: 'Micronesia, Federated States of',
      phone: '691',
    },
    { code: 'FO', label: 'Faroe Islands', phone: '298' },
    {
      code: 'FR',
      label: 'France',
      phone: '33',
      suggested: true,
    },
    { code: 'GA', label: 'Gabon', phone: '241' },
    { code: 'GB', label: 'United Kingdom', phone: '44' },
    { code: 'GD', label: 'Grenada', phone: '1-473' },
    { code: 'GE', label: 'Georgia', phone: '995' },
    { code: 'GF', label: 'French Guiana', phone: '594' },
    { code: 'GG', label: 'Guernsey', phone: '44' },
    { code: 'GH', label: 'Ghana', phone: '233' },
    { code: 'GI', label: 'Gibraltar', phone: '350' },
    { code: 'GL', label: 'Greenland', phone: '299' },
    { code: 'GM', label: 'Gambia', phone: '220' },
    { code: 'GN', label: 'Guinea', phone: '224' },
    { code: 'GP', label: 'Guadeloupe', phone: '590' },
    { code: 'GQ', label: 'Equatorial Guinea', phone: '240' },
    { code: 'GR', label: 'Greece', phone: '30' },
    {
      code: 'GS',
      label: 'South Georgia and the South Sandwich Islands',
      phone: '500',
    },
    { code: 'GT', label: 'Guatemala', phone: '502' },
    { code: 'GU', label: 'Guam', phone: '1-671' },
    { code: 'GW', label: 'Guinea-Bissau', phone: '245' },
    { code: 'GY', label: 'Guyana', phone: '592' },
    { code: 'HK', label: 'Hong Kong', phone: '852' },
    {
      code: 'HM',
      label: 'Heard Island and McDonald Islands',
      phone: '672',
    },
    { code: 'HN', label: 'Honduras', phone: '504' },
    { code: 'HR', label: 'Croatia', phone: '385' },
    { code: 'HT', label: 'Haiti', phone: '509' },
    { code: 'HU', label: 'Hungary', phone: '36' },
    { code: 'ID', label: 'Indonesia', phone: '62' },
    { code: 'IE', label: 'Ireland', phone: '353' },
    { code: 'IL', label: 'Israel', phone: '972' },
    { code: 'IM', label: 'Isle of Man', phone: '44' },
    { code: 'IN', label: 'India', phone: '91' },
    {
      code: 'IO',
      label: 'British Indian Ocean Territory',
      phone: '246',
    },
    { code: 'IQ', label: 'Iraq', phone: '964' },
    {
      code: 'IR',
      label: 'Iran, Islamic Republic of',
      phone: '98',
    },
    { code: 'IS', label: 'Iceland', phone: '354' },
    { code: 'IT', label: 'Italy', phone: '39' },
    { code: 'JE', label: 'Jersey', phone: '44' },
    { code: 'JM', label: 'Jamaica', phone: '1-876' },
    { code: 'JO', label: 'Jordan', phone: '962' },
    {
      code: 'JP',
      label: 'Japan',
      phone: '81',
      suggested: true,
    },
    { code: 'KE', label: 'Kenya', phone: '254' },
    { code: 'KG', label: 'Kyrgyzstan', phone: '996' },
    { code: 'KH', label: 'Cambodia', phone: '855' },
    { code: 'KI', label: 'Kiribati', phone: '686' },
    { code: 'KM', label: 'Comoros', phone: '269' },
    {
      code: 'KN',
      label: 'Saint Kitts and Nevis',
      phone: '1-869',
    },
    {
      code: 'KP',
      label: "Korea, Democratic People's Republic of",
      phone: '850',
    },
    { code: 'KR', label: 'Korea, Republic of', phone: '82' },
    { code: 'KW', label: 'Kuwait', phone: '965' },
    { code: 'KY', label: 'Cayman Islands', phone: '1-345' },
    { code: 'KZ', label: 'Kazakhstan', phone: '7' },
    {
      code: 'LA',
      label: "Lao People's Democratic Republic",
      phone: '856',
    },
    { code: 'LB', label: 'Lebanon', phone: '961' },
    { code: 'LC', label: 'Saint Lucia', phone: '1-758' },
    { code: 'LI', label: 'Liechtenstein', phone: '423' },
    { code: 'LK', label: 'Sri Lanka', phone: '94' },
    { code: 'LR', label: 'Liberia', phone: '231' },
    { code: 'LS', label: 'Lesotho', phone: '266' },
    { code: 'LT', label: 'Lithuania', phone: '370' },
    { code: 'LU', label: 'Luxembourg', phone: '352' },
    { code: 'LV', label: 'Latvia', phone: '371' },
    { code: 'LY', label: 'Libya', phone: '218' },
    { code: 'MA', label: 'Morocco', phone: '212' },
    { code: 'MC', label: 'Monaco', phone: '377' },
    {
      code: 'MD',
      label: 'Moldova, Republic of',
      phone: '373',
    },
    { code: 'ME', label: 'Montenegro', phone: '382' },
    {
      code: 'MF',
      label: 'Saint Martin (French part)',
      phone: '590',
    },
    { code: 'MG', label: 'Madagascar', phone: '261' },
    { code: 'MH', label: 'Marshall Islands', phone: '692' },
    {
      code: 'MK',
      label: 'Macedonia, the Former Yugoslav Republic of',
      phone: '389',
    },
    { code: 'ML', label: 'Mali', phone: '223' },
    { code: 'MM', label: 'Myanmar', phone: '95' },
    { code: 'MN', label: 'Mongolia', phone: '976' },
    { code: 'MO', label: 'Macao', phone: '853' },
    {
      code: 'MP',
      label: 'Northern Mariana Islands',
      phone: '1-670',
    },
    { code: 'MQ', label: 'Martinique', phone: '596' },
    { code: 'MR', label: 'Mauritania', phone: '222' },
    { code: 'MS', label: 'Montserrat', phone: '1-664' },
    { code: 'MT', label: 'Malta', phone: '356' },
    { code: 'MU', label: 'Mauritius', phone: '230' },
    { code: 'MV', label: 'Maldives', phone: '960' },
    { code: 'MW', label: 'Malawi', phone: '265' },
    { code: 'MX', label: 'Mexico', phone: '52' },
    { code: 'MY', label: 'Malaysia', phone: '60' },
    { code: 'MZ', label: 'Mozambique', phone: '258' },
    { code: 'NA', label: 'Namibia', phone: '264' },
    { code: 'NC', label: 'New Caledonia', phone: '687' },
    { code: 'NE', label: 'Niger', phone: '227' },
    { code: 'NF', label: 'Norfolk Island', phone: '672' },
    { code: 'NG', label: 'Nigeria', phone: '234' },
    { code: 'NI', label: 'Nicaragua', phone: '505' },
    { code: 'NL', label: 'Netherlands', phone: '31' },
    { code: 'NO', label: 'Norway', phone: '47' },
    { code: 'NP', label: 'Nepal', phone: '977' },
    { code: 'NR', label: 'Nauru', phone: '674' },
    { code: 'NU', label: 'Niue', phone: '683' },
    { code: 'NZ', label: 'New Zealand', phone: '64' },
    { code: 'OM', label: 'Oman', phone: '968' },
    { code: 'PA', label: 'Panama', phone: '507' },
    { code: 'PE', label: 'Peru', phone: '51' },
    { code: 'PF', label: 'French Polynesia', phone: '689' },
    { code: 'PG', label: 'Papua New Guinea', phone: '675' },
    { code: 'PH', label: 'Philippines', phone: '63' },
    { code: 'PK', label: 'Pakistan', phone: '92' },
    { code: 'PL', label: 'Poland', phone: '48' },
    {
      code: 'PM',
      label: 'Saint Pierre and Miquelon',
      phone: '508',
    },
    { code: 'PN', label: 'Pitcairn', phone: '870' },
    { code: 'PR', label: 'Puerto Rico', phone: '1' },
    {
      code: 'PS',
      label: 'Palestine, State of',
      phone: '970',
    },
    { code: 'PT', label: 'Portugal', phone: '351' },
    { code: 'PW', label: 'Palau', phone: '680' },
    { code: 'PY', label: 'Paraguay', phone: '595' },
    { code: 'QA', label: 'Qatar', phone: '974' },
    { code: 'RE', label: 'Reunion', phone: '262' },
    { code: 'RO', label: 'Romania', phone: '40' },
    { code: 'RS', label: 'Serbia', phone: '381' },
    { code: 'RU', label: 'Russian Federation', phone: '7' },
    { code: 'RW', label: 'Rwanda', phone: '250' },
    { code: 'SA', label: 'Saudi Arabia', phone: '966' },
    { code: 'SB', label: 'Solomon Islands', phone: '677' },
    { code: 'SC', label: 'Seychelles', phone: '248' },
    { code: 'SD', label: 'Sudan', phone: '249' },
    { code: 'SE', label: 'Sweden', phone: '46' },
    { code: 'SG', label: 'Singapore', phone: '65' },
    { code: 'SH', label: 'Saint Helena', phone: '290' },
    { code: 'SI', label: 'Slovenia', phone: '386' },
    {
      code: 'SJ',
      label: 'Svalbard and Jan Mayen',
      phone: '47',
    },
    { code: 'SK', label: 'Slovakia', phone: '421' },
    { code: 'SL', label: 'Sierra Leone', phone: '232' },
    { code: 'SM', label: 'San Marino', phone: '378' },
    { code: 'SN', label: 'Senegal', phone: '221' },
    { code: 'SO', label: 'Somalia', phone: '252' },
    { code: 'SR', label: 'Suriname', phone: '597' },
    { code: 'SS', label: 'South Sudan', phone: '211' },
    {
      code: 'ST',
      label: 'Sao Tome and Principe',
      phone: '239',
    },
    { code: 'SV', label: 'El Salvador', phone: '503' },
    {
      code: 'SX',
      label: 'Sint Maarten (Dutch part)',
      phone: '1-721',
    },
    {
      code: 'SY',
      label: 'Syrian Arab Republic',
      phone: '963',
    },
    { code: 'SZ', label: 'Swaziland', phone: '268' },
    {
      code: 'TC',
      label: 'Turks and Caicos Islands',
      phone: '1-649',
    },
    { code: 'TD', label: 'Chad', phone: '235' },
    {
      code: 'TF',
      label: 'French Southern Territories',
      phone: '262',
    },
    { code: 'TG', label: 'Togo', phone: '228' },
    { code: 'TH', label: 'Thailand', phone: '66' },
    { code: 'TJ', label: 'Tajikistan', phone: '992' },
    { code: 'TK', label: 'Tokelau', phone: '690' },
    { code: 'TL', label: 'Timor-Leste', phone: '670' },
    { code: 'TM', label: 'Turkmenistan', phone: '993' },
    { code: 'TN', label: 'Tunisia', phone: '216' },
    { code: 'TO', label: 'Tonga', phone: '676' },
    { code: 'TR', label: 'Turkey', phone: '90' },
    {
      code: 'TT',
      label: 'Trinidad and Tobago',
      phone: '1-868',
    },
    { code: 'TV', label: 'Tuvalu', phone: '688' },
    {
      code: 'TW',
      label: 'Taiwan, Republic of China',
      phone: '886',
    },
    {
      code: 'TZ',
      label: 'United Republic of Tanzania',
      phone: '255',
    },
    { code: 'UA', label: 'Ukraine', phone: '380' },
    { code: 'UG', label: 'Uganda', phone: '256' },
    {
      code: 'US',
      label: 'United States',
      phone: '1',
      suggested: true,
    },
    { code: 'UY', label: 'Uruguay', phone: '598' },
    { code: 'UZ', label: 'Uzbekistan', phone: '998' },
    {
      code: 'VA',
      label: 'Holy See (Vatican City State)',
      phone: '379',
    },
    {
      code: 'VC',
      label: 'Saint Vincent and the Grenadines',
      phone: '1-784',
    },
    { code: 'VE', label: 'Venezuela', phone: '58' },
    {
      code: 'VG',
      label: 'British Virgin Islands',
      phone: '1-284',
    },
    {
      code: 'VI',
      label: 'US Virgin Islands',
      phone: '1-340',
    },
    { code: 'VN', label: 'Vietnam', phone: '84' },
    { code: 'VU', label: 'Vanuatu', phone: '678' },
    { code: 'WF', label: 'Wallis and Futuna', phone: '681' },
    { code: 'WS', label: 'Samoa', phone: '685' },
    { code: 'XK', label: 'Kosovo', phone: '383' },
    { code: 'YE', label: 'Yemen', phone: '967' },
    { code: 'YT', label: 'Mayotte', phone: '262' },
    { code: 'ZA', label: 'South Africa', phone: '27' },
    { code: 'ZM', label: 'Zambia', phone: '260' },
    { code: 'ZW', label: 'Zimbabwe', phone: '263' },
  ];
  return (
    <>
      <form  onSubmit={formik.handleSubmit}>
                  <h1>Employee regisration form </h1>

                  <div className="signup-top">
                  <TextField
                      name="firstName"
                          id="outlined-multiline-flexible"
                          label='First name'
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
                      name="middleName"
                          id="outlined-multiline-flexible"
                          label="Middle Name"
                          values={formik.values.middleName}
                          maxRows={4}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      helperText={formik.touched.middleName && formik.errors.middleName ? formik.errors.middleName:''}
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
                      <div className="flex w-[100%]  justify-between">
                        <div className='w-[45%]'>
                          <TextField
                              name="address"
                                  id="outlined-multiline-flexible"
                                  label="Address"
                                  onBlur={formik.handleBlur}
                                  values={formik.values.address}
                                  maxRows={4}
                                  helperText={formik.touched.address && formik.errors.address ? formik.errors.address:''}
                            onChange={formik.handleChange}
                              sx={{
                              width:'100%',
                              margin:'10px 0',
                              backgroundColor:'#eee',

                              }}
                              />
                            <TextField
                              name="address2"
                                  id="outlined-multiline-flexible"
                                  label="Street Address line 2"
                                  onBlur={formik.handleBlur}
                                  values={formik.values.address2}
                                  maxRows={4}
                                  helperText={formik.touched.address2 && formik.errors.address2 ? formik.errors.address2:''}
                            onChange={formik.handleChange}
                              sx={{
                              width:'100%',
                              margin:'10px 0',
                              backgroundColor:'#eee',

                              }}
                          />
                          <div className="flex justify-between w-[100%]">
                            <div className='flex flex-col'>
                              <label className='text-md font-medium text-left mb-2'>State</label>
                               <Autocomplete
                                id="country-select-demo"
                                sx={{ width: 300 }}
                                options={countries}
                                autoHighlight
                                name="country"
                                getOptionLabel={(option) => option.label}
                                isOptionEqualToValue={(option, value) => option.label === value.label}
                                value={formik.values.country || null}
                                onBlur={formik.handleBlur}
                                onChange={(event, newValue) => {
                                  event.preventDefault();
                                  formik.setFieldValue('country', newValue);
                                   // Call the onChange function with the selected country
                                }}
                                renderOption={(props, option) => (
                                  <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                    <img
                                      loading="lazy"
                                      width="20"
                                      src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                      srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                      alt=""
                                    />
                                    {option.label}
                                  </Box>
                                )}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    label={`${formik.touched.country && formik.errors.country ? formik.errors.country :'Choose a country'}`}
                                    inputProps={{
                                      ...params.inputProps,
                                      autoComplete: 'new-password', // disable autocomplete and autofill
                                    }}
                                  />
                                )}
                              />
                            </div>
                            <div className='flex flex-col'>
                               <label className='text-md font-medium text-left mb-2'>Province</label>
                              
                                <Autocomplete
                                id="country-select-demo"
                                sx={{ width: 300 }}
                                options={county}
                                autoHighlight
                                name='county'
                                getOptionLabel={(option) => option.label}
                                isOptionEqualToValue={(option, value) => option.value=== value.value}
                                value={formik.values.county || null}
                                onChange={(event, newValue) => {
                                  event.preventDefault();
                                  formik.setFieldValue('county', newValue);
                                 // Call the onChange function with the selected country
                                }}
                                renderOption={(props, option) => (
                                  <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                    {option.label}
                                  </Box>
                                )}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    label={`${formik.touched.county && formik.errors.county ? formik.errors.county :'Choose a county'}`}
                                    inputProps={{
                                      ...params.inputProps,
                                      autoComplete: 'new-password', // disable autocomplete and autofill
                                    }}
                                  />
                                )}
                              />
                            </div>
                          </div>
                        </div>
                        <div className=" flex flex-col w-[52%] ">
                          <div className="flex">
                            <div className='flex flex-col w-[100%]'>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                <DateTimePicker
                                  label="Date of hire (D.O.H)"
                                  sx={{
                                    width:'98%'
                                  }}
                                  name='hireDate'
                                  onBlur={formik.handleBlur}
                                  values={formik.values.hireDate}
                                  onChange={(value) => {
                                    const selectedDate = dayjs(value);
                                    const currentDate = dayjs();
                                    if (selectedDate.isBefore(currentDate, 'day')) {
                                      formik.setFieldValue('hireDate', value);
                                    }
                                  }}
                                />
                                </DemoContainer>
                                </LocalizationProvider>
                                
                            </div>
                            <div className='flex flex-col w-[100%]'>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                  <DatePicker
                                  onBlur={formik.handleBlur}
                                  label="Date of birth (D.O.B)"sx={{
                                    width:'100%'
                                  }}
                                  onChange={(value) => {
                                    const selectedDate = dayjs(value);
                                    const currentDate = dayjs();
                                    if (selectedDate.isBefore(currentDate, 'day')) {
                                      formik.setFieldValue('dob', value);
                                    }
                                  }}
                                />
                                </DemoContainer>
                                </LocalizationProvider>
                                
                            </div>
                          </div>
                            <div className=" flex flex-col w-[50%] mt-5">
                              <TextField
                                id="outlined-select-currency"
                                select
                                name='martialStatus'
                                value={formik.values.martialStatus}
                                label="martial status"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText={formik.touched.martialStatus && formik.errors.martialStatus ? formik.errors.martialStatus:'Please select your martail status'}
                              >
                                {mstatus.map((option) => (
                                  <MenuItem key={option.value} value={option.value} onChange={formik.handleChange}>
                                    {option.label}
                                  </MenuItem>
                                ))}
                              </TextField>

                              
                            </div>
                            <TextField
                              name="email"
                                  id="outlined-multiline-flexible"
                                  label="Email"
                                  values={formik.values.email}
                                  maxRows={4}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              helperText={formik.touched.email && formik.errors.email ? formik.errors.lastName:''}
                              sx={{
                              margin:'10px 0',
                              backgroundColor:'#eee',
                              width:'100%'
                              }}
                              />
                        </div>
                        
                      </div>

                  <div className="w-[100%] text-left">
                    <label> Emergency contact:</label>
                    <div className="flex justify-between gap-10">
                    <TextField
                      name="emergencyfirstName"
                          id="outlined-multiline-flexible"
                          label='First name'
                          values={formik.values.emergencyfirstName}
                          maxRows={4}
                          helperText={formik.touched.emergencyfirstName && formik.errors.emergencyfirstName ? formik.errors.emergencyfirstName:''}
                          onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      sx={{
                      margin:'10px 0',
                      backgroundColor:'#eee',
                      width:'45%'
                      }}
                      />
                  <TextField
                      name="emergencylastName"
                          id="outlined-multiline-flexible"
                          label="Last Name"
                          values={formik.values.emergencylastName}
                          maxRows={4}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      helperText={formik.touched.emergencylastName && formik.errors.emergencylastName ? formik.errors.emergencylastName:''}
                      sx={{
                      margin:'10px 0',
                      backgroundColor:'#eee',
                      width:'52%',
                      
                      }}
                      />
                    </div>
                    <div className="flex gap-12">
                    <TextField
                      name="emergencyEmail"
                          id="outlined-multiline-flexible"
                          label="Email"
                          values={formik.values.emergencyEmail}
                          maxRows={4}
                          helperText={formik.touched.emergencyEmail && formik.errors.emergencyEmail ? formik.errors.emergencyEmail :''}
                          onBlur={formik.handleBlur}
                     onChange={formik.handleChange}
                      sx={{
                      width:'45%',
                      margin:'10px 0',
                      backgroundColor:'#eee',
                      }}
                      />
                       <div className=" flex flex-col w-[30%]">
                      <TextField
                        id="outlined-select-currency"
                        select
                        name="relationship"
                        label="relationship"
                        value={formik.values.relationship}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        helperText={formik.touched.relationship && formik.errors.relationship ? formik.errors.relationship:'Please select your realtionship'}
                      >
                        {mstatus.map((option) => (
                          <MenuItem key={option.value} name='relationship' value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                    </div>
                  </div>
                  <div className="w-[100%] text-left">
                    <label className=''>Department details:</label>
                    <div className="flex justify-between gap-5 mb-5 mt-3">
                    <div className=" flex flex-col w-[45%] gap-3">
                      <TextField
                        id="outlined-select-currency"
                        select
                        name="role"
                        label="Department"
                        value={formik.values.role}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        helperText={formik.touched.role && formik.errors.role ? formik.errors.role:'Please select your realtionship'}
                      >
                        {department.map((option) => (
                          <MenuItem key={option.value} name='relationship' value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                      <TextField
                        id="outlined-select-currency"
                        select
                        name="experience"
                        label="Exprience Level"
                        value={formik.values.experience}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        helperText={formik.touched.experience && formik.errors.experience ? formik.errors.experience:'Please select your realtionship'}
                      >
                        {exprience.map((option) => (
                          <MenuItem key={option.value} name='exprience' value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                    <TextField
                      name="hireReaasons"
                          id="outlined-multiline-flexible"
                          label='Reason for registration'
                          values={formik.values.hireReaasons}
                          maxRows={2}
                          helperText={formik.touched.hireReaasons && formik.errors.hireReaasons ? formik.errors.hireReaasons:''}
                          onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      sx={{
                      margin:'10px 2',
                      backgroundColor:'#eee',
                      width:'52%',
                      maxHeight:'6vh'
                      }}
                      />
                    </div>
                    <div className="b">
                      <TextField
                    id="filled-multiline-static"
                    label="Description"
                    multiline
                    name="hireDesc"
                    rows={7}
                    defaultValue="Minimum characters should be atleast 10 words...."
                    // variant="filled"
                    sx={{
                      width:'45%'
                    }}
                    values={formik.values.hireDesc}
                    helperText={formik.touched.hireDesc && formik.errors.hireDesc ? formik.errors.hireDesc:''}
                          onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                  />
                      </div>
                  </div>
                  
                    
                  <button className="signup mt-10" type='submit'>Sign Up</button>

      </form>
    </>
  )
}

export default regEmployee