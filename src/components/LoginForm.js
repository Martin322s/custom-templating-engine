import styles from "./LoginForm.module.css";

const LoginForm = () => {
    return (
        <form className={styles.form}>
            <label className={styles.label}>Username</label>
            <input className={styles.input} type="text"/>

            <label className={styles.label}>Password:</label>
            <input className={styles.input} type="password"/>

            <button className={styles.submit}>Login</button>
        </form>
    );
}

export default LoginForm;