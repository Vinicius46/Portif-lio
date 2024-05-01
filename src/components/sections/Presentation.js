import { AiTwotonePlayCircle } from 'react-icons/ai';
import styles from './Presentation.module.css'
import { ButtonA } from './elements/ButtonA'
import { useState, useEffect } from 'react'

export function Presentation() {

    const [text, setText] = useState('');
    const toRotate = ['Vinicius Cirilo!', 'Desenvolvedor Front End'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 150;
    const [delta, setDelta] = useState(1000);

    useEffect(() => {
        let ticker = setInterval(() => {
            toType()
        }, delta)  // ticker é relógio em inglês
        return () => { clearInterval(ticker) }
    }, [text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {

            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop + 1);
        }
    }
    return (
        <div className={styles.presentation} id="Presentation">
            <h4><strong>Bem-vindo ao meu portifólio</strong></h4>
            <h1>Olá, eu sou   {text}</h1>
            <p>Sou um desenvolvedor front-end apaixonado por criar experiências digitais envolventes e <br/>interativas. Tenho experiência em construir interfaces de usuário eficientes e elegantes,<br/> garantindo uma navegação intuitiva e acessibilidade para todos os usuários.<br/>

            Minhas habilidades incluem conhecimento aprofundado em HTML, CSS e JavaScript, além de <br/>framework popular como React. Estou sempre em busca de novas tecnologias e <br/> endências para aprimorar minhas habilidades e oferecer soluções inovadoras aos meus clientes.</p>
            <ButtonA link='https://github.com/Vinicius46' text='Conecte-se comigo! ' />
        </div>
    )
}
