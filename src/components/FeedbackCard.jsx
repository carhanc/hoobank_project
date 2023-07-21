import { quotes } from "../assets"
import Aos from 'aos'
import 'aos/dist/aos.css'

const FeedbackCard = ({content, name, title, img}) => (
    <div data-aos="fade-up" className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 hover:bg-gradient-to-r from-gray-600 to hover:bg-gray-900 hover:transition ease-linear duration-500'>

      <img src={quotes} alt="quotes" className="w-[42px] h-[27px] object-contain"/>

      <p className="font-poppins font-normal leading-[32px] text-white my-10 text-[18px]">
        {content}
      </p>

      <div className="flex flex-row">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full"/>

        <div className="flex flex-col ml-4">

          <h4 className="font-poppins font-semibold leading-[32px] text-white text-[20px]">
            {name}
          </h4>

          <p className="font-poppins font-normal leading-[24px] text-dimWhite text-[16px]">
            {title}
          </p>

        </div>
      </div>
    </div>
  )

export default FeedbackCard