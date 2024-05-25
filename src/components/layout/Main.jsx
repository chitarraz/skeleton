// main layout
import React from "react";
// css
import Weather from "../weather/Weather";
import styles from '../../assets/css/layout/main.module.css';

export default function Main() {
  // componentDidMount
  React.useEffect(() => {
    // componentDidUnmount
    return () => {
    }
  },[]);

  return (
    <React.Fragment>
      <Weather />
    </React.Fragment>
  );
}
