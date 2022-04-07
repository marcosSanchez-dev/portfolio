import './layout.scss'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">
          <h1></h1>
        </span>

        <Outlet />
        <span className="tags bottom-tags"></span>
        <span></span>
        <br />
        <span className="bottom-tag-html"></span>
      </div>
    </div>
  )
}

export default Layout
