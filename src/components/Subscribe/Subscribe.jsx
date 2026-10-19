import s from "./Subscribe.module.css"
import podpiskaImg from "../../assets/podpiska.png"

export function Subscribe() {
  return (
    <section className={s.subscribePink}>
      <div className="container">
        <div className={s.subscribePurple}>
          <div className={s.subscribeText}>
            <h2>Подписка</h2>
            <p>
              Подпишитесь на рассылку и получайте эксклюзивные скидки
              на новинки и лучшие предложения недели
            </p>
            <form className={s.subscribeForm}>
              <input type="email" placeholder="Введите почту" />
              <button type="submit">Отправить</button>
            </form>
          </div>
          <div className={s.subscribeImage}>
            <img src={podpiskaImg} alt="Подписка" />
          </div>
        </div>
      </div>
    </section>
  )
}