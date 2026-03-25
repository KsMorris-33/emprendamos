import { Hero } from "@/features/home/components/Hero";
import MotivationSection from "@/features/home/components/Motivation";

export default function HomePage() {
    return (
        <div className="container mx-auto padding top: 0;">
            <Hero />
            <MotivationSection />
        </div>
    );
}