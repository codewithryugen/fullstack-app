import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
const Portofolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Lorem ipsum dolor sit.</h1>
      <div className={styles.items}>
        <Link className={styles.item} href="/portofolio/illustrations">
          <span className={styles.title}>
            Illustrations
          </span>
        </Link>
        <Link className={styles.item} href="/portofolio/websites">
          <span className={styles.title}>
            Websites
          </span>
        </Link>
        <Link className={styles.item} href="/portofolio/applications">
          <span className={styles.title}>
            Applications
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Portofolio