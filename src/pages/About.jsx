import { assets } from "../assets/assets"
import Title from "../components/Title"
import NewsletterBox from '../components/NewsLetterBox'

function About(){
    return(
        <div>
            <div className="text-2xl text-center pt-8 border-t">
                <Title text1={'ABOUT'} text2={'US'}/>
            </div>

            <div className="my-10 flex fkex-col md:flex-row gap-16">
                <img className="w-full md:max-w-112.5" src={assets.about_img} alt="" />
                <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
                    <p>forever Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, asperiores.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nesciunt itaque culpa odit harum distinctio?</p>
                    <b className="text-gray-800">Our mission at Forever Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut optio fugit possimus vitae debitis laborum!</b>
                </div>
            </div>
            <div className="text-4xl py-4">
                <Title text1={'WHY'} text2={'CHOOSE US'} />
            </div>

            <div className="flex flex-col md:flex-row text-sm mb-20">
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Quality Assurance:</b>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus et vitae iusto, totam veritatis dolorem.</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Quality Assurance:</b>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus et vitae iusto, totam veritatis dolorem.</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Exceptional Customer Service:</b>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus et vitae iusto, totam veritatis dolorem.</p>
                </div>
            </div>
            <NewsletterBox />

        </div>
    )
}
export default About