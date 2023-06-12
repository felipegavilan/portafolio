import "@/styles/globals.css";
import Nav from "./components/nav/nav";

export default function App({ Component, pageProps }) {
  return (
    <>
      <main>
      <Nav/>
      <Component {...pageProps} />
      </main>
    </>
  );
}
