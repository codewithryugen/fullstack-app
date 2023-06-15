import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import {notFound} from 'next/navigation'

async function getData(id) {
  const res = await fetch(`${process.env.APP_URL}/api/posts/${id}`,{
   cache:'no-store'
  })
  if (!res.ok) {
    return notFound()
  }
 
  return res.json()
}


export async function generateMetadata ({params}){
  const post = await getData(params.id);
  return {
    title:post.title,
    description:post.desc
  };
}

const Post = async ({params}) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.info}>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.desc}>
              {
                data.desc
              }
            </p>
            <div className={styles.author}>
              <Image 
              src='https://i.pinimg.com/564x/33/f7/f9/33f7f9739a50e708034b987544d2130d.jpg'
              width={40}
              height={40}
              alt='author_img'
              className={styles.avatar}
              />
              <span className={styles.username}>{data.username}</span>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <Image
              src={data.img}
              fill={true}
              className={styles.img}
              alt='image post'
            />
          </div>
        </div>
        <div className={styles.content}>
         {data.content}
        </div>
    </div>
  )
}

export default Post