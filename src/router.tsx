import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./Pages/HomePage";
import ServicesPage from "./Pages/ServicesPage";
import Inspiration from "./Pages/Inspiration";
import AddInspiration from "./Pages/AddInspiration";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route index element={<HomePage />} />
      <Route path="ServicesPage" element={<ServicesPage/>} />
      <Route path="Inspiration" element={<Inspiration />} />
      <Route path="AddInspiration" element={<AddInspiration />} />

    </Route>
  ))