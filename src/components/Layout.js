import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ path, children }) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </div>
  )
}
