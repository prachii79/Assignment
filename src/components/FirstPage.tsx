import React, {useState} from "react"
import { TextField} from '@mui/material';
import { Button } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default function FirstPage(){

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    function handleSubmit(){
        const nameEl = document.getElementById("name") as HTMLInputElement
        const phoneEl = document.getElementById("phone") as HTMLInputElement
        const emailEl = document.getElementById("email") as HTMLInputElement
        if(nameEl.value && phoneEl.value && emailEl.value){
            const formInfo ={
                "name": nameEl.value,
                "phone": phoneEl.value,
                "email": emailEl.value
            }
            localStorage.setItem("Info", JSON.stringify(formInfo))
        }
    }

    
    return(
        <>
          <form className="form">
            <p className="labels" >Name:</p>
            <TextField variant="outlined" id="name" name="name" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} required /><br></br>
            <p className="labels">Phone Number:</p>
            <TextField variant="outlined" id="phone" name="phone" placeholder="Enter your phone number" onChange={(e) => setPhone(e.target.value)} required /><br></br>
            <p className="labels">Email:</p>
            <TextField variant="outlined" id="email" name="email" placeholder="Enter your email address" onChange={(e) => setEmail(e.target.value)} required /><br></br><br></br>
            <Link to="/SecondPage" ><Button onClick={handleSubmit} variant="outlined" color="primary" className="next" >NEXT</Button></Link>
          </form>
        </>
    )
}