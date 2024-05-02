import { Outlet } from 'react-router-dom'

import Footer from './components/Footer'

import classes from './App.module.css'

function App() {

  return (
   <div className={classes.app}>
      <h1>GitHub Finder</h1>
      <Outlet />
      <Footer/>
   </div>
  )
}

export default App
