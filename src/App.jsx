import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Apply from "./pages/Apply";
import UploadPhoto from "./pages/UploadPhoto";
import Payment from "./pages/Payment";
import MyTickets from "./pages/MyTickets";
import TicketView from "./pages/TicketView";
import FillApplication from "./pages/FillApplication";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/apply" element={<Apply />} />
      <Route path="/upload-photo" element={<UploadPhoto />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/my-tickets" element={<MyTickets />} />
      <Route path="/ticket/:id" element={<TicketView />} />
      <Route path="/fill-application" element={<FillApplication />} />
      
    </Routes>
  );
}

export default App;
