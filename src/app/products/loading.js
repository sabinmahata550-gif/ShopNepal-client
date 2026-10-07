import LoadingCard from "./_components/LoadingCard";

const Loading = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-8">
          <div className="h-8 w-52 animate-pulse rounded bg-gray-200" />
          <div className="mt-2 h-4 w-72 animate-pulse rounded bg-gray-200" />
        </div>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <li key={index}>
              <LoadingCard />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Loading;