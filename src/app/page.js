'use client'
 
import { useRouter } from 'next/navigation'
import Header from "@/components/header";
import '../styles/global.css';

export default function Home(){
    const router = useRouter();
    const handleClick = () => {
        router.push('/login');
      };

    return (
        <div>
            <section className="body w-full background-grey">
                <div className="w-full  bg-overlay bg-center bg-cover bg-center">
                    <div className="flex justify-center pt-20 px-5 lg:px-0">
                        <img src="/images/home-fsoceity-banner.png"></img>
                    </div>
                    <div className="flex justify-center pb-20 w-full">
                        <div className="w-full flex flex-col items-center justiy-center">
                            <div className="w-full flex justify-end">
                                <div style={{ width: '445px', height: '120px' }} className="bg-text-1 bg-contain bg-no-repeat flex justify-start">
                                    <img style={{ top: '60px' }} className='relative hidden lg:block' src="/images/text-line-1.png"></img>
                                </div>
                            </div>
                            <h2 className="uppercase font-ailerons font-medium text-center lg:text-3xl text-xl">
                                for-those-who-dare
                            </h2>
                            <p style={{ letterSpacing: '-5px' }} className="w-1200 px-2 uppercase font-ailerons text-red font-medium text-center lg:text-3xl text-xl">
                                Introducing <span className="text-black">f-soceity</span>, an innovative anonymous clothing brand that redefines contemporary
                                fashion. Focused on sustainable materials and minimalist designs, Epoch Attire combines
                                timeless elegance with modern functionality. Each piece is meticulously crafted to ensure
                                durability and comfort, making it perfect for the discerning individual who values quality
                                over brand recognition. The brand's commitment to ethical production practices and environmental
                                responsibility sets it apart in the fashion industry, appealing to those who seek both style and
                                substance. Whether you're dressing for a casual outing or a formal event, Epoch Attire offers versatile
                                options that seamlessly integrate into any wardrobe.
                            </p>
                            <div className="w-full flex justify-start">
                                <div style={{ width: '445px', height: '120px' }} className="bg-text-2 bg-contain bg-no-repeat flex justify-end mt-5">
                                    <img style={{ bottom: '66px', right: '25px' }} className='relative hidden lg:block' src="/images/text-line-2.png"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center lg:pt-20 pt-0 w-full  mb-4">
                        <img style={{ width: '1900px' }} src="/images/make-it-banner.png"></img>
                    </div>
                </div>
                <div className="flex justify-center w-full bg-overlay-mid bg-cover bg-center">
                    <div className="w-full flex items-center justiy-start w-800">
                        <img className='z-10 fs-door' src="/images/fs-home-info.png"></img>
                        <img className='relative fs-yours' src="/images/yours.png"></img>
                        <p style={{ letterSpacing: '-5px' }} className=" mid-text relative px-5 uppercase font-ailerons text-black font-medium text-center lg:text-3xl text-xl">
                            Hoppon our new collection before it goes ghosted <span className="text-red">exclusive</span> merch launch is live now
                        </p>

                    </div>
                </div>
                <div className="flex justify-center w-full mt-5">
                    <img style={{ width: '1900px' }} src="/images/before-banner.png"></img>
                </div>

                <div className="w-full flex justify-center items-center  bg-fs-jungle bg-cover jungle-parent bg-center">
                    <button onClick={handleClick} className="rounded-full bg-red-600 flex justify-center items-center relative go-circle">
                        <span className="uppercase text-white font-medium text-center text-xl lg:text-3xl">GO</span>
                    </button>
                </div>
            </section>
        </div>

    )
}