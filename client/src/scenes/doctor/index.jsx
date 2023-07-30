import { Box, useTheme } from "@mui/material";
import { useGetDoctorsQuery} from "../../state/api";
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
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ReporterrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import {useNavigate } from "react-router-dom";
import Assign from '../modals/assign'
import Modal from '@mui/material/Modal';
import React from 'react'

const Doctor = () => {
  const navigate = useNavigate();
    const theme = useTheme();
    const { data, isLoading } = useGetDoctorsQuery();
    // const { data, isLoading } = useGetDashboardQuery();
    const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const columns = [
      {
        field: "_id",
        headerName: "ID",
        flex: 1,
      },
      // {
      //   field:,
      //   headerName: "Name",
      //   flex: 0.5,
      // },
      {
        field: "name" ,
        headerName: "Name",
        flex: 0.5,
        
      },
      {
        field: "firstName",
        headerName: "firstName",
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
      }
    ];
    return (
      <Box m="1.5rem 2.5rem">
        
        <Header title="Doctors" subtitle="Assign doctors and list of doctors"  />
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
                left: '86%',
                height: '92%',
                transform: 'translate(-50%, -50%)',
                width: 550,
                borderRadius:'10px 1px 1px 10px',
                bgcolor: 'background.paper',
                border: '1px solid #000',
                boxShadow: 24,
                p: 4
            }}>
            <Assign/>
          </Box>
          </Modal>
        <Button variant="contained"  startIcon={<AddIcon />}onClick={() =>{navigate(`/doctors/register`)}} >
        Add
        </Button>
        <Button variant="contained" disabled startIcon={<BorderColorIcon />}>
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
          title="Total Doctors"
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
          title="Active doctors"
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
          title="Checked-in"
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
          title="Working Doctors"
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
        {/* <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={(data && data.transactions) || []}
          columns={columns}
          components={{
            ColumnMenu: CustomColumnMenu,
          }}
        /> */}
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={(data && data.doctors) || []}
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
export default Doctor