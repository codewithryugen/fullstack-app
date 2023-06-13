import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='https://i.pinimg.com/originals/1e/b9/9c/1eb99c4dcf0c07b05591db2d1e5622e8.jpg' fill={true} alt='about img' className={styles.image} />
        <div className={styles.imageText}>
          <h1 className={styles.title}>Lorem ipsum dolor.</h1>
          <h2 className={styles.desc}>Lorem ipsum dolor sit amet consectetur</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Lorem, ipsum dolor.</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Ipsa quia voluptate dicta, ut nihil aut ab corrupti, eveniet, delectus optio provident?
             Rem voluptatem, veniam at dolorum illum voluptatum sapiente inventore?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>lorem sit amet bro</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Alias vero facere nobis molestias animi! Debitis voluptates tempora consectetur at dolor reprehenderit eos,
             repellendus corporis vero animi?
             Exercitationem dignissimos iure porro minus nobis veritatis. Unde, nihil.
             <br/><br/>
             - Lorem, ipsum.
             <br/>- kdmfasa
             <br/> -  anakfasas
          </p>
          <Button url="/contact" text="contact"/>
        </div>
      </div>
    </div>
  )
}

export default About