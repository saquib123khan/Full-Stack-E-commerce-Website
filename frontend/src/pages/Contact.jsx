import { assets } from "../assets/assets"
import NewsLetterBox from "../components/NewsLetterBox"
import Title from "../components/Title"


const Contact = () => {
  return (
    <div>

      <div className="text-center text-2xl pt-20 border-t">
        <Title text1={'CONTACT '} text2={'US'}/>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-[480px]" src={assets.contact_img} alt="" />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">OUR STORE</p>
          <p className="text-gray-500">54709 Willms Station <br />Suite 450, Washington, USA</p>
          <p className="text-gray-500">Tel: (000) 000-0000 <br />Email: forever@gmail.com</p>
          <p className="font-semibold text-xl text-gray-600">Careers at forever</p>
          <p className="text-gray-500">Learn more about our teams and job openings.</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
        </div>
      </div>

      <NewsLetterBox/>
    </div>
  )
}

export default Contact