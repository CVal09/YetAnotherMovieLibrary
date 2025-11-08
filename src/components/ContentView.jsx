import Card from '../components/Card'
import styles from '../styles/components/ContentView.module.css'
import { Link } from 'react-router-dom'


export default function ContentView({ dataSet, sectionTitle, contentType, functionBtn, functionBtnText }) {

    const data = dataSet

    

    return (
        <section className={styles.mainContainer}>
            <div className={styles.textStyle}>
                <h2><span> | </span>{sectionTitle}</h2>
            </div>
            <div className={styles.gridStyle}>
                {data.filter(item => item.type === contentType).slice(0,6).map(item => <Link to={`/content/${item.type}/${item.id}`} key={item.id}><Card cardImage={item.poster} cardTitle={item.title}/></Link>)}
            </div>
        </section>
    )
}