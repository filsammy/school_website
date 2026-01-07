import { PageWrapper } from "@/components/ui/page-wrapper";
import Image from "next/image";

export default function ParentsPage() {
    return (
        <PageWrapper
            title="Parent Portal"
            description="Access resources and stay connected with your child's educational journey."
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
                    [PARENT PORTAL CONTENT PLACEHOLDER]
                </p>
                <p className="mt-4 text-slate-400">
                    Add your parent portal content here. Edit this file at: src/app/parents/page.tsx
                </p>
            </div>
        </PageWrapper>
    );
}
