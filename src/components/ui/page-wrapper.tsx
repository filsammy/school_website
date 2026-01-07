import { cn } from "@/lib/utils";

interface PageWrapperProps {
    children: React.ReactNode;
    title: string;
    description?: string;
    className?: string;
    /**
     * Pass your custom background element here.
     * Examples:
     * - Image: <Image src="/images/bg.jpg" alt="Background" fill className="object-cover" />
     * - Video: <video src="/videos/bg.mp4" autoPlay loop muted className="absolute inset-0 w-full h-full object-cover" />
     * - Gradient: <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700" />
     */
    backgroundElement?: React.ReactNode;
    /**
     * Overlay opacity for better text readability (0-100)
     * Default: 50
     */
    overlayOpacity?: number;
}

export function PageWrapper({
    children,
    title,
    description,
    className,
    backgroundElement,
    overlayOpacity = 50,
}: PageWrapperProps) {
    return (
        <div className={cn("relative min-h-screen", className)}>
            {/* ===== BACKGROUND SECTION ===== */}
            {/* Add your background image, video, or gradient here */}
            {/* You can either pass it via backgroundElement prop or add it directly below */}
            <div className="absolute inset-0 -z-10">
                {backgroundElement || (
                    // Default gradient background - replace with your own
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
                )}
                {/* Dark overlay for text readability */}
                <div
                    className="absolute inset-0 bg-black"
                    style={{ opacity: overlayOpacity / 100 }}
                />
            </div>
            {/* ===== END BACKGROUND SECTION ===== */}

            {/* Page Content */}
            <div className="relative z-10 container mx-auto px-4 py-16">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {title}
                    </h1>
                    {description && (
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                            {description}
                        </p>
                    )}
                </div>

                {/* Page Body */}
                <div className="text-white">
                    {children}
                </div>
            </div>
        </div>
    );
}
