import styles from './ButtonA.module.css'

export function ButtonA({text, link}){
    return(
        <div>
            <a href={link} target='_blanc'>
            <button className={styles.btn}>{text}</button>
            </a>
        </div>
    )
}