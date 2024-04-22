import styles from './ButtonB.module.css'

export function ButtonB({text,link}){
    return (
        <div>
            <a href={link} target='_blank'>
            <button className={styles.btn}>{text}</button>
            </a>
        </div>
    )
}