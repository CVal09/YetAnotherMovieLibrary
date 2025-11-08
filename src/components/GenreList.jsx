import styles from '../styles/components/GenreList.module.css'


export default function GenreList({dataSet}) {

    return (
        <section className={styles.mainContainer}>
            <h2>Genre List</h2>
            <div className={styles.itemContainer}>
                {dataSet.map(item => 
                    <div className={styles.itemStyle} key={item.id}><p>{item.name}</p></div>
                )}
            </div>
        </section>
    )
}