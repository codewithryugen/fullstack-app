import React from 'react'
import styles from './button.module.css'
import Link from 'next/link'

const Button = ({text,url,className=null}) => {
  return (
    <Link href={url} className={`${styles.container} ${className} `}>
        <button className={styles.btn}>
        {text}
        </button>
    </Link>
  )
}

export default Button