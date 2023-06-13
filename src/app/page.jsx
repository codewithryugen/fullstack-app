import Image from 'next/image'
import styles from './page.module.css'
import Hero from "public/hero.png"
import Button from '@/components/button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Lorem ipsum dolor sit.</h1>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ad sunt accusamus dolores id.</p>
        <Button url="/portofolio" text="for wik for wek"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt='hero' className={styles.image}/>
      </div>
    </div>
  )
}
