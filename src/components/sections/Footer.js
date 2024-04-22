import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css';

function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/vinicius.silva46/' target='blanc'><FaInstagram size={30} /></a></li>
                <li><a href='https://github.com/Vinicius46'><FaGithub size={30} /></a></li>
                <li><a href='https://www.linkedin.com/in/vinicius-cirilo-1b12a5191/'><FaLinkedin size={30} /></a></li>
            </ul>
            <p>viniciusalberico@outlook.com</p>
            <p>Vinicius Cirilo © 2024</p>
        </div>
    )
}
export default Footer