import React from "react";
import { Form } from "react-router-dom";
import styles from "./SearchForm.module.css";
function SearchForm({ searchTerm }) {
  return (
    <Form method="GET" className={`container ${styles.form}`}>
      <input
        type="text"
        name="search"
        id="search"
        defaultValue={searchTerm}
        placeholder="Enter letters, digits, and spaces only"
        required
        pattern="^[A-Za-z0-9 ]+$"
      />
      <button type="submit">Search</button>
    </Form>
  );
}

export default SearchForm;
