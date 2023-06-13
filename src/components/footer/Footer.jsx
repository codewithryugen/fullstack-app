import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        &copy; 2023 Gen Xiaong. All rights reserved.
      </div>
      <div>
        <div className={styles.social}>
          <Image src="/1.png"  height={15} width={15} className={styles.icon} alt='xiaong facebook'/>
          <Image src="/2.png"  height={15} width={15} className={styles.icon} alt='xiaong '/>
          <Image src="/3.png" height={15} width={15} className={styles.icon} alt='xiaong'/>
          <Image src="/4.png" height={15} width={15} className={styles.icon} alt='xiaong'/>
        </div>
      </div>
    </div>
  )
}

export default Footer