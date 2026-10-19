import s from "./Banner.module.css"
import bannerImg from "../../assets/banner.png"

export function Banner() {
  return (
    <section className={s.banner}>
      <div className="container">
        <div className={s.bannerInner}>
          <div className={s.bannerText}>
            <h1>
              Энергия инноваций — <br />
              <span>у вас в руках!</span>
            </h1>
            <a href="/catalog" className={s.btn}>Каталог</a>
          </div>
          <div className={s.bannerImage}>
            <img src={bannerImg} alt="Техника" />
          </div>
        </div>
      </div>
    </section>
  )
}