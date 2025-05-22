import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home";

import { Contact } from "./pages/Contact";

import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Navbar } from "./pages/Navbar";
import {Logout} from "./pages/Logout"
import { Provider } from "react-redux"

import store from "./redux/store"
import Cart from "./pages/Cart"
import Success from "./pages/Success"
import BookingCalendar from "./pages/BookingCalendar"
const App = () => {
  return (
    <Provider store={store}>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/contact" element={<Contact />} />
       
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<Success/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/" element={<BookingCalendar onDateChange={(dates) => console.log(dates)} />} />

        
      </Routes>
    </Router>
    </Provider>
  )
};

export default App;