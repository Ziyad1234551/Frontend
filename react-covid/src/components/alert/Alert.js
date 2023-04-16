import React from 'react'
import styles from "./Alert.module.css";
const Alert = (props) => {
    const children = {props};
  return (
    <div className={styles.Alert}>{children}</div>
  )
}

export default Alert;