import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import renderSection1 from "./section1.js";

import styles from "./index.module.scss";

function Preview(props) {
  return (
    <main className={cn(styles.main, props.className, "preview")}>
      <video autoPlay muted loop className={styles.backgroundVideo}>
        <source src="/assets/background.mp4" preload="auto" type="video/mp4" />
      </video>
      <div className={styles.black_container} />
      {renderSection1(props)}
    </main>
  );
}

Preview.propTypes = {
  className: PropTypes.string,
};

export default Preview;
