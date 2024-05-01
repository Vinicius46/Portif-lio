 import styles from './Navbar.module.css';
 import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
 import Nav from 'react-bootstrap/Nav';

  export function Navbar(){
    return (
        <div className={styles.navbar}>
           <ul>
            <li><Nav.Link href="#Presentation">Apresentação</Nav.Link></li>
            <li><Nav.Link href="#Skills">Habilidades</Nav.Link></li>
            <li><Nav.Link href="#Projects">Projetos</Nav.Link></li>
           </ul>
           <ul>
           <li><a href='https://www.instagram.com/vinicius.silva46/' target='blanc' ><FaInstagram size={30}/></a></li>
            <li><a href='https://github.com/Vinicius46' target='blanc' ><FaGithub size={30}/></a></li>
            <li><a href='https://www.linkedin.com/in/vinicius-cirilo-1b12a5191/' target='_blanc' ><FaLinkedin size={30}/></a></li>
           </ul>
        </div>
    )
}
