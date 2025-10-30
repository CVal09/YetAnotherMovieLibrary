import Card from '../components/Card'
import styles from '../styles/ContentView.module.css'


export default function ContentView({ dataSet, sectionTitle }) {

    const data = dataSet

    return (
        <section className={styles.mainContainer}>
            <div className={styles.textStyle}>
                <h2><span>{sectionTitle}</span></h2>
            </div>
            <div className={styles.gridStyle}>
                {data.slice(0,6).map(item => 
                    <Card key={item.id} cardImage={item.poster} cardTitle={item.title}/>
                )}
            </div>
        </section>
    )
}