import { AiTwotonePlayCircle } from 'react-icons/ai';
import styles from './Presentation.module.css'
import { ButtonA } from './elements/ButtonA'
import { useState, useEffect } from 'react'

export function Presentation(){

    const [text, setText] = useState('');
    const toRotate = ['Vinicius Cirilo!', 'Desenvolvedor Front End'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 150;
    const [delta,setDelta] = useState(1000);

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)  // ticker é relógio em inglês
        return()=> {clearInterval(ticker)}
    }, [text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1);

        setText(updatedText);

    if(!isDeleting && updatedText === fullText){

        setIsDeleting(true);
        setDelta(period);
    } else if ( isDeleting && updatedText === ''){
        setIsDeleting(false);
        setDelta(period);
        setLoop(loop+1);
    }
    }
    return (
        <div className={styles.presentation} id="Presentation">
            <h4><strong>Bem-vindo ao meu portifólio</strong></h4>
            <h1>Olá, eu sou   {text}</h1>
            <p>Focado em realizar a minha transição de carreira, busquei meu caminho naquilo que mais me agrada <br/> e aqui estou eu na área de tecnologia, especificadamente como um desenvolvedor Front End. <br/> Tenho o compromisso em resolver problemas complexos e trazer resultados e
            estou sempre <br/>em busca de novos desafios para superar.</p>
            <ButtonA link='https://github.com/Vinicius46'  text='Conecte-se comigo! '/>
        </div>
    )
}
