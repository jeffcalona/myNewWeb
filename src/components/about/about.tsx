import Image from 'next/image'
import Avatar from './assets/Avatar.webp'
import SquareLink from '../ui/squareLink'
import { AiFillGithub, AiFillLinkedin, AiOutlineBehance, AiOutlineInstagram } from 'react-icons/ai'
import Link from 'next/link'

const About = () => {
    const buttonsLinks = [
        {
            label: 'Download CV',
            href: './JeffersonCv.pdf',
            isCv: true
        },
        {
            label: 'Contact me',
            href: 'Contact',
            isCv: false
        }
    ]

    const socialLinks = [
        {
            icon: <AiFillGithub />,
            href: 'https://github.com/jeffcalona'
        },
        {
            icon: <AiOutlineBehance />,
            href: 'https://www.behance.net/jeffersescalon1'
        },
        {
            icon: <AiFillLinkedin />,
            href: 'https://www.linkedin.com/in/jeffcalona/'
        },
        {
            icon: <AiOutlineInstagram />,
            href: 'https://www.instagram.com/jeffcalona/'
        }
    ]
    return (
        <section id="About" className="h-full md:w-full max-md:-mx-14 flex justify-center items-center relative">
            <Image src={Avatar} alt='Avatar' className='md:opacity-20 opacity-0 h-screen w-auto object-cover z-10' />
            <div className='absolute md:w-[90%] w-[75%] h-full flex flex-col md:justify-center max-md:pt-20 z-20'>
                <h1 className='textYellow md:text-[65px] text-[50px] font-semibold md:leading-[70px] leading-[55px]'>Hi, I&apos;m <span className='md:text-[85px] text-[65px] block'>Jefferson</span></h1>
                <p className='text-white md:w-[50%] md:text-[22px] text-[20px] leading-[25px] mt-2'>I am a full stack developer with experience in web and mobile.<br />
                    I&apos;m passionate about design, art, photography and many other things that you&apos;ll see when you scroll down.<br />
                    Have fun and if you are interested in contacting me don&apos;t hesitate to do it, I will be always ready to answer.
                </p>
                <div className='max-md:h-full flex md:flex-col md:justify-start md:pb-0 flex-col-reverse justify-between pb-14'>
                    <div className='flex md:gap-x-20 gap-x-8 mt-6'>
                        {buttonsLinks.map((buttonLink) => (
                            <SquareLink key={buttonLink.label} href={buttonLink.href} label={buttonLink.label} isCv={buttonLink.isCv} />
                        ))}
                    </div>
                    <ul className='flex md:mt-6 mt-4 gap-x-[15px]'>
                        {socialLinks.map((socialLink) => (
                            <li key={socialLink.href}>
                                <Link href={socialLink.href} target='_black' className='text-white hover:text-[#FFB800] text-[35px]'>{socialLink.icon}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default About