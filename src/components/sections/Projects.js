import { Card } from "./Card"
import { ButtonB } from "./elements/ButtonB"
import styles from './Projects.module.css'
import btcamp from '../../image/projects/btcamp.svg';
import prevTemp from '../../image/projects/prevTemp.svg';

function Projects(){
    return (
        <div className={styles.projects}id="Projects">
            <h1>Projetos</h1>
            <Card img={btcamp} title="BOOTCAMP DNC" tech="CSS e HTML5" description="Uma página de inscrições." repo="https://github.com/Vinicius46/Bootcamp?tab=readme-ov-file" site="https://bootcamp01.netlify.app/" />

            <Card img={prevTemp} title="DncWeather" tech="CSS, HTML5 e Javascript" description="Neste site podemos saber o tempo e também pesquisar endereços através do consumo de APIs de tempo e CEP." repo="https://github.com/Vinicius46/DesafioAPI_DNC" site="https://previsaodotempoecep.netlify.app/" />
            
            <ButtonB text='Acesse meu repositório' link='https://github.com/Vinicius46?tab=repositories'/>
        </div>
    )
}
export default Projects