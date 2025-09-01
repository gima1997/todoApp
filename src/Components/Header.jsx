import styles from "./Header.module.css";
import logo from "../assets/logo.svg";
import SearchBar from "./SearchBar";

export default function Header({ search, setSearch }) {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrap}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <span className={styles.title}>Todo App</span>
      </div>
      <div className={styles.headerSearch}>
        <SearchBar search={search} setSearch={setSearch} />
      </div>
    </header>
  );
}
