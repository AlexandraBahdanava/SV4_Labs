 import './App.css';
 import React from 'react';
 import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import MainPage from './Components/MainPage/MainPage.jsx';
import MastersPage from './Components/MastersPage/MastersPage.jsx';
import OpeningHoursPage from './Components/OpeningHoursPage/OpeningHoursPage.jsx';

function App() {
  return (
<body>
<Header></Header>
<Routes>
  <Route path="/" element ={<MainPage/>}></Route>
  <Route path="/master" element={<MastersPage/>}></Route>
  <Route path="/openinghours" element={<OpeningHoursPage/>}></Route>
</Routes>
<Footer></Footer>
</body>
  );
}

export default App;
