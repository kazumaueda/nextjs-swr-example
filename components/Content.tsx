import useUser from '../hooks/useUser'
import styles from '../styles/Home.module.css'

const Content = () => {
  const { user, isLoading, isError } = useUser(1);

  if (isError) return <div>An error has occurred.</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{user.name}</h1>
      <p className={styles.description}>{user.username}</p>
      <p>
        <strong>🙋‍♀️ {user.email}</strong>
      </p>
    </main>
  )
}

export default Content;