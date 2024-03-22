import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Product from "./pages/Product";
import Dashboard from "./pages/Dashboard";
import OrdersManagement from "./pages/Order";
import OrdersCalendarView from "./components/CalenderViewOrd";
import Setting from "./pages/Setting";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element = {<Dashboard/>} ></Route>
          <Route path='/product' exact element = {<Product/>} ></Route>
          <Route path='/order' exact element = {<OrdersManagement/>} ></Route>
          <Route path='/ordercal' exact element = {<OrdersCalendarView/>} ></Route>
          <Route path='/contact' exact element = {<Contact/>} ></Route>
          <Route path='/settings' exact element = {<Setting/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
