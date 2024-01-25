import React from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import SearchBar from "./Components/SearchBar";
import UserList from "./Components/UserList";
const App=()=>{
  
  return(
   <Router>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/view" element={<UserList/>}/>
      <Route path="/search" element={<SearchBar/>}/>

    </Routes>
   </Router>
  )
}
export default App;