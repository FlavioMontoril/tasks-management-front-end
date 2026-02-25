import { Skeleton } from "./ui/skeleton";

export function SkeletonTable() {
    return (
        <div className="w-full flex flex-col">
            {/* Header */}
            <div className="grid grid-cols-[130px_1fr_160px_130px] px-4 py-3 border-b">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-3 w-14" />
            </div>

            {/* Rows */}
            {Array.from({ length: 8 }).map((_, index) => (
                <div
                    key={index}
                    className="grid grid-cols-[130px_1fr_160px_130px] px-4 py-4 border-b items-center"
                >
                    <Skeleton className="h-3 w-20" />
                    <Skeleton className="h-3 w-3/4" />
                    <Skeleton className="h-3 w-24" />
                    <Skeleton className="h-6 w-20 rounded-full" />
                </div>
            ))}
        </div>
    )
}