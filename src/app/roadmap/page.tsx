import { PageWrapper } from "@/components/ui/page-wrapper";
import Image from "next/image";

export default function RoadmapPage() {
    return (
        <PageWrapper
            title="Academic Roadmap"
            description="Plan your child's academic journey with our comprehensive roadmap."
            overlayOpacity={40}
            // ===== ADD YOUR BACKGROUND HERE =====
            backgroundElement={
                <Image
                    src="/images/email_us_bg.jpg"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
            }
        >
            <div className="text-center">
                <p className="text-xl text-slate-300">
                    [ACADEMIC ROADMAP CONTENT PLACEHOLDER]
                </p>
                <p className="mt-4 text-slate-400">
                    Add your roadmap content here. Edit this file at: src/app/roadmap/page.tsx
                </p>
            </div>
        </PageWrapper>
    );
}
