import styles from "./Card.module.css"

function Card({title, description}){
    return(
        <div className={styles.card}>
            <h2 className={styles.title}> {title} </h2>
            <p className={styles.description}> {description} </p>
            <button className={styles.button}>Ver más</button>
        </div>
    );
}

export default Card