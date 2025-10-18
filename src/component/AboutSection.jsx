
import {Briefcase, Code, User} from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
               About <span className="text-primary">Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Passionate Full Stack Developer </h3>
                <p className="text-muted-foreground">I am a Passionate Full Stack Developer willing to learn more every single time. I love solving problems, working on interfaces and turning ideas into working products</p>


                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="cosmic-button">
                    Get in touch
                </a>
                <a href="/GersonResume2025.pdf" download="/GersonResume2025.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-200">
                    Download CV
                </a>
                </div>
            </div>
                <div className="grid grid-cols=1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary stroke-current"/>
                                </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">I strive to build responsive websites using React and JavaScript to name a few languages.</p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary stroke-current"/>
                        </div>
                            <div className="text-left">
                            <h4 className="font-semibold text-lg">UI/UX</h4>
                            <p className="text-muted-foreground">I enjoy making products that enhances the users experiences with products I build.</p>
                    </div>
                    </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary stroke-current"/>
                        </div>
                            <div className="text-left">
                            <h4 className="font-semibold text-lg">Team Work</h4>
                            <p className="text-muted-foreground">I enjoy working with teams to bring products to life. Using tools like Github to organize code.</p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}