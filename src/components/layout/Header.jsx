import React from "react";
import { Link } from "react-router-dom";

import styles from "../../assets/css/layout/header.module.scss";

const Header = () => {


  return (
    <div className={styles.header}>
      <nav className="flex items-center justify-between w-full">
        <Link to={"/"}>
          <img className={styles.logo} src="https://www.kbe.com.sg/wp-content/themes/kbe/images/KBE-LOGO-2.png"  alt="kbe-logo" />
        </Link>
        <div>
          <Link to={"/home"} className={styles.menu}>
            Home
          </Link>
          <Link to={"/user"} className={styles.menu}>
            User
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;