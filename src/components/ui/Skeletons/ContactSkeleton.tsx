import { Skeleton } from "../skeleton"

const ContactSkeleton = () => {
    return (
        <div className="w-full h-full lg:px-14 md:px-5 flex md:justify-between items-center max-sm:flex-col justify-center max-sm:space-y-8">
            <Skeleton className="md:w-[45%] w-[90%] md:h-[35%] h-[20%] rounded-xl" />
            <Skeleton className="md:w-[45%] w-[90%] md:h-[50%] h-[50%] rounded-xl" />
        </div>
    )
}

export default ContactSkeleton