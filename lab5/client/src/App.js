 import './App.css';
 import React, {useState} from 'react';
 import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import MainPage from './Components/MainPage/MainPage.jsx';
import MastersPage from './Components/MastersPage/MastersPage.jsx';
import OpeningHoursPage from './Components/OpeningHoursPage/OpeningHoursPage.jsx';
import { publicRoutes } from "./router/publicRoutes";
import { LOGIN_ROUTE } from "./utils/consts";
import AppointmentForm from './Components/AppointmentForm/AppointmentForm.jsx';
import RecordForm from './Components/RecordForm/RecordForm.jsx';

function App() { 
  const token = localStorage.getItem("token");

  if (!token) {
    return (
      <Router>
        <Routes>
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} exact />
            ))}
            <Route key="*" path="*" element={<Navigate to={LOGIN_ROUTE} />} />
        </Routes>
        </Router>
    );
}

  return (
<Router>
<div className="App">
  <Header></Header>
  <Routes>
      <Route path="/" element ={<MainPage/>}></Route>
      <Route path="/login" element ={<MainPage/>}></Route>
      <Route path="/master" element={<MastersPage/>}></Route>
      <Route path="/openinghours" element={<OpeningHoursPage/>}></Route>
      <Route path="/appointmentform" element={<AppointmentForm/>}></Route>
      <Route path="/record" element={<RecordForm/>}></Route>
  </Routes>
  </div>
<Footer></Footer>
</Router>
  );
}

export default App;
