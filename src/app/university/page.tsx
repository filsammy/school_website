import { PageWrapper } from "@/components/ui/page-wrapper";
import Image from "next/image";

export default function UniversityPage() {
    return (
        <PageWrapper
            title="University Goals & Comparison"
            description="Compare universities and set academic goals for your future."
            overlayOpacity={40}
            // ===== ADD YOUR BACKGROUND HERE =====
            backgroundElement={
                <Image
                    src="/images/university_goals_bg.jpg"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
            }
        >
            <div className="text-center">
                <p className="text-xl text-slate-300">
                    [UNIVERSITY GOALS CONTENT PLACEHOLDER]
                </p>
                <p className="mt-4 text-slate-400">
                    Add your university comparison content here. Edit this file at: src/app/university/page.tsx
                </p>
            </div>
        </PageWrapper>
    );
}
