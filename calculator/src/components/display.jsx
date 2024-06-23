import styles from "./display.module.css";

function Display({displayvalue}) {
  return (
    <div>
  <input className={styles.display} type="text" value={displayvalue} readOnly />
  </div>
  )
}

export default Display;