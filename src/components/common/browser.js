import styles from "./browser.module.css"

const Browser=(props)=>{
    const content = props.content;
    return(
        <div className={styles.frame} >
            <div className={styles.urlBar}>
                <div className={[styles.red,styles.circles].join(' ')}></div>
                <div className={[styles.orange,styles.circles].join(' ')}></div>
                <div className={[styles.green,styles.circles].join(' ')}></div>
            </div>
            <div className={styles.content}>
                <h1>
                    {content}
                </h1>
            </div>
        </div>
    )

}


export default Browser;

