const ProjectsPortion = () => {
    return (
        <div id ="project-section">
            <div className="pt-20 pb-20 container mx-auto lg:px-40 text-darkgray-c">
                <h1 className="text-5xl text-darker font-roboto">Portfolio</h1>
                <div className="py-2 space-y-20">
                    {/* Project One */}
                    <div className="flex flex-col md:flex-row md:space-x-24">
                        <div className="border rounded-lg border-darker w-[600px] h-[400px]"></div>
                        <div className="flex flex-col md:flex-row md:space-x-24 font-roboto">
                           <div className ="flex flex-col">
                           <h2 className="text-3xl">Project Title</h2>
                           <p>Short Descp.</p>
                           </div>
                            <p>Project description goes here.</p>
                        </div>
                    </div>

                    {/* Project Two */}
                    <div className="flex flex-col md:flex-row md:space-x-24">
                        <div className="border rounded-lg border-darker w-[600px] h-[400px]"></div>
                        <div className="flex flex-col md:flex-row md:space-x-24 font-roboto">
                           <div className ="flex flex-col">
                           <h2 className="text-3xl">Project Title</h2>
                           <p>Short Descp.</p>
                           </div>
                            <p>Project description goes here.</p>
                        </div>
                    </div>

                    {/* Project Three */}
                    <div className="flex flex-col md:flex-row md:space-x-24">
                        <div className="border rounded-lg border-darker w-[600px] h-[400px]"></div>
                        <div className="flex flex-col md:flex-row md:space-x-24 font-roboto">
                           <div className ="flex flex-col">
                           <h2 className="text-3xl">Project Title</h2>
                           <p>Short Descp.</p>
                           </div>
                            <p>Project description goes here.</p>
                        </div>
                    </div>
                    
                  
                </div>

            </div>
        </div>
    )
}

export default ProjectsPortion