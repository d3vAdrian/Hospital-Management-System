import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from 'axios';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl:'http://localhost:5001' }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Products",
    "Doctors",
    "Beds",
    "Customers",
    "Transactions",
    "Appointments",
    "Geography",
    "Sales",
    "Admins",
    "Performance",
    "Dashboard",
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/users`,
      providesTags: ["User"],
    }),
    getProducts: build.query({
      query: (id) => `client/products/`,
      providesTags: ["Products"],
    }),
    getDoctors: build.query({
      query: () => "management/doctors",
      // use a condition to find user by role the display
      providesTags: ["Doctors"],
      
    }),
    getBeds: build.query({
      query: () => "management/bed",
      // use a condition to find user by role the display
      providesTags: ["Beds"],
      
    }),
    getPatients: build.query({
      query: () => "management/patients",
      // use a condition to find user by role the display
      providesTags: ["Patients"],
      
    }),
    getWard: build.query({
      query: () => "management/ward",
      providesTags: ["Ward"],
      
    }),
    getAppt: build.query({
      query: () => "management/appt",
      providesTags: ["Doctors","Patients"],
      
    }),
    getCustomers: build.query({
      query: (id) => `client/customers/${id}`,
      providesTags: ["Customers"],
    }),
    
    login: build.query({
      query: ({formData}) => ({
        url: "/login",
        method: "POST",
      }), 
      providesTags: ["login"],
    }),
    getTransactions: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }), 
      providesTags: ["Transactions"],
    }),
    getGeography: build.query({
      query: () => "client/geography",
      providesTags: ["Geography"],
    }),
    getSales: build.query({
      query: () => "sales/sales",
      providesTags: ["Sales"],
    }),
    getAdmins: build.query({
      query: () => "management/admins",
      providesTags: ["Admins"],
    }),
    getUserPerformance: build.query({
      query: (id) => `management/performance/:id`,
      providesTags: ["Performance"],
    }),
    getDashboard: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"],
    }),
  }),
});


export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetDoctorsQuery,
  useGetPatientsQuery,
  useGetWardQuery,
  useGetApptQuery,
  useGetBedsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetUserPerformanceQuery,
  useGetDashboardQuery,
} = api;


const Api = axios.create({ baseURL: 'http://localhost:5001' });

Api.interceptors.request.use((req) => {
  if (cookie.getItem('userData')) {
    req.headers.Authorization = `Bearer ${JSON.parse(cookie.getItem('userData')).token}`;
  }

  return req;
});

export const login = (formData) => Api.post('/login', formData);
export const signup = (formData) => Api.post('/login', formData);