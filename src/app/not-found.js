
const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="text-center">

                <h1 className="text-7xl font-bold text-blue-600">
                    404
                </h1>

                <h2 className="mt-4 text-2xl font-semibold text-gray-900">
                    Page Not Found
                </h2>

                <p className="mt-2 text-gray-500">
                    Sorry, the page you are looking for does not exist.
                </p>

                <a
                    href="/"
                    className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
                >
                    Go Back Home
                </a>

            </div>
        </div>
    );
};

export default NotFound;

