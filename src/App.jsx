import { Header } from "./components/Header/Header"
import { Banner } from "./components/Banner/Banner"
import { Subscribe } from "./components/Subscribe/Subscribe"
import { Footer } from "./components/Footer/Footer"

export function App() {
  return (
    <div className="layout">
      <Header />

      <main>
        <Banner />
        <Subscribe />
      </main>

      <Footer />
    </div>
  )
}
export default App