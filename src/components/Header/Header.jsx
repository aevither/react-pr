import s from "./Header.module.css"
import logo from "../../assets/logo.png"

export function Header() {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.headerInner}>
          <a href="#" className={s.logo}>
            <img src={logo} alt="Импульс" />
          </a>
          <nav className={s.nav}>
            <a href="#">Главная</a>
            <a href="#catalog">Каталог</a>
            <a href="#product">Корзина</a>
          </nav>
        </div>
      </div>
    </header>
  )
}