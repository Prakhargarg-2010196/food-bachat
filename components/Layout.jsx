import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <>
  
      <main className="mx-auto">
        {children}
      </main>
    </>

  )
}

export default Layout