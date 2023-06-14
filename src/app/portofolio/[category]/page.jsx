import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button/Button'
import Image from 'next/image'
const Category = ({params}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Lorem, ipsum.</h1>
          <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             <b/>Eos eligendi alias, maxime illum assumenda fuga.
          </p>
          <Button text="See More" url="#"/>
        </div>
        <div className={styles.imgContainer}>
         <Image 
         fill={true} 
         src='https://i.pinimg.com/originals/d7/17/ed/d717ed080e612912c323110fef4670e8.jpg' 
         alt='berontaksenku'
         className={styles.img}
         />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Lorem, ipsum.</h1>
          <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             <b/>Eos eligendi alias, maxime illum assumenda fuga.
          </p>
          <Button text="See More" url="#"/>
        </div>
        <div className={styles.imgContainer}>
         <Image 
         fill={true} 
         src='https://i.pinimg.com/originals/d7/17/ed/d717ed080e612912c323110fef4670e8.jpg' 
         alt='berontaksenku'
         className={styles.img}
         />
        </div>
      </div>
    </div>
  )
}

export default Category