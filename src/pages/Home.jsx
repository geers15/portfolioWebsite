import {ThemeToggle} from "@/component/ThemeToggle.jsx";
import {StarBackground} from "@/component/StarBackground.jsx";
import {Navbar} from "@/component/Navbar.jsx";
import {HeroSection} from "@/component/HeroSection.jsx";


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
            </main>
        {/* Footer*/}

    </div>
}