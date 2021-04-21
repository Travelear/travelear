import NavBar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
    return (
      <div>
        <nav className><NavBar/></nav>
        <main>{children}</main>
        <Footer/>
        </div>
    )
}