import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./Pages/HomePage";
import ServicesPage from "./Pages/ServicesPage";
import AboutMe from "./Pages/AboutMe";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route index element={<HomePage />} />
      <Route path="ServicesPage" element={<ServicesPage/>} />
      <Route path="AboutMe" element={<AboutMe />} />
    </Route>
  ))