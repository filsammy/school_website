import { PageWrapper } from "@/components/ui/page-wrapper";
import Image from "next/image";

export default function ContactPage() {
    return (
        <PageWrapper
            title="Contact Us"
            description="Get in touch with us. We'd love to hear from you."
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
                    [CONTACT PAGE CONTENT PLACEHOLDER]
                </p>
                <p className="mt-4 text-slate-400">
                    Add your contact form and information here. Edit this file at: src/app/contact/page.tsx
                </p>
            </div>
        </PageWrapper>
    );
}
