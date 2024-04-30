import styles from './Card.module.css';
import { ButtonB } from './elements/ButtonB';
import { useState } from 'react';

export function Card({img, title, tech, description,repo, site }){
    const [info, setInfo] = useState(false)

    function infoOn(){
        setInfo(true)
    }

    function infoOff(){
        setInfo(false)
    }

    return(
        <div onMouseLeave={infoOff} className={styles.card}>
            <a onMouseEnter={infoOn} href={site}>

                <img src={img} alt='ERROR'/>
            </a>
            {info === true && (
                <section>
                <h3>{title}</h3>
                <p><strong>Tecnologia:</strong> {tech} </p>
                <p>{description}</p>
                <ButtonB text='Acesse meu repositório' link={repo}/>
            </section>

            )}
            
        </div>
    )
}