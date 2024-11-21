import { Skeleton } from "../skeleton"

const DesignSkeleton = () => {
    return (
        <div className="w-full h-full lg:px-14 md:px-10 flex justify-center items-center">
            <div className="h-[70%] w-full flex flex-col justify-between">
                <Skeleton className="md:h-[70%] h-[25%] rounded-xl" />
                <Skeleton className="md:h-[25%] h-[70%] lg:w-[70%] md:w-[90%] rounded-xl" />
            </div>
        </div>
    )
}

export default DesignSkeleton