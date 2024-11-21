import { Skeleton } from "../skeleton"

const SkillsSkeleton = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <Skeleton className="h-[80px] w-[200px] rounded-xl" />
        </div>
    )
}

export default SkillsSkeleton