import useUser from '../hooks/useUser'
import styles from '../styles/Home.module.css'

const Header = () => {
  const { user, isLoading, isError } = useUser(1);

  if (isError) return <div>An error has occurred.</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.header}>
      <p className={styles.name}>{user.name}</p>
    </div>
  )
}

export default Header;