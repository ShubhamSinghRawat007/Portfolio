import { motion } from 'framer-motion'
import { styles } from '../styles'
const HeroSec = () => {

    return (
        <div className="h-screen bg-primary  relative overflow-hidden w-full flex items-center justify-center">
            <div className="flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                {/* Text Section */}
                <div className="flex flex-col justify-center p-6 text-center lg:text-left mt-15 sm:mt-0">
                    <div>
                        <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl mb-2">
                            Hey, I'm <span className="text-[#FC4370]">Shubham</span>
                        </h1>
                        <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl my-4">
                            a <span className="text-[#FC4370]">self-taught</span> designer
                        </h1>
                        <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl mb-6">
                            & Web developer.
                        </h1>
                    </div>
                    {/* Button Section */}
                    <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-center lg:justify-start sm:space-y-0 sm:space-x-4">
                        <a
                            href="#contact"
                            className="px-6 py-3 text-lg font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-all"
                        >
                            Hire Me
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0">
                    <img
                        src="/hero_illustration.svg"
                        alt="Hero Illustration"
                        className="object-contain w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl"
                    />
                </div>
            </div>

            <div className='absolute z-30 xs:bottom-5 bottom-14  w-full flex justify-center items-center'>
                <a href='#about'>
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className='w-3 h-3 rounded-full bg-secondary mb-1'
                        />
                    </div>
                </a>
            </div>

        </div>
    )
}
export default HeroSec;
