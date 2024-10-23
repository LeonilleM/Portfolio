import React from 'react'
import Image from 'next/image'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'

function studyspotter() {
    return (
        <div className="bg-F5F0E7">
            <NavBar text="text-white" bg="bg-[#32006E]" />
            {/* Header */}
            <div className="flex flex-col  bg-[#32006E] items-center py-12 ">
                <div className="mx-28 flex flex-row gap-28">
                    <div className="flex flex-col space-y-12 ">
                        <div className="bg-white rounded-2xl py-8 px-10 space-y-5">
                            <h1 className="text-2xl text-[#32006E] ">MindfulU - Mental Health App</h1>
                            <h1 className="text-4xl font-bold ">MindfulU - Mental Health App</h1>
                            <p className="italic font-semibold">Runner Up Vitality Track</p>
                        </div>
                        < div className="text-white space-y-12">
                            <div>
                                <h1 className="font-semibold text-3xl">Role</h1>
                                <p className="text-xl">Developer & Designer</p>
                            </div>
                            <div>
                                <h1 className="font-semibold text-3xl">Project Duration</h1>
                                <p className="text-xl">24 Hours</p>
                            </div>
                            <div>
                                <h1 className="font-semibold text-3xl">Team</h1>
                                <p className="text-xl">Leonille</p>
                                <p className="text-xl">Ethan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-20 text-[#4E4E4E]">
                <div className="container mx-auto flex flex-row gap-24">
                    <div className="space-y-2 w-1/3">
                        <h1 className="text-3xl">Project Overview</h1>
                        <p className="text-xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco

                        </p>
                    </div>
                    <div className="space-y-2 w-2/3 border-l-2 border-black pl-24">
                        <h1 className="text-3xl ">What is UW Club Hub?</h1>
                        <p className="text-xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>

                </div>
            </div>
            <div className="flex flex-col py-24 space-y-6">
                <div className="bg-[#32006E] px-36 py-14 w-3/5 rounded-r-full">
                    <h1 className="text-3xl font-semibold">Problem</h1>
                    <p className="w-1/2 text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    </p>
                </div>
                <div className="bg-white px-36 py-14 w-3/5 rounded-l-full  self-end flex flex-col items-end justify-end text-end">
                    <h1 className="text-3xl font-semibold">Solution</h1>
                    <p className="w-1/2 text-xl ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    </p>
                </div>
            </div >

            <div className="container mx-auto space-y-12 flex flex-col pb-20 text-3xl">
                <div>
                    <h1>Creation</h1>
                    <p className="text-xl"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    </p>
                </div>
                <div className="flex flex-row gap-16">
                    <div>
                        <h1>Setbacks</h1>
                        <p className="text-xl"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        </p>
                    </div>
                    <div>
                        <h1>Outcomes</h1>
                        <p className="text-xl"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        </p>
                    </div>
                </div>
                <div>
                    <h1>Final Screen</h1>
                    <div className="flex flex-row gap-16 items-center justify-center">
                        <div className="border-black border-2 w-[40rem] h-[40rem]">

                        </div>
                        <div className="border-black border-2 w-[40rem] h-[40rem]">
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-16 items-center justify-center">
                    <div>
                        <h1>Setbacks</h1>
                        <p className="text-xl"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        </p>
                    </div>
                    <div>
                        <h1>Outcomes</h1>
                        <p className="text-xl"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        </p>
                    </div>
                </div>

                <div>
                    <h1>Outcomes</h1>
                    <p className="text-xl"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    </p>
                </div>
                <div>
                    <h1>Moving</h1>
                    <p className="text-xl"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    </p>
                </div>
            </div>



            <Footer />
        </div >
    )
}

export default studyspotter