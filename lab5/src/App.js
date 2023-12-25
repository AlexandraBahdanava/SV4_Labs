 import './App.css';
import { BrowserRouter as Route, Routes } from "react-router-dom"
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import MainPage from './Components/MainPage/MainPage';
import MastersPage from './Components/MastersPage/MastersPage';
import OpeningHoursPage from './Components/OpeningHoursPage/OpeningHoursPage';

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
