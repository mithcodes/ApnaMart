

const Track = () => {
    return (
        <section className="bg-blue-50">
            <div className="container mx-auto px-5 py-14">
                <div className="flex flex-wrap -m-4 text-center">

                    {/* Card 1 */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 bg-white hover:bg-blue-100 rounded-xl px-6 py-8 shadow-md hover:shadow-blue-300 group">
                            <div className="bg-blue-600 group-hover:bg-blue-500 rounded-full p-3 inline-block mb-4 shadow-md transition">
                                <svg className="text-white w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Quick Delivery</h2>
                            <p className="text-gray-600 text-sm">We ensure fast and safe delivery of your orders.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 bg-white hover:bg-blue-100 rounded-xl px-6 py-8 shadow-md hover:shadow-blue-300 group">
                            <div className="bg-blue-600 group-hover:bg-blue-500 rounded-full p-3 inline-block mb-4 shadow-md transition">
                                <svg className="text-white w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Fresh Styles</h2>
                            <p className="text-gray-600 text-sm">Discover new and trending t-shirt designs regularly.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 bg-white hover:bg-blue-100 rounded-xl px-6 py-8 shadow-md hover:shadow-blue-300 group">
                            <div className="bg-blue-600 group-hover:bg-blue-500 rounded-full p-3 inline-block mb-4 shadow-md transition">
                                <svg className="text-white w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18M12 6h.01M12 18h.01" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Premium Quality</h2>
                            <p className="text-gray-600 text-sm">Our T-Shirts are 100% cotton and built to last.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Track;
