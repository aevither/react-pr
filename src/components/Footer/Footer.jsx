import s from "./Footer.module.css"
import logo from "../../assets/logo.png"

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footerInner}>
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
    </footer>
  )
}