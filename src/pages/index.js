import styles from '../../styles/Home.module.css';

import Filter from '../components/Filter';
import Header from '../components/Header';
import Cards from '../components/Cards';

export default function Home() {
  return (

    <div className={styles.container}>
      <Header />
      <Filter />
      <Cards />
    </div>

  )
}
