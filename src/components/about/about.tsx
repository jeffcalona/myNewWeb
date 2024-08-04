import Image from 'next/image'
import Avatar from './assets/Avatar.png'
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
            href: 'https://www.behance.net/jeffcalona'
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
        <section id="About" className="h-screen w-full flex justify-center items-center relative">
            <Image src={Avatar} priority={true} alt='Avatar' className='opacity-20 h-screen w-auto object-cover z-10' />
            <div className='absolute w-[90%] h-full flex flex-col justify-center z-20'>
                <h1 className='textYellow text-[65px] font-semibold leading-[70px]'>Hi, I&apos;m <span className='text-[85px] block'>Jefferson</span></h1>
                <p className='text-white w-[50%] text-[20px] leading-[25px]'>I am a full stack developer with experience in web and mobile.<br />
                I&apos;m passionate about design, art, photography and many other things that you&apos;ll see when you scroll down.<br />
                Have fun and if you are interested in contacting me don&apos;t hesitate to do it, I will be always ready to answer.</p>
                <div className='flex gap-x-20 mt-6'>
                    {buttonsLinks.map((buttonLink) => (
                        <SquareLink key={buttonLink.label} href={buttonLink.href} label={buttonLink.label} isCv={buttonLink.isCv} />
                    ))}
                </div>
                <ul className='flex mt-6 gap-x-[15px]'>
                    {socialLinks.map((socialLink) => (
                        <li key={socialLink.href}>
                            <Link href={socialLink.href} target='_black' className='text-white text-[35px]'>{socialLink.icon}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
export default About