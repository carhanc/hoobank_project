import styles from './style'
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, Blank } from "./components";
import Aos from 'aos'
import 'aos/dist/aos.css'

const App = () => (
    <div className='bg-primary w-full overflow-hidden'>
      <div className='bg-hero-pattern'>
        <div className={`${styles.flexCenter} pb-[85px]`}>
          <div className={`${styles.navWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>

    </div>
  )

export default App