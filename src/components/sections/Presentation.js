import styles from './Presentation.module.css'
import { ButtonA } from './elements/ButtonA'
import { ButtonB } from './elements/ButtonB'
export function Presentation(){
    return (
        <div className={styles.presentation} id="Presentation">
            <h4><strong>Bem-vindo ao meu portifólio</strong></h4>
            <h1>Olá, eu sou o Vinicius Cirilo!</h1>
            <p>Uma paresentação sobre mim!</p>
            <ButtonA link='https://github.com/Vinicius46'  text='Conecte-se comigo! '/>
        </div>
    )
}
