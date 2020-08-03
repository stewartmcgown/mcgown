import { style } from "typestyle";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Component {...pageProps} />
    </div>
  );
}

const styles = {
  container: style({
    $nest: {
      ", body": {
        margin: 0,
        background: "rgb(19,19,19)",
        color: "rgb(226,226,266)",
        fontFamily: "League Spartan",
      },
      a: {
        color: "#31b666",
      },
    },
  }),
};
