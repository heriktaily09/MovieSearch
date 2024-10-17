import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import styles from "./Root.module.css";
import LoadingSpinner from "../assets/LoadingSpinner.svg";
function Root() {
  const navigation = useNavigation();
  return (
    // <nav>
    //   <Link to="/">Movie Search</Link>
    //   {navigation.state === "loading" ? <h1>Loading ...</h1> : <Outlet />}
    // </nav>
    <div>
      <nav className={`container ${styles.nav}`}>
        <h1>
          <Link to="/">Movie Search</Link>
        </h1>
      </nav>
      {navigation.state === "loading" ? (
        <img src={LoadingSpinner} alt="Loading..." className="loadingSpinner" />
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default Root;
