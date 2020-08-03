import React from "react";
import { style } from "typestyle";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>McGown</span>
    </footer>
  );
}

const styles = {
  footer: style({}),
};
