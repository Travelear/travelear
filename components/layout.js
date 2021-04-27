import React from "react"
import NavBar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  const loggedIn = true
  const title = 'Listen to the World'
  return (
    <div className="flex flex-col min-h-screen">
          <header className={loggedIn? "sticky top-0 z-10" : ""}>
            <NavBar loggedIn={loggedIn} title={title}/>
          </header>
          <main className="flex-grow">
            {children}
          </main>
          <footer>
            <Footer/>
          </footer>
    </div>
  )
}