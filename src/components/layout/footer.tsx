import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/programs", label: "Programs" },
    { href: "/parents", label: "Parent Portal" },
    { href: "/contact", label: "Contact" },
];

const academicLinks = [
    { href: "/roadmap", label: "Academic Roadmap" },
    { href: "/budget", label: "Budget Planning" },
    { href: "/university", label: "University Goals" },
    { href: "/admission", label: "Singapore Admission" },
];

const socialLinks = [
    { href: "#", icon: Facebook, label: "Facebook" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
];

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-200">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                                CYTA
                            </span>
                        </Link>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            China Young Talent Association - Empowering students to achieve academic excellence and global success.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3 pt-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-slate-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Academic Links */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Academics</h3>
                        <ul className="space-y-2">
                            {academicLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-slate-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm text-slate-400">
                                <MapPin size={18} className="shrink-0 mt-0.5" />
                                <span>123 Education Street, Singapore 123456</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-400">
                                <Phone size={18} className="shrink-0" />
                                <span>+65 1234 5678</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-400">
                                <Mail size={18} className="shrink-0" />
                                <span>info@cyta.edu.sg</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-slate-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-slate-500">
                            © {new Date().getFullYear()} China Young Talent Association. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link href="#" className="text-sm text-slate-500 hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="text-sm text-slate-500 hover:text-white transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
