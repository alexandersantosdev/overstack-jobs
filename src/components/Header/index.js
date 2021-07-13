import styles from '../../../styles/components/Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link href="/"
                    passHref
                >
                    <a>
                        <Image

                            src="/image/logo.png"
                            width={100}
                            height={100}
                            alt="Logo overjob"
                        />
                    </a>
                </Link>
                <Link
                    href="/drecription/1"
                    passHref
                >
                    <a>
                        <button className={styles.button}>Cadastrar Vaga</button>
                    </a>
                </Link>
            </div>
            <div className={styles.search}>
                <div className={styles.searchFields}>
                    <input type="text" placeholder="Digite um cargo" />
                    <input type="text" placeholder="Digite uma cidade" />
                    <button>
                        <Image
                            src="/image/lupa.png"
                            width={30}
                            height={30}
                            alt="Icone de pesquisa"
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}