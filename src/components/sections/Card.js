import styles from './Card.module.css';
import { ButtonB } from './elements/ButtonB';


export function Card({img, title, tech, description,repo, site }){
    return(
        <div className={styles.card}>
            <a href={site}>

                <img src={img} alt='ERROR'/>
            </a>
            <section>
                <h3>{title}</h3>
                <p><strong>Tecnologia:</strong> {tech} </p>
                <p>{description}</p>
                <ButtonB text='Acesse meu repositório' link={repo}/>
            </section>
        </div>
    )
}