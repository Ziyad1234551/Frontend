import React from 'react'
import styles from "./AddMovieForm.module.css";

function AddMovieForm ()  {
  return (
    <div className={styles.movie}>
    <div className={styles.left}>

    </div>
    <div className={styles.right}>
        <h1>Add Movie</h1>
        <form action="/">
  <label for="Year">Year</label><br />
  <input type="text" id="username" name="Year" value="" className={styles.Input}/><br />
  <label for="password">Title</label><br />
  <input type="text" id="title" name="title" value=""  className={styles.Input}/><br /><br />
  <input type="submit" value="Submit" className={styles.submit} />
</form>
    </div>
    </div>
  );
}
export default AddMovieForm;