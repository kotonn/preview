import React from "react";
import cn from "classnames";

import section1Styles from "./section1.module.scss";

function renderSection1(props) {
  return (
    <section className={section1Styles.section1}>
      {/* <div className={section1Styles.rect2} /> */}

      <div className={section1Styles.content_box1}>
        <div className={section1Styles.flex_col}>
          <h1 className={section1Styles.hero_title_box}>
            <span className={section1Styles.hero_title}>
              <span className={section1Styles.hero_title_span0}>SAKI</span>
              <span className={section1Styles.hero_title_span1}>YOMI</span>
            </span>
          </h1>
          <h1 className={section1Styles.title}>新たな挑戦に、成功体験を。</h1>
          <h3 className={section1Styles.subtitle}>
            知らない内に抱えてしまっている
            <br />
            Instagramアカウントの課題を見つけに行きましょう。
          </h3>

          <div className={section1Styles.content_box}>
            <div className={section1Styles.flex_col1}>
              <div className={section1Styles.info}>LET’S START</div>
              <h5 className={section1Styles.highlight}>
                して無料で診断を受ける
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* <img className={section1Styles.image} src={""} alt="" /> */}
    </section>
  );
}

export default renderSection1;
