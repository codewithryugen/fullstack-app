"use client"
import React,{useState}from 'react'
import styles from './page.module.css'
import Link from 'next/link'
const Register = () => {
  const handleSumbmit = async (e)=>{
    const [err,setErr] = useState(false);
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    try{

    }catch(err){
      setErr(true);
    }
  }
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSumbmit}>
        <input type="text" placeholder='username' className={styles.input} required/>
        <input type="email" placeholder='email' className={styles.input} required/>
        <input type="password" placeholder='password' className={styles.input} required/>
        <button className={styles.button}>Register</button>
      </form>
      {err&&"Something went wrong !"}
      <Link href="/dashboard/login">Login with an existing account </Link>
    </div>
  )
}

export default Register