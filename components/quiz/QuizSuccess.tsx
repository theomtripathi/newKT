"use client";

export default function QuizSuccess() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 via-pink-50 to-white">


            <main className="relative z-10 flex flex-col items-center justify-center py-16 px-4 md:px-8 lg:px-16">
                <div className="w-full max-w-4xl space-y-8">
                    {/* Quiz Summary */}
                    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6 rounded-xl shadow-lg  ">
                        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-4">
                            Quiz Successfully Completed 
                        </h2>
                        <button className=" px-6  py-3 text-lg font-semibold text-white bg-white/20 backdrop-blur-lg border border-pink-300 rounded-lg shadow-md hover:bg-white/30 hover:border-pink-500 focus:outline-none focus:ring-4 focus:ring-pink-300 transition-all duration-300 ">
                            <span className="inset-0 opacity-50 bg-gradient-to-r from-pink-400 via-transparent to-gray-400 blur-md rounded-lg"></span>
                            <span className="">See the results of your quiz</span>
                        </button>

                    </div>

                    {/* Details Section */}
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                        <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-purple-300">
                            <h3 className="text-lg md:text-2xl font-semibold text-purple-900 mb-4 text-center">
                                Quiz Details
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <IoDocumentTextOutline className="text-purple-500 text-2xl mr-3" />
                                    <p className="text-purple-900 text-base md:text-lg">Questions: 20</p>
                                </div>
                                <div className="flex items-center">
                                    <LuClock className="text-purple-500 text-2xl mr-3" />
                                    <p className="text-purple-900 text-base md:text-lg">Time Given: 15 minutes</p>
                                </div>
                                <div className="flex items-center">
                                    <GoVerified className="text-purple-500 text-2xl mr-3" />
                                    <p className="text-purple-900 text-base md:text-lg">
                                        Your Responses: 17/20
                                    </p>
                                </div>
                            </div>
                        </div>

                      
                        <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-pink-300">
                            <h3 className="text-lg md:text-2xl font-semibold text-pink-900 mb-4 text-center">
                                Invite
                            </h3>
                            <div className="space-y-4">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Enter email address"
                                        className="w-full py-2 px-4 pr-10 border border-pink-400 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
                                    />
                                    <MdOutlineEmail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-pink-500 text-2xl" />
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value="https://quizlink.example.com"
                                        readOnly
                                        className="w-full py-2 px-4 pr-10 border border-pink-400 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
                                    />
                                    <LuLink className="absolute right-3 top-1/2 transform -translate-y-1/2 text-pink-500 text-2xl" />
                                </div>
                            </div>
                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <button className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-600 transition duration-300 ease-in-out transform hover:scale-105">
                                    <FiFacebook className="mr-2 text-xl" />
                                    Share on Facebook
                                </button>
                                <button className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-blue-400 to-cyan-400 text-white font-medium rounded-lg shadow-lg hover:from-blue-500 hover:to-cyan-500 transition duration-300 ease-in-out transform hover:scale-105">
                                    <FiTwitter className="mr-2 text-xl" />
                                    Share on Twitter
                                </button>
                            </div>

                        </div>
                    </div> */}
                </div>
            </main>
        </div>
    );
}
