'use client'

import Image from "next/image"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import DevTitle from "./devTitle"
import ButtonsPrincipalHover from "./buttonsPricipalHover"
import { useRef, useState } from "react"
import CircleButton from "../ui/circleButton"
import PrincipalTitle from "../ui/principalTitle"
import DevTitleCards from "./devTitleCards"

const Dev = () => {
  const dataDev = [
    {
      id: 1,
      img: '/images/dev/blinda-quirurgico-app-dev.webp',
      devTitle: 'Full Stack - App',
      title: '- Blindaje Quirúrgico',
      github: 'https://github.com/jeffcalona/-insurancePoliciesApp.git',
      web: null
    },
    {
      id: 2,
      img: '/images/dev/emp-web-dev.webp',
      devTitle: 'Full Stack - Web',
      title: '- Ecommerce Management Platform',
      github: 'https://github.com/jeffcalona/cdn-marica-camila.git',
      web: null
    },
    {
      id: 3,
      img: '/images/dev/mcboutique-web-dev.webp',
      devTitle: 'Frontend - Web',
      title: '- Maria Camila Boutique',
      github: 'https://github.com/jeffcalona/mc-boutique-front.git',
      web: null
    },

    {
      id: 4,
      img: '/images/dev/mistica-love-web-dev.webp',
      devTitle: 'Frontend - Web',
      title: '- Mistica Love',
      github: 'https://github.com/jeffcalona/misticalove.git',
      web: null
    },
    {
      id: 5,
      img: '/images/dev/my-web-dev.webp',
      devTitle: 'Frontend - Web',
      title: '- My Portfolio',
      github: 'https://github.com/jeffcalona/myNewWeb.git',
      web: null
    },
    {
      id: 6,
      img: '/images/dev/web-boda-plus-admin-web-dev.webp',
      devTitle: 'Full Stack - Web',
      title: '- Wedding Invitation & Admin',
      github: 'https://github.com/jeffcalona/web-wedding-public.git',
      web: 'http://www.bodacamilaycamilo.com'
    },
    {
      id: 7,
      img: '/images/dev/wellezy-web-dev.webp',
      devTitle: 'Frontend - Web',
      title: '- Wellezy',
      github: 'https://github.com/jeffcalona/FrontWellezyNew.git',
      web: 'https://wellezy.com'
    },
  ]

  const carouselCard = useRef<HTMLUListElement>(null)

  const [currentIndex, setCurrentIndex] = useState(dataDev.length - 1)

  const updateCurrentIndex = (newIndex: number) => {
    setCurrentIndex(newIndex)
  }

  const nexFunct = () => {
    const cardCurrent = carouselCard.current

    if (cardCurrent) {
      if (cardCurrent.children.length > 0) {
        const firstCard = cardCurrent.children[0] as HTMLLIElement

        cardCurrent.style.transition = 'all .5s ease-in'

        const widthCard = firstCard.offsetWidth
        cardCurrent.style.transform = `translateX(-${widthCard}px)`

        const transition = () => {
          cardCurrent.style.transition = 'none'
          cardCurrent.style.transform = `translateX(0)`

          /* El primer card lo coloco al final */
          cardCurrent.appendChild(firstCard)

          updateCurrentIndex((currentIndex + 1) % dataDev.length)

          cardCurrent.removeEventListener('transitionend', transition)
        }
        cardCurrent.addEventListener('transitionend', transition)
      }
    }
  }

  const backFunct = () => {
    const cardCurrent = carouselCard.current;

    if (cardCurrent) {
      const lastCardLength = cardCurrent.children.length - 1;
      const lastCard = cardCurrent.children[lastCardLength] as HTMLLIElement;

      cardCurrent.insertBefore(lastCard, cardCurrent.firstChild);

      cardCurrent.style.transition = 'none';

      const firstCard = cardCurrent.children[0] as HTMLLIElement;

      const widthCard = firstCard.offsetWidth;
      cardCurrent.style.transform = `translateX(-${widthCard + 16}px)`;

      // Utiliza el evento transitionend para detectar el final de la transición
      const transitionEndHandler = () => {
        cardCurrent.style.transition = 'none';
        cardCurrent.style.transform = `translateX(0)`;

        // Actualiza el índice después de la transición
        updateCurrentIndex((currentIndex - 1 + dataDev.length) % dataDev.length);

        // Elimina el event listener para evitar ejecuciones adicionales
        cardCurrent.removeEventListener('transitionend', transitionEndHandler);
      };

      cardCurrent.addEventListener('transitionend', transitionEndHandler);

      // Esto fuerza el navegador a procesar los cambios antes de la siguiente transición
      setTimeout(() => {
        cardCurrent.style.transition = 'all .5s ease-in';
        cardCurrent.style.transform = 'translateX(0)';
      }, 0);
    }
  };

  const { img, devTitle, title, github, web } = dataDev[currentIndex]

  return (
    <section id="Dev" className="h-full flex md:items-center items-end justify-center relative z-20">
      <div className='md:w-[90%] w-[99%] h-[80%] flex flex-col justify-center mt-10'>
        <PrincipalTitle title="Dev." position="absolute md:bottom-36 md:left-[5.5%] max-md:top-0 left-0" />
        <div className="h-full w-full flex max-md:flex-col items-center overflow-hidden max-md:pb-8">
          <div className="md:w-[41%] w-full md:h-full h-[58%] relative overflow-hidden [&>*:last-child]:text-right md:[&>*:last-child]:bottom-1/3 [&>*:last-child]:bottom-2 [&>*:last-child]:pr-2 [&>*:last-child]:w-full group/item flex justify-end">
            <Image src={img || 'images/skill/Javascript.png'} alt="WellezyVuelos" fill sizes="100%" className="h-full w-full object-cover object-top" />
            <div className="bgGradientBlack" />
            <div className="bgGradientBlackHover hidden group/edit group-hover/item:block" />
            <ButtonsPrincipalHover hrefCode={github} hrefWeb={web} />
            <DevTitle devTitle={devTitle} title={title} />
          </div>
          <div className="md:w-[12%] w-full md:h-full h-[12%] flex md:flex-col justify-center items-center md:gap-y-5 gap-x-4 z-40 -mt-16 max-md:my-2">
            <CircleButton onClick={nexFunct} icon={<FaArrowLeft className="text-white hover text-2xl" />} />
            <CircleButton onClick={backFunct} icon={<FaArrowRight className="text-white text-2xl" />} />
          </div>
          <div className="flex md:w-[47%] md:h-full w-full h-[30%] items-center overflow-hidden">
            <ul ref={carouselCard} className="h-full flex items-center gap-x-4">
              {dataDev.map((data) => (
                <li key={data.id} className="flex items-center md:h-[65%] md:w-[230px] h-full w-[130px]">
                  <div className="relative w-full h-full [&>*:last-child]:left-2 [&>*:last-child]:bottom-0">
                    <Image src={data.img} alt={data.title} fill sizes="100%" className="h-full w-full object-cover object-top" />
                    <div className="bgGradientBlack" />
                    <DevTitleCards title={data.title} devTitle={data.devTitle} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dev