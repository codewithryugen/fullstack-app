"use client"
import { signIn } from 'next-auth/react'
import React,{useState} from 'react'
import styles from './page.module.css'

const Login = () => {
  const [err,setErr] = useState(false);

  const handleSumbmit = async (e)=>{
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try{
      signIn("credentials",{email,password});
    }catch(err){
      console.log(err.message);
      setErr(true);
    }
  }
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSumbmit}>
        <input type="email" placeholder='email' className={styles.input} required/>
        <input type="password" placeholder='password' className={styles.input} required/>
        <button className={styles.button}>Login</button>
      </form>
      <span>{err && "user is not exists!"}</span>
      <button onClick={()=>signIn("google")}>Login With Google</button>
    </div>
  )
}

export default Login