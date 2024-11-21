'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"

import { FaGitAlt, FaReact } from "react-icons/fa"
import { SiRedux, SiTailwindcss } from "react-icons/si"
import UiUxIcon from "./assets/UiUxIcon.svg"
import { IllustratorIcon, AwsIcon, JavascriptIcon, TypescriptIcon, NodeIcon, NextjsIcon, PhotoshopIcon } from '@/components/ui/Icons.js'

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [setIsMobile])
    return isMobile
}


const Skills = () => {
    const skillsIcons = [
        {
            isIcon: true,
            icon: <FaReact className="!w-11 !h-11 ml-[9px] mr-[9px] mt-1 mb-[13px]" />,
            text: 'Js',
            name: 'React Js',
            bgColor: 'bg-[#86D4E9]',
            iconColor: 'text-[#FFFFFF]',
            initialPositionX: 40,
            initialPositionY: -40,
            positionX: 480,
            positionY: 350,
            phonePositionX: 70,
            phonePositionY: 300
        },
        {
            isIcon: true,
            icon: <JavascriptIcon />,
            text: '',
            name: 'Javascript',
            bgColor: 'bg-[#F7DF1E]',
            iconColor: 'text-[#000000]',
            initialPositionX: 20,
            initialPositionY: 40,
            positionX: 200,
            positionY: -300,
            phonePositionX: 65,
            phonePositionY: -290
        },
        {
            isIcon: true,
            icon: <NodeIcon />,
            text: '',
            name: 'NodeJs',
            bgColor: 'bg-[#67A65A]',
            iconColor: '',
            initialPositionX: -20,
            initialPositionY: 30,
            positionX: 500,
            positionY: 100,
            phonePositionX: 60,
            phonePositionY: 150
        },
        {
            isIcon: true,
            icon: <FaReact className="!w-11 !h-11 ml-[9px] mr-[9px] mt-1 mb-[13px]" />,
            text: 'Native',
            name: 'React Native',
            bgColor: 'bg-[#86D4E9]',
            iconColor: 'text-[#FFFFFF]',
            initialPositionX: -30,
            initialPositionY: -20,
            positionX: -400,
            positionY: -280,
            phonePositionX: -60,
            phonePositionY: -280
        },
        {
            isIcon: true,
            icon: <AwsIcon />,
            text: '',
            name: 'Aws',
            bgColor: 'bg-[#252F3E]',
            iconColor: 'text-[#FFFFFF]',
            initialPositionX: 70,
            initialPositionY: 0,
            positionX: 0,
            positionY: -300,
            phonePositionX: 0,
            phonePositionY: -250
        },
        {
            isIcon: true,
            icon: <TypescriptIcon />,
            text: '',
            name: 'Typescript',
            bgColor: 'bg-[#007ACC]',
            iconColor: '',
            initialPositionX: -60,
            initialPositionY: 0,
            positionX: -300,
            positionY: 180,
            phonePositionX: -80,
            phonePositionY: 180
        },
        {
            isIcon: false,
            icon: <UiUxIcon />,
            text: '',
            name: 'Ui Ux',
            bgColor: 'bg-[#5A0F56]',
            iconColor: '',
            initialPositionX: -40,
            initialPositionY: -60,
            positionX: -500,
            positionY: -50,
            phonePositionX: -10,
            phonePositionY: -50
        },
        {
            isIcon: true,
            icon: <IllustratorIcon />,
            text: '',
            name: 'Illustrator',
            bgColor: 'bg-[#330000]',
            iconColor: '',
            initialPositionX: -40,
            initialPositionY: 50,
            positionX: -100,
            positionY: 350,
            phonePositionX: -70,
            phonePositionY: 350
        },
        {
            isIcon: true,
            icon: <PhotoshopIcon />,
            text: '',
            name: 'Photoshop',
            bgColor: 'bg-[#001E36]',
            iconColor: '',
            initialPositionX: 60,
            initialPositionY: 60,
            positionX: 100,
            positionY: 200,
            phonePositionX: 90,
            phonePositionY: 200
        },
        {
            isIcon: true,
            icon: <NextjsIcon />,
            text: '',
            name: 'NextJs',
            bgColor: 'bg-[#000000]',
            iconColor: '',
            initialPositionX: 20,
            initialPositionY: 20,
            positionX: -180,
            positionY: -150,
            phonePositionX: -70,
            phonePositionY: -120
        },
        {
            isIcon: true,
            icon: <FaGitAlt />,
            text: '',
            name: 'Git',
            bgColor: 'bg-[#FCB5AA]',
            iconColor: 'text-[#DE4C36]',
            initialPositionX: -20,
            initialPositionY: -20,
            positionX: 500,
            positionY: -200,
            phonePositionX: 70,
            phonePositionY: -160
        },
        {
            isIcon: true,
            icon: <SiRedux />,
            text: '',
            name: 'Redux',
            bgColor: 'bg-[#CDB4F4]',
            iconColor: 'text-[#764ABC]',
            initialPositionX: -20,
            initialPositionY: 20,
            positionX: -450,
            positionY: 350,
            phonePositionX: -60,
            phonePositionY: 220
        },
        {
            isIcon: true,
            icon: <SiTailwindcss />,
            text: '',
            name: 'Tailwind',
            bgColor: 'bg-[#C2EEEF]',
            iconColor: 'text-[#0ED7B5]',
            initialPositionX: 20,
            initialPositionY: -20,
            positionX: 250,
            positionY: 50,
            phonePositionX: 60,
            phonePositionY: 60
        }
    ]

    const isMobile = useIsMobile()

    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end start", "start end"]
    })

    const opacity = useTransform(scrollYProgress, [0.4, 0.6], [1, 0])

    const iconTransition = (duration: number) => ({
        duration,
        repeat: Infinity,
        ease: 'linear',
    })

    const generateCircularMotion = (radius: number, points: number, phase = 0) => {
        const step = (2 * Math.PI) / points;
        return {
            x: Array.from({ length: points + 1 }, (_, i) => radius * Math.cos(i * step + phase)),
            y: Array.from({ length: points + 1 }, (_, i) => radius * Math.sin(i * step + phase)),
        };
    }


    return (
        <motion.div ref={targetRef} id="Skills" className="h-[150vh] relative">
            <motion.div className="sticky z-0 h-[100vh] overflow-hidden top-0 flex justify-center items-center">
                <h2 className="textYellow text-[85px] font-semibold leading-[80px]">Skills</h2>
                <motion.div
                    className="w-full h-full absolute top-0 flex items-center justify-center"
                >
                    {skillsIcons.map((skillIcon, index) => {
                        const radius = Math.random() * 80 + 50; // Radio aleatorio entre 50(para math.ramdon = 0) y 130(para math.ramdon = 1)
                        const points = 48; // Número de puntos en el círculo
                        const phase = Math.random() * 2 * Math.PI; // Fase aleatoria
                        const duration = Math.random() * 8 + 12; // Duración aleatoria entre 7 y 12 segundos

                        const { x, y } = generateCircularMotion(radius, points, phase);

                        return (
                            <motion.div
                                key={index}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ root: targetRef, once: true, amount: 0 }}
                                variants={{
                                    offscreen: {
                                        x: skillIcon.initialPositionX,
                                        y: skillIcon.initialPositionY,
                                    },
                                    onscreen: {
                                        x: isMobile ? skillIcon.phonePositionX : skillIcon.positionX,
                                        y: isMobile ? skillIcon.phonePositionY : skillIcon.positionY,
                                        transition: {
                                            duration: 0.8,
                                            delay: 0.5,
                                            ease: [0, 0.71, 0.2, 1.01],
                                            when: 'beforeChildren'
                                        }
                                    }
                                }}
                                className='absolute'
                            >
                                <motion.div
                                    className={`text-white [&>svg]:h-[62px] [&>svg]:w-[62px] ${skillIcon.bgColor} ${skillIcon.iconColor} p-3 rounded-[15px] transition-all duration-300`}
                                    transition={iconTransition(duration)}
                                    variants={{
                                        onscreen: {
                                            x: x,
                                            y: y,
                                        }
                                    }}
                                >
                                    {skillIcon.icon}
                                    {skillIcon.text !== '' && (
                                        <div className="w-full h-full relative flex justify-center">
                                            <p className="text-center nunitoFont font-bold text-sm absolute -mt-[17px]">{skillIcon.text}</p>
                                        </div>
                                    )}
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
            <motion.div className="sticky left-0 top-0 flex h-[31%] w-full justify-center mt-11 z-20" style={{ opacity }}>
                <p className="w-80 text-center font-medium text-[25px] leading-[25px] text-white z-10">Constantly growing to deliver innovative solutions</p>
            </motion.div>
        </motion.div>
    )
}
export default Skills