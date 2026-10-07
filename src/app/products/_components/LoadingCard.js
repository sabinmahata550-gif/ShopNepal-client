const LoadingCard = () => {
    return (
        <div className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="h-48 animate-pulse bg-gray-200" />

            <div className="flex flex-1 flex-col p-4">
                <div className="h-3 w-16 animate-pulse rounded bg-gray-200" />

                <div className="mt-2 h-5 w-3/4 animate-pulse rounded bg-gray-200" />

                <div className="mt-3 space-y-2">
                    <div className="h-3 w-full animate-pulse rounded bg-gray-200" />
                    <div className="h-3 w-2/3 animate-pulse rounded bg-gray-200" />
                </div>

                <div className="mt-auto flex items-center justify-between pt-4">
                    <div className="h-5 w-20 animate-pulse rounded bg-gray-200" />
                    <div className="h-9 w-20 animate-pulse rounded-lg bg-gray-200" />
                </div>
            </div>
        </div>
    );
};

export default LoadingCard;