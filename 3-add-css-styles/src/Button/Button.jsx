import styles from './Button.module.css';
// Modules way of styling
function Button() {
    return (
        <button className={styles.button}>Click me</button>
    );
}
export default Button;