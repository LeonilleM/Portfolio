function ProjectsPortion() {
    return (
        <div className="px-4">
            <div className="pt-16 pb-28 px-4 sm:px-8 md:px-16 lg:px-24">
                <h1 className="text-5xl text-darker font-roboto font-thin">Portfolio</h1>

                <div className ="py-2">
                    {/* Project One */}
                    <div className="flex flex-row space-x-5">
                        <div className="border rounded-lg border-darker w-[600px] h-[400px]"></div>
                        <p>Project description goes here.</p>
                        <h2 className="text-xl font-bold">Project Title</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProjectsPortion