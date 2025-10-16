import {ExternalLink, GithubIcon, ArrowRight} from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Tip App",
        description:"Android tipping app meant to be used among friends",
        image:"/projects/tipApp.png",
        tags: ["Java"],
        demoUrl:"#",
        githubUrl:"#",
    },
    {
        id: 2,
        title: "Alert Academy WeApp",
        description:"Class portal for students",
        image:"/projects/alertAcademy.png",
        tags: ["Java","SQL"],
        demoUrl:"#",
        githubUrl:"#",
    }
]
export const ProjectSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured<span className="text-primary"> Projects </span></h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects
            </p>
            <div className="grid grid-cols1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs cover-hover flex flex-col h-full">
                   <div className="h-48 overflow-hidden">
                       <img src={project.image} alt="{project.title}" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                   </div>
                        <div className="flex flex-col flex-grow p-4">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag)=>(
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
                        <div className="mt-auto flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink size={20}/></a>
                                <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><GithubIcon size={20}/></a>
                            </div>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/geers15" target="_blank">
                    Check My Github <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
}