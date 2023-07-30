import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "./theme";
import Layout from "./scenes/layout";
import Login from "./scenes/login";
import Dashboard from "./scenes/dashboard";
import Products from "./scenes/products";
import Customers from "./scenes/customers";
import Transactions from "./scenes/transactions";
import Geography from "./scenes/geography";
import Overview from "./scenes/overview";
import Daily from "./scenes/daily";
import Monthly from "./scenes/monthly";
import Breakdown from "./scenes/breakdown";
import Admin from "./scenes/admin";
import Performance from "./scenes/performance";
import Doctor from "./scenes/doctor";
import Beds from "./scenes/bed";
import Appointments from "./scenes/appointment";
import Home from "./scenes/home";
import Patient from "./scenes/patient";
import RegPatient from "./scenes/forms/regPatient";
import RegEmployee from "./scenes/forms/regEmployee";
import './App.css'
function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.auth.token));

  return (
    <>
      <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            
            <Route element={<Layout />}>
                <Route path="/dashboard" element={<Dashboard />}/>
                {/* <Route path="/dashboard" element={isAuth ? <Dashboard /> : <Navigate to='/'/>  }replace/> */}
                <Route path="/inventory" element={isAuth ? <Products /> : <Navigate to='/'/>} replace />
                <Route path="/doctors" element={isAuth ? <Doctor/> : <Navigate to='/'/>} replace />
                <Route path="/beds" element={isAuth ? <Beds/> : <Navigate to='/'/>} replace />
                <Route path="/customers" element={isAuth ? <Customers /> : <Navigate to='/'/>} />
                <Route path="/transactions" element={isAuth ? <Transactions /> : <Navigate to='/'/>} />
                <Route path="/appointments" element={isAuth ? <Appointments /> : <Navigate to='/'/>} />
                <Route path="/geography" element={isAuth ? <Geography /> : <Navigate to='/'/>} />
                <Route path="/overview" element={isAuth ? <Overview /> : <Navigate to='login'/>} />
                <Route path="/patients" element={isAuth ? <Patient/> : <Navigate to='/'/>} />
                <Route path="/daily" element={isAuth ? <Daily /> : <Navigate to='/'/>} />
                <Route path="/monthly" element={isAuth ? <Monthly /> : <Navigate to='/'/>} />
                <Route path="/breakdown" element={isAuth ? <Breakdown /> : <Navigate to='/'/>} />
                <Route path="/admin" element={isAuth ? <Admin /> : <Navigate to='/'/>} />
                <Route path="/performance" element={isAuth ? <Performance /> : <Navigate to='/'/>} />
                <Route path="/patients/register" element={isAuth ? <RegPatient/> : <Navigate to='/'/>} />
                <Route path="/doctors/register" element={isAuth ? <RegEmployee/> : <Navigate to='/'/>} />
            </Route>
             <Route path="/" element={<Login/>} />
             <Route path="/home" element={<Home/>} />

          </Routes>
         
        </ThemeProvider>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
