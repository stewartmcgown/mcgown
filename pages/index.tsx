import { style } from "typestyle";
import { card } from "../styles";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.me}>
          <img src="/me.jpg" />
          <h1 className={styles.title}>Stewart McGown</h1>
        </div>
        <h2 className={styles.subtitle}>
          🚀 is making zero-emissions delivery possible at{" "}
          <a href="https://ecoeats.uk" target="_blank">
            ecoeats
          </a>
          .
        </h2>

        <div className={styles.grid}>
          <a
            href="https://github.com/stewartmcgown"
            target="_blank"
            className={card}
          >
            <h3>Github</h3>
          </a>
        </div>
      </main>
    </div>
  );
}

const styles = {
  container: style({
    maxWidth: "1200px",
    margin: "0 auto",
  }),
  me: style({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: 8,
    textAlign: "center",
    $nest: {
      img: {
        minWidth: "256px",
        maxWidth: "256px",
        borderRadius: "128px",
        marginRight: 16,
      },
    },
  }),

  main: style({
    padding: 16,
  }),
  title: style({
    fontSize: "6em",
    textTransform: "uppercase",
    lineHeight: "1em",
    margin: 8,
  }),
  subtitle: style({
    fontSize: "2em",
    padding: 8,
    textAlign: "center",
  }),
  grid: style({
    display: "flex",
    justifyContent: "center",
  }),
};
