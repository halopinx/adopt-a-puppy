import classes from './Card.module.scss'

const Card = ({ children, className }) => {
    const styles = className ? `${classes.card} ${className}` : classes.card
    return (
        <div className={styles}>
            {children}
        </div>
    );
}
 
export default Card;