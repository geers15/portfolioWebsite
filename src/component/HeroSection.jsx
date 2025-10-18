
import {ArrowDown} from "lucide-react";

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in text-foreground">Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Gerson</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2 text-foreground"> Gonzalez</span>
                </h1>
                <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed">
                    I specialize in front-end and back-end development
                </p>
            </div>
            <div className="pt-9 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
                View My Work
            </a>
            </div>
        </div>
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
    <span className="text-2xl text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary"/>
    </div>
    </section>
    )
 }