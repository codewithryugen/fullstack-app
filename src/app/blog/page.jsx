import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href='/blog/tesslug' className={styles.container}>
        <div className={styles.imgContainer}>
        <Image
         src='https://i.pinimg.com/564x/7d/7a/02/7d7a02a6df18a1dfce7e5d8c74b9a7d7.jpg'
         alt='image blog' 
         width={400}
         height={250}
         className={styles.img}
        />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>ナツコミ2021開催中！</h1>
          <p className={styles.description}>対象商品購入でコースタープレゼント‼️】 8月よりナツコミ参加書店にて #マッシュル のコースター配布を開始します！ 
          <br></br>対象商品を購入してぜひゲットしてくださいね✨ 
          <br></br>※配布条件・時期は書店により異なります。</p>
        </div>
      </Link>
      <Link href='/blog/tesslug' className={styles.container}>
        <div className={styles.imgContainer}>
        <Image
         src='https://i.pinimg.com/564x/7d/7a/02/7d7a02a6df18a1dfce7e5d8c74b9a7d7.jpg'
         alt='image blog' 
         width={400}
         height={250}
         className={styles.img}
        />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>ナツコミ2021開催中！</h1>
          <p className={styles.description}>対象商品購入でコースタープレゼント‼️】 8月よりナツコミ参加書店にて #マッシュル のコースター配布を開始します！ 
          <br></br>対象商品を購入してぜひゲットしてくださいね✨ 
          <br></br>※配布条件・時期は書店により異なります。</p>
        </div>
      </Link>
      <Link href='/blog/tesslug' className={styles.container}>
        <div className={styles.imgContainer}>
        <Image
         src='https://i.pinimg.com/564x/7d/7a/02/7d7a02a6df18a1dfce7e5d8c74b9a7d7.jpg'
         alt='image blog' 
         width={400}
         height={250}
         className={styles.img}
        />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>ナツコミ2021開催中！</h1>
          <p className={styles.description}>対象商品購入でコースタープレゼント‼️】 8月よりナツコミ参加書店にて #マッシュル のコースター配布を開始します！ 
          <br></br>対象商品を購入してぜひゲットしてくださいね✨ 
          <br></br>※配布条件・時期は書店により異なります。</p>
        </div>
      </Link>
    </div>
  )
}

export default Blog