import { PageWrapper } from "@/components/ui/page-wrapper";
import Image from "next/image";

export default function BudgetPage() {
    return (
        <PageWrapper
            title="Budget Planning"
            description="Financial planning tools to help you prepare for your child's education."
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
                    [BUDGET PLANNING CONTENT PLACEHOLDER]
                </p>
                <p className="mt-4 text-slate-400">
                    Add your budget planning content here. Edit this file at: src/app/budget/page.tsx
                </p>
            </div>
        </PageWrapper>
    );
}
