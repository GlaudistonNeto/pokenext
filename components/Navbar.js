import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/images/pokeball.png"
          width="30px"
          height="30px"
          alt='Next Pokeloge'
        />
        <h1>Pokenext</h1>
      </div>
      <ul className={styles.link_items}>
        <li>
          <Link href='/'><a>Home</a></Link>
        </li>
        <li>
          <Link href='/about'><a>About</a></Link>
        </li>
      </ul>
    </nav>
  );
}
