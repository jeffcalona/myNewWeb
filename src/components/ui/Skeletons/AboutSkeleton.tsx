import { Skeleton } from "../skeleton"

const AboutSkeleton = () => {
    return (
        <div className="w-full h-full flex flex-col md:justify-center justify-start max-sm:mt-24">
            <div className="lg:w-[600px] md:w-[450px] w-[90%] md:mx-14 mx-2 space-y-4">
                <Skeleton className="h-[100px] w-[80%] rounded-xl" />
                <Skeleton className="md:h-[150px] h-[200px] w-full rounded-xl" />
                <Skeleton className="h-[80px] w-full rounded-xl" />
                <Skeleton className="h-[30px] w-[40%] rounded-xl" />
            </div>
        </div>
    )
}

export default AboutSkeleton