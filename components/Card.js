import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Card.module.css'

export default function Card({ pokemon }) {
  return (
    <div className={styles.card}>
    <Image
      src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
      height="120"
      width="120"
      alt={pokemon.name}
    />
      <p className={styles.id}>{pokemon.id}</p>
      <h3>{pokemon.title}</h3>
      <Link href={`/pokemon/${pokemon.id}`}>
        <a className={styles.btn}>Details</a>
      </Link>
    </div>
  );
}
