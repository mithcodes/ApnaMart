// // const Track = () => {
// //     return (
// //         <section>
// //             <div className=" container mx-auto px-5 py-10 md:py-14">
// //                 {/* main  */}
// //                 <div className="flex flex-wrap -m-4 text-center">
// //                     {/* Track 1 */}
// //                     <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
// //                         <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"  >
// //                             <svg className="text-blue-600 w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
// //                                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
// //                             </svg>

// //                             <h2 className="title-font font-medium text-lg text-gray-900" >Premium Tshirts</h2>
// //                             <p className="leading-relaxed">Our T-Shirts are 100% made of cotton.
// //                             </p>
// //                         </div>
// //                     </div>

// //                     {/* Track 2 */}
// //                     <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
// //                         <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"  >
// //                             <svg className="text-blue-600 w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
// //                                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
// //                             </svg>

// //                             <h2 className="title-font font-medium text-lg text-gray-900" >Premium Tshirts</h2>
// //                             <p className="leading-relaxed">Our T-Shirts are 100% made of cotton.
// //                             </p>
// //                         </div>
// //                     </div>

// //                     {/* Track 3  */}
// //                     <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
// //                         <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"  >
// //                             <svg className="text-blue-600 w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
// //                                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
// //                             </svg>

// //                             <h2 className="title-font font-medium text-lg text-gray-900" >Premium Tshirts</h2>
// //                             <p className="leading-relaxed">Our T-Shirts are 100% made of cotton.
// //                             </p>
// //                         </div>
// //                     </div>

// //                 </div>
// //             </div>
// //         </section>
// //     );
// // }

// // export default Track;

// const Track = () => {
//     return (
//         <section className="bg-gray-200 text-white">
//             <div className="container mx-auto px-5 py-14">
//                 <div className="flex flex-wrap -m-4 text-center">
                    
//                     {[1, 2, 3].map((item, i) => (
//                         <div key={i} className="p-4 md:w-1/3 sm:w-1/2 w-full">
//                             <div className="transition-all duration-300 ease-in-out transform hover:-translate-y-2 border-2 border-gray-800 bg-[#0f172a] hover:bg-[#1e293b] rounded-xl px-6 py-8 shadow-xl hover:shadow-blue-600/40 group">
                                
//                                 <div className="bg-blue-600 group-hover:bg-blue-500 rounded-full p-3 inline-block mb-4 shadow-md transition duration-300">
//                                     <svg className="text-white w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
//                                     </svg>
//                                 </div>

//                                 <h2 className="text-xl font-semibold text-white mb-2">Premium T-Shirts</h2>
//                                 <p className="text-gray-300 text-sm leading-relaxed">Our T-Shirts are 100% made of soft, breathable cotton.</p>
//                             </div>
//                         </div>
//                     ))}

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Track;

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
