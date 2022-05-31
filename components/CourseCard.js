import styles from '../styles/Home.module.css';

const CourseCard = ({name}) => {
    return (
    <div className={styles.card}>
        <h3>{name}</h3>
    </div>
    );
}

export default CourseCard;