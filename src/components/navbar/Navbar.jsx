"use client"

import Link from 'next/link'
import React, { useContext } from 'react'

import styles from './navbar.module.css'
import Darkmode from '../darkmode/Darkmode';
// import { ThemeContext } from '@/context/ThemeContext';


const links = [
  {
    id:1,
    name:'Home',
    path:'/'
  },
  {
    id:2,
    name:'Portofolio',
    path:'/portofolio'
  },
  {
    id:3,
    name:'Blog',
    path:'/blog'
  },
  {
    id:4,
    name:'About',
    path:'/about'
  },
  {
    id:5,
    name:'Contact',
    path:'/contact'
  },
  {
    id:6,
    name:'Dashboard',
    path:'/dashboard'
  }
];

const Navbar = () => {
  // const {mode} = useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>FullStack App</Link>
      <div className={styles.links}>
        <Darkmode/>
        {links.map((link)=>(
          <Link key={link.id} href={link.path} className={styles.link} >
            {link.name}
          </Link>
        ))}
        <button className={styles.logout} onClick={()=>{console.log('logged out')}}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar