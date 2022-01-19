import Image from 'next/image'

import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.about}>
      <h1>About this project</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur voluptatem veritatis animi ducimus saepe voluptas recusandae unde dicta fugiat nam ad quod voluptates dolor, placeat qui labore nesciunt officia. Accusamus?</p>
    <Image
      src='/images/charizard.png'
      height="300px"
      width="300px"
      alt='charizard'
    />
    </div>
  );
}
