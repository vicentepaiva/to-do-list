
import styles from './Header.module.css';
import  toDoLogo  from '../asstes/toDoLogo.png';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={toDoLogo} alt="logoApp" />
        </header>
    );
}