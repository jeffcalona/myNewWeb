import Image from "next/image"

const Skills = () => {
    return (
        <section id="Skills" className="w-full h-full flex justify-center items-center">
            <div className="w-[70%] h-[70%] gridTemplate z-20 mt-[40px]">
                <div className="bg-[#86D4E9] col-[1/2] row-[1/4] boxSkill">
                    <div className="h-[50%] w-full relative">
                        <Image src="/images/skills/ReactJs.png" alt="javescript" fill sizes="100%" className="h-full object-contain" />
                    </div>
                </div>
                <div className="bg-[#FFEF70] col-[2/3] row-[1/4] boxSkill">
                    <div className="h-[30%] w-full relative">
                        <Image src="/images/skills/Javascript.png" alt="ReactJs" fill sizes="100%" className="h-full object-contain" />
                    </div>
                </div>
                <div className="bg-[#67A65A] col-[3/4] row-[1/3] boxSkill">
                    <div className="h-[50%] w-full relative">
                        <Image src="/images/skills/NodeJs.png" alt="NodeJs" fill sizes="100%" className="h-full object-contain" />
                    </div>
                </div>
                <div className="bg-[#FF65A0] col-[1/2] row-[4/7] boxSkill">
                    <div className="h-[60%] w-full relative">
                        <Image src="/images/skills/StyledComponents.png" alt="StyledComponents" fill sizes="100%" className="h-full object-contain" />
                    </div>
                </div>
                <div className="bg-[#1C1C1C] col-[2/3] row-[4/6] boxSkill">
                    <div className="h-[60%] w-full flex flex-col justify-center items-center">
                        <h2 className="textYellow text-[40px] nunitoFont font-bold">Skills</h2>
                        <p className="textYellow text-[12px] nunitoFont font-light -mt-[12px] w-24 text-end">Some...</p>
                    </div>
                </div>
                <div className="bg-[#78C8DE] col-[3/4] row-[3/6] boxSkill">
                    <div className="h-[50%] w-full relative">
                        <Image src="/images/skills/ReactNative.png" alt="ReactNative" fill sizes="100%" className="h-full object-contain" />
                    </div>
                </div>
                <div className="bg-[#CDB4F4] col-[1/2] row-[7/9] boxSkill">
                    <div className="h-[50%] w-full relative">
                        <Image src="/images/skills/Redux.png" alt="Redux" fill sizes="100%" className="h-full object-contain" />
                    </div>
                </div>
                <div className="col-[2/3] row-[6/9] boxSkill">
                    <div className="w-full h-full flex justify-between">
                        <div className="bg-[#FCB5AA] w-[52%] h-full flex justify-center items-center">
                            <div className="h-[40%] w-full relative">
                                <Image src="/images/skills/Git.png" alt="Git" fill sizes="100%" className="h-full object-contain" />
                            </div>
                        </div>
                        <div className="w-[42%] h-full flex justify-center items-center">
                            <div className="w-full h-full flex flex-col justify-between">
                                <div className="bg-[#E77A5B] boxSkill w-full h-[46%]">
                                    <div className="h-[40%] w-full relative">
                                        <Image src="/images/skills/Html5.png" alt="Html5" fill sizes="100%" className="h-full object-contain" />
                                    </div>
                                </div>
                                <div className="bg-[#7D9BC8] boxSkill w-full h-[46%]">
                                    <div className="h-[40%] w-full relative">
                                        <Image src="/images/skills/Css.png" alt="Css" fill sizes="100%" className="h-full object-contain" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#5A0F56] col-[3/4] row-[6/9] boxSkill">
                    <div className="h-[40%] w-full relative">
                        <Image src="/images/skills/UiUx.png" alt="UiUx" fill sizes="100%" className="h-full object-contain" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills