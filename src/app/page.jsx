import Image from 'next/image'
import styles from './page.module.css'
import Hero from "public/hero.png"
import Button from '@/components/button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Ryugen XD</h1>
        <p className={styles.description}> ini hanyalah project sederhana yang di buat apa adanya.</p>
        <Button url="/portofolio" text="Portofolio" className={styles.button}/>
      </div>
      <div className={styles.item}>
        <div className={styles.bg}></div>
        <Image src={Hero} alt='hero' className={styles.image}/>
      </div>
    </div>
  )
}
