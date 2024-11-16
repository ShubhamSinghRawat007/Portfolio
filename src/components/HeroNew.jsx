import { motion } from 'framer-motion'
import { styles } from '../styles'
const HeroSec = () => {

    const image =
        'https://res.cloudinary.com/ddcg0rzlo/image/upload/v1650696868/new-nft-hero-section-image_gcqla0.png'
    return (
        <div className="h-screen bg-black  relative overflow-hidden w-full flex items-center justify-center">
            <div className="grid lg:grid-cols-2 items-center overflow-hidden">
                <div className="px-3 sm:px-4 max-w-3xl relative z-30 flex flex-col items-center text-center">
                    <div>
                        <h1 className={`${styles.heroHeadText} text-white`}>
                            Hii, I'm <span className='text-[#915eff]'>Shubham</span>
                        </h1>
                        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                            I develop user friendly,<br className='sm:block hidden' /> Responsive web applications.
                        </p>
                    </div>
                </div>

                <div className="absolute top-0 right-0  overflow-hidden object-contain">
                    <div className="bg-black/40 sm:bg-black/0 w-full h-full absolute z-10"></div>
                    <div className="bg-gradient-to-r from-black to-[#fff0] w-[100px] h-full absolute -left-10 z-10"></div>
                    <img
                        src={image}
                        alt="Upload"
                        height="600"
                        width="600"
                        className="relative opacity-80 object-cover w-full h-screen " />
                    <div className="bg-gradient-to-t from-black to-[#00000000] w-full h-[300px] md:h-[500px] absolute bottom-0"></div>
                    <div className="bg-gradient-to-b from-black to-[#00000000] w-full h-[150px] absolute top-0"></div>
                </div>
            </div>
            <div className='absolute z-30 xs:bottom-5 bottom-10 w-full flex justify-center items-center'>
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
