import './Header.scss'
import logo from '../../assets/logo-monaterio.png'

function Header () {
  return (
        <header className="header">
           <img src={logo} className="header__logo" alt="" />
        </header>
  )
}

export default Header
