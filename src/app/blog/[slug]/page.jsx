import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import {notFound} from 'next/navigation'

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
   cache:'no-store'
  })
  if (!res.ok) {
    return notFound()
  }
 
  return res.json()
}


const Post = async ({params}) => {
  const data = await getData(params.slug);
  return (
    <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.info}>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.desc}>
              {
                data.body
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
              <span className={styles.username}>BeliaAU..</span>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <Image
              src='https://i.pinimg.com/564x/93/9f/85/939f85ff1a4e06c7bc16e54d0825c2ba.jpg'
              fill={true}
              className={styles.img}
            />
          </div>
        </div>
        <div className={styles.content}>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
           Possimus est incidunt atque ex id accusamus rerum animi doloremque unde impedit harum necessitatibus quo,
            iste non commodi dolor sunt aliquam fuga dolorum qui ea ipsam, quisquam sapiente? Veritatis quae perspiciatis, quam illum,
             nihil alias quaerat ratione officiis repellat perferendis saepe et sed aspernatur,
           in accusamus corporis tempora!</p> 
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
           Possimus est incidunt atque ex id accusamus rerum animi doloremque unde impedit harum necessitatibus quo,
            iste non commodi dolor sunt aliquam fuga dolorum qui ea ipsam, quisquam sapiente? Veritatis quae perspiciatis, quam illum,
             nihil alias quaerat ratione officiis repellat perferendis saepe et sed aspernatur,
           in accusamus corporis tempora! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur, 
           adipisicing elit. Temporibus architecto minus exercitationem eos, quos laborum nostrum dolor quibusdam dolores omnis quae nemo neque unde illum! 
           Necessitatibus impedit corrupti,
            doloremque amet vitae sunt, quas iure corporis dignissimos porro quidem, tempore consectetur!</p> 
        </div>
    </div>
  )
}

export default Post