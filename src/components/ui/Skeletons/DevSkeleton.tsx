import { Skeleton } from "../skeleton"

export const DevSkeleton = () => {
    return (
        <div className="w-full h-full flex md:justify-between items-center md:px-14 px-0 max-sm:flex-col justify-center max-sm:space-y-4">
            <Skeleton className="md:w-[40%] md:h-[70%] rounded-xl h-[40%] w-[90%]" />
            <div className="md:w-[58%] md:h-[40%] flex items-center justify-between w-[90%] h-[30%] max-sm:flex-col">
                <Skeleton className="md:w-[18%] md:h-[40%] h-[20%] rounded-xl w-[30%]" />
                <div className="lg:w-[76%] md:w-[79%] w-[90%] h-full max-sm:h-[75%] rounded-xl flex justify-between">
                    <Skeleton className="lg:w-[48%] md:w-[78%] w-[48%] h-full rounded-xl" />
                    <Skeleton className="lg:w-[48%] md:w-[18%] w-[48%] h-full rounded-xl" />
                </div>
            </div>
        </div>
    )
}
