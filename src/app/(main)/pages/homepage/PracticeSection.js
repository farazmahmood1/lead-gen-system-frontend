import React from 'react';

export default function PracticeSection() {
    return (
        <div className="bg-white py-16">
            <div className=" mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:w-2/3 ml-0 md:ml-16">
                    <h1 className="text-5xl font-bold mb-4 text-gray-800">
                        Apply This to Your Practice Today
                    </h1>
                    <p className="text-lg mb-8 text-gray-700">
                        Frustrated by ineffective marketing? You’re not alone.
                    </p>
                    <div className="space-y-6 px-0 md:px-8">
                        <div className="flex items-start space-x-4">
                            <span className="text-red-500 mt-2">
                                <img
                                    src="/assets/warning.png"
                                    alt="Warning Icon"
                                    className="img-fluid"
                                />
                            </span>
                            <div>
                                <p className="text-base text-gray-700">
                                    If you’ve ever felt frustrated by marketing that seems expensive but ineffective, you’re not alone. Many skincare professionals experience the same challenges—until they shift their approach.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <span className="text-blue-500 mt-2">
                                <img
                                    src="/assets/arrow.png"
                                    alt="Arrow Icon"
                                    className="img-fluid"
                                />
                            </span>
                            <div>
                                <p className="text-base text-gray-700">
                                    When you apply precision targeting, you stop wasting time on unqualified leads and start filling your schedule with clients who are already motivated to book.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 mt-8 md:mt-0">
                    <img
                        src="/assets/personThinking.png"
                        alt="Person Thinking"
                        className="w-full h-auto max-w-lg mx-auto"
                    />
                </div>
            </div>

            {/* Card Section */}
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-6" style={{ paddingLeft: "55px" }}>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md" style={{ border: "1px solid #DBDFFF" }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "25px", padding: "12px", backgroundColor: "#fff", width: "50px", height: "50px", marginBottom: "10px" }}>
                        <img
                            src="/assets/badge.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-2">More high-quality consultations <span style={{ fontWeight: 400 }} className="text-base">
                            with clients who are ready to commit.
                        </span></h2>
                    </div>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md" style={{ border: "1px solid #DBDFFF" }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "25px", padding: "12px", backgroundColor: "#fff", width: "50px", height: "50px", marginBottom: "10px" }}>
                        <img
                            src="/assets/investment.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-2">More high-quality consultations <span style={{ fontWeight: 400 }} className="text-base">
                            with clients who are ready to commit.
                        </span></h2>
                    </div>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md" style={{ border: "1px solid #DBDFFF" }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "25px", padding: "12px", backgroundColor: "#fff", width: "50px", height: "50px", marginBottom: "10px" }}>
                        <img
                            src="/assets/gear.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-2">More high-quality consultations <span style={{ fontWeight: 400 }} className="text-base">
                            with clients who are ready to commit.
                        </span></h2>
                    </div>
                </div>
            </div>
        </div>
    );
}