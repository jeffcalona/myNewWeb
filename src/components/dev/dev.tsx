'use client'

import Image from "next/image"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import DevTitle from "./devTitle"
import ButtonsPrincipalHover from "./buttonsPricipalHover"
import { useRef, useState } from "react"
import CircleButton from "../ui/circleButton"

const Dev = () => {
  const dataDev = [
      {
        id: 1,
        img: '/images/dev/WellezyVuelos.png',
        imgHover: '/images/dev/WellezyVuelosCode.png',
        devTitle: 'Frontend',
        title: '- Wellezy 1',
        github: 'https://github.com/jeffcalona/-insurancePoliciesApp',
        web: 'http://www.web.wellezy.com/'
      },
      {
        id: 2,
        img: '/images/dev/BlindajeApp.png',
        imgHover: '/images/dev/WellezyVuelosCode.png',
        devTitle: 'App',
        title: '- Blindaje Quirúrgico 2',
        github: 'https://github.com/jeffcalona/-insurancePoliciesApp',
        web: 'http://www.web.wellezy.com/'
      },
      {
        id: 3,
        img: '/images/dev/WellezyVuelos.png',
        imgHover: '/images/dev/WellezyVuelosCode.png',
        devTitle: 'Frontend',
        title: '- Wellezy 3',
        github: 'https://github.com/jeffcalona/-insurancePoliciesApp',
        web: 'http://www.web.wellezy.com/'
      },
    
      { id: 4,
        img: '/images/dev/BlindajeApp.png',
        imgHover: '/images/dev/WellezyVuelosCode.png',
        devTitle: 'App',
        title: '- Blindaje Quirúrgico 4',
        github: 'https://github.com/jeffcalona/-insurancePoliciesApp',
        web: 'http://www.web.wellezy.com/'
      },
      {
        id: 5,
        img: '/images/dev/WellezyVuelos.png',
        imgHover: '/images/dev/WellezyVuelosCode.png',
        devTitle: 'Frontend',
        title: '- Wellezy 5',
        github: 'https://github.com/jeffcalona/-insurancePoliciesApp',
        web: 'http://www.web.wellezy.com/'
      },
      {
        id: 6,
        img: '/images/dev/BlindajeApp.png',
        imgHover: '/images/dev/WellezyVuelosCode.png',
        devTitle: 'Frontend',
        title: '- Blindaje Quirúrgico 6',
        github: 'https://github.com/jeffcalona/-insurancePoliciesApp',
        web: 'http://www.web.wellezy.com/'
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

  const { img, devTitle, title, github } = dataDev[currentIndex]

  return (
    <section id="Dev" className="h-screen flex items-center justify-center relative z-20">
        <div className='w-[90%] h-[80%] flex flex-col justify-center'>
            <h1 className="nunitoFont text-white text-[255px] font-extrabold -tracking-[10px] absolute bottom-0 left-[5.5%] z-30">
              Dev.
            </h1>
            <div className="h-full w-full flex items-center overflow-hidden">
              <div className="w-[41%] h-full relative overflow-hidden [&>*:last-child]:text-right [&>*:last-child]:bottom-1/3 [&>*:last-child]:pr-2 [&>*:last-child]:w-full group/item">
                  <Image src={img || 'images/skill/Javascript.png'} alt="WellezyVuelos" fill sizes="100%" className="h-full w-full object-cover group/edit group-hover/item:hidden" />
                  <Image src={img || 'images/skill/Javascript.png'} alt="WellezyVuelosCode" fill sizes="100%" className="h-full object-cover hidden group/edit group-hover/item:block" />
                  <div className="bgGradientBlack" />
                  <div className="bgGradientBlackHover hidden group/edit group-hover/item:block" />
                  <ButtonsPrincipalHover hrefCode={github} hrefWeb="/" />
                  <DevTitle devTitle={devTitle} title={title}/>
              </div>
              <div className="w-[12%] h-full flex flex-col justify-center items-center gap-y-5 z-40 -mt-16">
                  <CircleButton onClick={nexFunct} icon={<FaArrowLeft className="text-white text-2xl" />} />
                  <CircleButton onClick={backFunct} icon={<FaArrowRight className="text-white text-2xl" />} />
              </div>
              <div className="flex w-[47%] h-full items-center overflow-hidden">
                <ul ref={carouselCard} className="h-full flex items-center gap-x-4">
                    {dataDev.map((data) => (
                        <li key={data.id} className="flex items-center h-[65%] w-[230px]">
                          <div className="relative w-full h-full [&>*:last-child]:left-2 [&>*:last-child]:bottom-0">
                            <Image src={data.img} alt={data.title} fill sizes="100%" className="h-full w-full object-cover" />
                            <div className="bgGradientBlack" />
                            <DevTitle title={data.title} devTitle={data.devTitle} />
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

  // const [principalCardImg, setPrincipalCardImg] = useState(dataDev[dataDev.length - 1].img || null)
  // const [principalCardDevTitle, setPrincipalCardDevTitle] = useState(dataDev[dataDev.length - 1].devTitle)
  // const [principalCardTitle, setPrincipalCardTitle] = useState(`${dataDev[dataDev.length - 1].title}`)

  // const nexFunct = () => {
  //   const cardCurrent = carouselCard.current

  //   if (cardCurrent) {
  //     if (cardCurrent.children.length > 0) {
  //       const firstCard = cardCurrent.children[0] as HTMLLIElement

  //       const principalImg = firstCard.children[0].children[0].getAttribute('src')
  //       const principalDevTitle = firstCard.children[0].children[2].getElementsByTagName('h3')[0].innerHTML
  //       const principalTitle = firstCard.children[0].children[2].getElementsByTagName('h2')[0].innerHTML

  //       cardCurrent.style.transition = 'all .5s ease-in'

  //       const widthCard = firstCard.offsetWidth
  //       cardCurrent.style.transform = `translateX(-${widthCard}px)`

  //       const transition = () => {
  //         cardCurrent.style.transition = 'none'
  //         cardCurrent.style.transform = `translateX(0)`

  //         /* El primer card lo coloco al final */
  //         cardCurrent.appendChild(firstCard)

  //         setPrincipalCardImg(principalImg)
  //         setPrincipalCardDevTitle(principalDevTitle)
  //         setPrincipalCardTitle(principalTitle)

  //         cardCurrent.removeEventListener('transitionend', transition)
  //       }
  //       cardCurrent.addEventListener('transitionend', transition)
  //     }
  //   }
  // }

  // const backFunct = () => {
  //   const cardCurrent = carouselCard.current

  //   if (cardCurrent) {
  //     const lastCardLength = cardCurrent.children.length - 1
  //     const lastCard = cardCurrent.children[lastCardLength] as HTMLLIElement

  //     cardCurrent.insertBefore(lastCard, cardCurrent.firstChild)

  //     const getLastCard = cardCurrent.children[lastCardLength].children[0]

  //     const principalImg = getLastCard.children[0].getAttribute('src')
  //     const principalDevTitle = getLastCard.children[2].getElementsByTagName('h3')[0].innerHTML
  //     const principalTitle = getLastCard.children[2].getElementsByTagName('h2')[0].innerHTML
      
  //     cardCurrent.style.transition = 'none'

  //     const firstCard = cardCurrent.children[0] as HTMLLIElement
      
  //     const widthCard = firstCard.offsetWidth
  //     cardCurrent.style.transform = `translateX(-${widthCard + 16}px)`

  //     setTimeout(() => {
  //       cardCurrent.style.transition = 'all .5s ease-in'
  //       cardCurrent.style.transform = 'translateX(0)'

  //       const transitionEndHandler = () => {
  //         setPrincipalCardImg(principalImg);
  //         setPrincipalCardDevTitle(principalDevTitle);
  //         setPrincipalCardTitle(principalTitle);
  
  //         cardCurrent.removeEventListener('transitionend', transitionEndHandler);
  //       };
  //       cardCurrent.addEventListener('transitionend', transitionEndHandler);
  //     }, 50)
  //   }
  // }