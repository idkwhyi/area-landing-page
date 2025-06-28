import Benefits from '@/components/Benefits'
import Connect from '@/components/Connect'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Specification from '@/components/Specification'
import TrustedBy from '@/components/TrustedBy'
import Words from '@/components/Words'

export default function Home() {
    return (
        <div className="w-full flex flex-col items-start justify-center min-h-screen bg-white">
            <Navbar />
            <br />
            <Hero />
            <TrustedBy />
            <Benefits />
            <Words />
            <Specification />
            <Connect />
            <Footer />

        
        </div>
    )
}
