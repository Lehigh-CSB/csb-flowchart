import styles from '../styles/Home.module.css';

const CourseCard = ({name}) => {
    return (
    <div className={styles.card}>
        <p>{name}</p>
    </div>
    );
}

export default CourseCard;