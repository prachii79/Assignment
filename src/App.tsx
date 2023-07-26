import React, {useState} from "react"
import FirstPage from "./components/FirstPage"
import SecondPage from "./components/SecondPage";
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default function App(){
  
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  function handleName(e: React.ChangeEvent<HTMLInputElement>){
    console.log(e)
    const namei = e.target.value
    console.log(namei)
    setName(namei)
  }

  function handlePhone(e: React.ChangeEvent<HTMLInputElement>){
    const phonei = e.target.value
    console.log(phonei)
    setPhone(phonei)
  }

  function handleEmail(e: React.ChangeEvent<HTMLInputElement>){
    const emaili = e.target.value
    console.log(emaili)
    setEmail(emaili)
  }

  return(
    <>
      <FirstPage name={handleName} phone={handlePhone} email={handleEmail} />
    </>
  )
}