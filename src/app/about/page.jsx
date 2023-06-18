import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'
import blogImg from '../../../public/blog-img.png'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={blogImg} fill={true} alt='about img' className={styles.image} />
        <div className={styles.imageText}>
          <h1 className={styles.title}>About Me</h1>
          <h2 className={styles.desc}>introduction</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Seseorang yang hanyalah orang</h1>
          <p className={styles.desc}>
            saya tertarik ke dunia IT awal nya berasal dari linux.
          </p>
          <p className={styles.desc}>
           mungkin ini agak lucu bagi sebagian orang , tapi ini nyata
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
          <Button url="/contact" text="Contact Me"/>
        </div>
      </div>
    </div>
  )
}

export default About