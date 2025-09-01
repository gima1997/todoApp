import { useState } from "react";
import styles from "./App.module.css";
import Header from "./Components/Header";
import Todo from "./Components/Todo";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className={styles.appBg}>
      <Header search={search} setSearch={setSearch} />
      <div className={styles.mainContent}>
        <Todo search={search} setSearch={setSearch} />
      </div>
    </div>
  );
}

export default App;
