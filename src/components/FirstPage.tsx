import React from "react"
import SecondPage from "./SecondPage"
import SecondPageOne from "./SecondPageOne"
import SecondPageTwo from "./SecondPageTwo"
import ReactDOM from 'react-dom/client'
import { TextField} from '@mui/material';
import { Button } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default function FirstPage(props: {name: (e: any) => void; phone: (e: any) => void; email: (e: any) => void}){

    function handleSubmit(){
        const nameEl = document.getElementById("name") as HTMLInputElement
        const phoneEl = document.getElementById("phone") as HTMLInputElement
        const emailEl = document.getElementById("email") as HTMLInputElement
        if(nameEl.value && phoneEl.value && emailEl.value){
            let formInfo ={
                "name": nameEl.value,
                "phone": phoneEl.value,
                "email": emailEl.value
            }
            localStorage.setItem("Info", JSON.stringify(formInfo))
            // ReactDOM.createRoot(document.getElementById('root')!).render(<>
            //     <SecondPageOne />
            //     <SecondPageTwo />
            // </>)
        }
    }

    
    return(
        <>
          <form className="form">
            <p className="labels" >Name:</p>
            <TextField variant="outlined" id="name" name="name" placeholder="Enter your name" onChange={(e) => props.name(e)} required /><br></br>
            <p className="labels">Phone Number:</p>
            <TextField variant="outlined" id="phone" name="phone" placeholder="Enter your phone number" onChange={(e) => props.phone(e)} required /><br></br>
            <p className="labels">Email:</p>
            <TextField variant="outlined" id="email" name="email" placeholder="Enter your email address" onChange={(e) => props.email(e)} required /><br></br><br></br>
            <Link to="/SecondPage" ><Button onClick={handleSubmit} variant="outlined" color="primary" className="next" >NEXT</Button></Link>
          </form>
          
        <Routes>
            <Route path="/SecondPage" element={<SecondPage />} />
        </Routes>
        </>
    )
}