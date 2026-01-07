import { PageWrapper } from "@/components/ui/page-wrapper";
import Image from "next/image";

export default function ProgramsPage() {
    return (
        <PageWrapper
            title="Our Programs"
            description="Discover our comprehensive educational programs designed for student success."
            overlayOpacity={40}
            // ===== ADD YOUR BACKGROUND HERE =====
            backgroundElement={
                <Image
                    src="/images/programs_bg.jpg"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
            }
        >
            <div className="text-center">
                <p className="text-xl text-slate-300">
                    [PROGRAMS PAGE CONTENT PLACEHOLDER]
                </p>
                <p className="mt-4 text-slate-400">
                    Add your programs content here. Edit this file at: src/app/programs/page.tsx
                </p>
            </div>
        </PageWrapper>
    );
}
