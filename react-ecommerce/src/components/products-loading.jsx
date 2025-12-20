import { Skeleton } from "./ui/skeleton";

function ProductsLoading() {
  return (
    <div className="flex justify-between w-full">
      <div>
        <Skeleton className="h-[300px] w-[300px] rounded-lg" />
        <Skeleton className="w-[300px] h-5 rounded-lg mt-5" />
        <Skeleton className="w-[300px] h-5 rounded-lg mt-5" />
      </div>
      <div>
        <Skeleton className="h-[300px] w-[300px] rounded-lg" />
        <Skeleton className="w-[300px] h-5 rounded-lg mt-5" />
        <Skeleton className="w-[300px] h-5 rounded-lg mt-5" />
      </div>
      <div>
        <Skeleton className="h-[300px] w-[300px] rounded-lg" />
        <Skeleton className="w-[300px] h-5 rounded-lg mt-5" />
        <Skeleton className="w-[300px] h-5 rounded-lg mt-5" />
      </div>
      <div>
        <Skeleton className="h-[300px] w-[300px] rounded-lg" />
        <Skeleton className="w-[300px] h-5 rounded-lg mt-5" />
        <Skeleton className="w-[300px] h-5 rounded-lg mt-5" />
      </div>
      <div>
        <Skeleton className="h-[300px] w-[300px] rounded-lg" />
        <Skeleton className="w-[300px] h-5 rounded-lg mt-5" />
        <Skeleton className="w-[300px] h-5 rounded-lg mt-5" />
      </div>
    </div>
  );
}

export default ProductsLoading;