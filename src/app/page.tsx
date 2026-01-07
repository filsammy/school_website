import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Decorative Design Element */}
      <Image
        src="/images/design.png"
        alt=""
        width={600}
        height={600}
        className="absolute right-0 bottom-0 opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Logo Badge */}
            <div className="inline-flex flex-col items-center px-8 py-6">
              <Image
                src="/images/logo.png"
                alt="CYTA Logo"
                width={200}
                height={80}
                className="h-40 w-auto backdrop-blur-md border-white/30 rounded-full shadow-2xl"
                priority
              />
              <span className="text-xl font-semibold text-gray-800 text-center bg-yellow-400 rounded-2xl shadow-lg p-3">
                China Young Talent Association
              </span>
            </div>

            {/* Big Catchy Text */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Singapore AI & Technology
              <br />
              <span className="text-yellow-400">
                Talent Development Program
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">2026</span>
            </h1>
          </div>

          {/* Right Column */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-md shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">
                Start Your Journey Today
              </h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Join our world-class program designed to nurture young talents
                in AI and technology. Unlock your potential with expert mentors,
                hands-on projects, and global opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold"
                >
                  Inquire Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-black hover:bg-white/10"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
