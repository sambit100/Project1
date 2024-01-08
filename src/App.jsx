import { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Sidebar2 from "./Components/Sidebar2";
import Maincontent from "./Components/Maincontent";

// // import pic1 from '../public/images/pic3.jpg'
// import SearchIcon from "@mui/icons-material/Search";
// import PersonIcon from "@mui/icons-material/Person";
// import ListIcon from "@mui/icons-material/List";
// import NewspaperIcon from "@mui/icons-material/Newspaper";
// import LogoutIcon from "@mui/icons-material/Logout";
// import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
function App() {

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      < div className="flex justify-items-start ">
        <Sidebar/>
          <Sidebar2/>
        </div>
   
    <div><Maincontent/></div>
    <div>homepage 3</div>
   
    </div>
    
    </>
  );
}

export default App;
