import { Box, useTheme } from "@mui/material";
import { useGetPatientsQuery} from "../../state/api";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
import CustomColumnMenu from "../../components/DataGridCustomColumnMenu";
import {useMediaQuery} from "@mui/material";
import {
    Email,
    PointOfSale,
    PersonAdd,
    Traffic,
  } from "@mui/icons-material";
import StatBox from "../../components/StatBox";
import OverviewChart from "../../components/OverviewChart";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AddIcon from '@mui/icons-material/Add';
import ReporterrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import {useNavigate } from "react-router-dom";
import Assign from '../modals/assign'
import Modal from '@mui/material/Modal';
import React ,{useState}from 'react'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import BedModal from '../modals/bed'

const Patient = () => {
    const theme = useTheme();
    const { data, isLoading } = useGetPatientsQuery();
    const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [isBedModalOpen, setIsBedModalOpen] = useState(false);
    const handleBedModalOpen = () => {
      setIsBedModalOpen(true);
    };
  
    const handleBedModalClose = () => {
      setIsBedModalOpen(false);
    };

    const columns = [
      {
        field: "_id",
        headerName: "ID",
        flex: 1,
      },
      {
        field: "name",
        headerName: "Name",
        flex: 0.5,
      },
      {
        field: "FirstName",
        headerName: "First name",
        flex: 0.5,
      },
      {
        field: "email",
        headerName: "Email",
        flex: 1,
      },
      // {
      //   field: "phoneNumber",
      //   headerName: "Phone Number",
      //   flex: 0.7,
      //   renderCell: (params) => {
      //     return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
      //   },
      // },
      
      {
        field: "country",
        headerName: "Country",
        flex: 0.9,
      },
      {
        field: "gender",
        headerName: "gender",
        flex: 0.4,
      },
      {
        field: "occupation",
        headerName: "Occupation",
        flex: 1,
      },
      {
        field: "role",
        headerName: "Role",
        flex: 0.5,
      },
      {
        field: "btype",
        headerName: "Blood type",
        flex: 0.5,
      },
    ];
  
    return (
      <Box m="1.5rem 2.5rem">
        <Header title="Patients" subtitle="Managing patients and list of patients" />
        <Box
        sx={{
          marginTop:'1rem',
          display:'flex',
          justifyContent:'left',
          gap:'1.5rem'
        }}
        >
        <Button variant="contained" startIcon={<AssignmentTurnedInIcon />} onClick={handleOpen} >
        Assign Doctor
        </Button>
          <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{position: 'absolute',
                top: '50%',
                left: '87%',
                height: '92%',
                transform: 'translate(-50%, -50%)',
                width: 650,
                borderRadius:'10px 1px 1px 10px',
                bgcolor: 'background.paper',
                border: '1px solid #000',
                boxShadow: 24,
                p: 4
            }}>
            <Assign handleClose={handleClose}/>
          </Box>
          </Modal>
          <Button variant="contained" startIcon={<AssignmentTurnedInIcon />} onClick={handleBedModalOpen}>
        Assign Bed
          </Button>
          <Modal
            open={isBedModalOpen}
            onClose={handleBedModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '86%',
                height: '92%',
                transform: 'translate(-50%, -50%)',
                width: 550,
                borderRadius: '10px 1px 1px 10px',
                bgcolor: 'background.paper',
                border: '1px solid #000',
                boxShadow: 24,
                p: 4
              }}
            >
              <BedModal  handleClose={handleBedModalClose}/>
            </Box>
          </Modal>
        
        <Button variant="contained"  startIcon={<AddIcon />}onClick={() =>{navigate(`/patients/register`)}}>
        Add
        </Button>
        <Button variant="contained" disabled startIcon={<BorderColorIcon /> }>
        Edit
        </Button>
        <Button variant="contained" disabled startIcon={<DeleteIcon />}>
        Delete
        </Button>
        <Button variant="contained" startIcon={<ReporterrorredIcon />}>
        Report
        </Button>
        </Box>
        <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
         {/* ROW 1 */}
         <StatBox
          title="Total Patients"
          value={data && data.totalCustomers}
          increase="+14%"
          description="Since last month"
          icon={
            <Email
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Today's Adnissions"
          value={data && data.todayStats.totalSales}
          increase="+21%"
          description="Since last month"
          icon={
            <PointOfSale
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
        >
          <OverviewChart view="sales" isDashboard={true} />
        </Box>
        <StatBox
          title="Monthly Admissions"
          value={data && data.thisMonthStats.totalSales}
          increase="+5%"
          description="Since last month"
          icon={
            <PersonAdd
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Year Admissions"
          value={data && data.yearlySalesTotal}
          increase="+43%"
          description="Since last month"
          icon={
            <Traffic
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />

        {/* ROW 2 */}
        
      </Box>


        <Box m=".5rem 1rem">
      <Box
        height="47vh"
        mt="30px"
        width="100%"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={(data && data.patients) || []}
          columns={columns}
          components={{
            ColumnMenu: CustomColumnMenu,
          }}
        />
        </Box>
        </Box>
      </Box>
    );
  };
export default Patient