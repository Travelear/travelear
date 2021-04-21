import React, { useState } from "react"
import NavBar from "./navbar";
import Footer from "./footer";
import Map from "./map"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
          <NavBar/>
          <main className="w-full">
            {children}
          </main>
          <Footer/>
    </div>
  )
}