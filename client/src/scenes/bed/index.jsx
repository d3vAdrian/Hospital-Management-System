import { Box, useTheme } from "@mui/material";
import { useGetBedsQuery } from "../../state/api";
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
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ReporterrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import Modal from '@mui/material/Modal';
import React from 'react'
import BedModal from '../modals/bed'

const Bed= () => {
    const theme = useTheme();
    const { data, isLoading } = useGetBedsQuery();
    const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const columns = [
      {
        field: "_id",
        headerName: "Bed ID",
        flex: 1,
      },
      {
        field: "name",
        headerName: "Bed Name",
        flex: 1,
      },
      {
        field: "ward",
        headerName: "Ward",
        flex: 1,
      },
    ];
  
    return (
      <Box m="1.5rem 2.5rem">
        <Header title="Beds" subtitle="Assign Beds and list of Beds" />
        <Box
        sx={{
          marginTop:'1rem',
          display:'flex',
          justifyContent:'left',
          gap:'1.5rem'
        }}
        >
        <Button variant="contained" startIcon={<AssignmentTurnedInIcon />} onClick={handleOpen}>
        Reserve  Bed
        </Button>
          <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{position: 'absolute',
                top: '50%',
                left: '88%',
                height: '92%',
                transform: 'translate(-50%, -50%)',
                width: 550,
                borderRadius:'10px 1px 1px 10px',
                bgcolor: 'background.paper',
                border: '1px solid #000',
                boxShadow: 24,
                p: 4
            }}>
            <BedModal handleClose={handleClose}/>
          </Box>
          </Modal>
       
        <Button variant="contained" disabled startIcon={<AddIcon />}>
        Add
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
        justifyContent="center"
        display="flex"
        height="180px"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
         {/* ROW 1 */}
         
         <StatBox
          title="Total Beds"
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
          title="Empty Beds"
          value={data && data.todayStats.totalSales}
          increase="+21%"
          description="Since last month"
          icon={
            <PointOfSale
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />

        <StatBox
          title="Occuppied Beds"
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
          title="Damaged Beds"
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
        height="60vh"
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
          rows={(data && data.beds) || ''}
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
export default Bed