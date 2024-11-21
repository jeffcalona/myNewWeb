'use client'

import { useEffect, useState } from "react"

const VerticalScrollBar = () => {
  const [completion, setCompletion] = useState(0)

  useEffect(() => {
    const scrollCompletion = () => {
      const currentProgress = window.scrollY
      const scrollHeight = document.body.scrollHeight - window.innerHeight
      if (scrollHeight) {
        const numberScroll = Number((currentProgress / scrollHeight).toFixed(2)) * 233
        setCompletion(numberScroll)
        if (numberScroll === 0) {
          setCompletion(0)
        } else {
          setCompletion(numberScroll)
        }
      }
    }
    window.addEventListener('scroll', scrollCompletion)
    return () => {
      window.removeEventListener('scroll', scrollCompletion)
    }
  }, [])

  return (
    <div className="w-[8px] h-[35vh] fixed top-[32%] xl:right-[65px] md:right-[30px] max-md:left-6 bg-white rounded-[20px] overflow-y-hidden z-10">
      <div className="w-full h-[30%] bgNewYellow rounded-[20px] z-10" style={{ transform: `translateY(${completion}%)` }} />
    </div>
  )
}
export default VerticalScrollBar