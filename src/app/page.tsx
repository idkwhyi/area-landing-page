import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'

export default function Home() {
    return (
        <div className="w-full flex flex-col items-start justify-center min-h-screen bg-white">
            <Navbar />
            <br />
            <Hero />

            <div className="w-40 h-40 bg-red-200">TEST</div>
            <div className="w-40 h-40 bg-red-200">TEST</div>
            <div className="w-40 h-40 bg-red-200">TEST</div>
            <div className="w-40 h-40 bg-red-200">TEST</div>
            <div className="w-40 h-40 bg-red-200">TEST</div>
            <div className="w-40 h-40 bg-red-200">TEST</div>
            <div className="w-40 h-40 bg-red-200">TEST</div>
        </div>
    )
}
