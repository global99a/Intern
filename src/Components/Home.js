import React from "react";
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const Home=()=>{
    const navigate=useNavigate();
    const handleViewButton=()=>{
        navigate('/view');
    }
    const handleSearchButton=()=>{
        navigate('/search');
    }
    return(
        
            <div className="home">
                <h1><b>PeopleNetwork</b></h1>
                <h2>Welcome to our user directory</h2>
                <p>Our PeopleNetwork allows you to easily search for and view details of users.</p>
                <br/>

                <p>
                 To get Started,you can
                 <ul>
                    <li> View the User list</li>
                    <button type="button" class='btn btn-primary' onClick={handleViewButton}> View </button>
                    
                </ul> 
                </p>
            </div>
        
    );
}
export default Home;