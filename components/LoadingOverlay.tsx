import {NextPage} from 'next';
import styles from "../styles/loading.module.css"



const LoadingOverlay: NextPage = () => {
    return (<div>
        <div className={styles.lineOfDots}>
        </div>
    </div>)

}

export default LoadingOverlay