import React from "react"
import NavBar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
          <header className="sticky top-0 z-10">
          <NavBar/>
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