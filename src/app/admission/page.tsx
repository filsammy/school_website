import { PageWrapper } from "@/components/ui/page-wrapper";
import Image from "next/image";

export default function AdmissionPage() {
    return (
        <PageWrapper
            title="Singapore Admission"
            description="Your guide to university admission in Singapore."
            overlayOpacity={40}
            // ===== ADD YOUR BACKGROUND HERE =====
            backgroundElement={
                <Image
                    src="/images/budget_bg.jpg"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
            }
        >
            <div className="text-center">
                <p className="text-xl text-slate-300">
                    [SINGAPORE ADMISSION CONTENT PLACEHOLDER]
                </p>
                <p className="mt-4 text-slate-400">
                    Add your admission guide content here. Edit this file at: src/app/admission/page.tsx
                </p>
            </div>
        </PageWrapper>
    );
}
