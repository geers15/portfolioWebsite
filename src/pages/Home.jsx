import {ThemeToggle} from "@/component/ThemeToggle.jsx";
import {StarBackground} from "@/component/StarBackground.jsx";
import {Navbar} from "@/component/Navbar.jsx";
import {HeroSection} from "@/component/HeroSection.jsx";
import {AboutSection} from "@/component/AboutSection.jsx";
import {SkillsSection} from "@/component/SkillsSection.jsx";
import {ProjectSection} from "@/component/ProjectSection.jsx";


export const Home = () => {
    return <div className="min-h-screen bg-background text-background overflow-x-hidden">
        {/* Theme toggle*/}
        <ThemeToggle />

        {/* Background effect*/}
        <StarBackground/>

        {/* Nav Bar*/}
        <Navbar/>

        {/* Main Content*/}
            <main>
                <HeroSection/>
                <AboutSection/>
                <SkillsSection/>
                <ProjectSection/>
            </main>
        {/* Footer*/}

    </div>
}