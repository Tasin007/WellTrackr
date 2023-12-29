import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import AuthProvider from "./AuthContext/AuthProvider";
import {  HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <HelmetProvider>
 <QueryClientProvider client={queryClient}>
 <AuthProvider>
 <RouterProvider router={router}>
  </RouterProvider>
 </AuthProvider>
 </QueryClientProvider>
  <Toaster position="top-right"/>
  </HelmetProvider>
  </React.StrictMode>,
);
