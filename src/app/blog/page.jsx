import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'


async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
   cache:'no-store'
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Blog =  async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {
        data.map(item=>(
        <Link href={`/blog/${item.id}`} className={styles.container} key={item.id}>
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
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.description}>{item.body}</p>
          </div>
        </Link>
        ))
      }
    </div>
  )
}

export default Blog