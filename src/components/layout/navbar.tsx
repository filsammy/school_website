"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href?: string;
  dropdown?: ReadonlyArray<{
    href: string;
    label: string;
    description?: string;
  }>;
};

const navItems: ReadonlyArray<NavItem> = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  {
    label: "For Parents",
    dropdown: [
      {
        href: "/parents",
        label: "Parents Reading Form",
        description: "Access parent resources",
      },
      {
        href: "/roadmap",
        label: "Academic Roadmap",
        description: "Plan your child's academic journey",
      },
      {
        href: "/budget",
        label: "Budget Planning",
        description: "Financial planning tools",
      },
    ],
  },
  {
    label: "University",
    dropdown: [
      {
        href: "/university",
        label: "Goals & Comparison",
        description: "Compare universities and set goals",
      },
      {
        href: "/admission",
        label: "Singapore Admission",
        description: "Singapore university admission guide",
      },
    ],
  },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(
    null
  );

  const isActive = (item: NavItem) => {
    if (item.href) return pathname === item.href;
    if (item.dropdown) {
      return item.dropdown.some((subItem) => pathname === subItem.href);
    }
    return false;
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === label ? null : label);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/images/logo.png"
            alt="CYTA Logo"
            width={150}
            height={48}
            className="h-12 w-auto"
            priority
          />
          <span className="hidden sm:inline text-sm text-muted-foreground font-medium">
            China Young Talent Association
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={item.label + index}>
                {item.dropdown ? (
                  <>
                    <NavigationMenuTrigger
                      className={cn(isActive(item) && "bg-accent")}
                    >
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={subItem.href}
                                className={cn(
                                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                  pathname === subItem.href && "bg-accent"
                                )}
                              >
                                <div className="text-sm font-medium leading-none">
                                  {subItem.label}
                                </div>
                                {subItem.description && (
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {subItem.description}
                                  </p>
                                )}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href!}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        pathname === item.href && "bg-accent"
                      )}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Action Button */}
        <Button variant="outline" className="hidden md:flex">
          Login
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-accent rounded-md transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item, index) => (
              <div key={item.label + index}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleMobileDropdown(item.label)}
                      className={cn(
                        "w-full flex items-center justify-between px-4 py-2 rounded-md font-medium transition-colors hover:bg-accent text-left",
                        isActive(item) && "bg-accent"
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={cn(
                          "transition-transform",
                          mobileDropdownOpen === item.label && "rotate-180"
                        )}
                      />
                    </button>
                    {mobileDropdownOpen === item.label && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={cn(
                              "block px-4 py-2 rounded-md text-sm transition-colors hover:bg-accent",
                              pathname === subItem.href &&
                              "bg-accent font-medium"
                            )}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-2 rounded-md font-medium transition-colors hover:bg-accent block",
                      pathname === item.href && "bg-accent"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Button variant="outline" className="mt-2">
              Login
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
