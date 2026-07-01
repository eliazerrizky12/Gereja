"use client";

import { useState } from "react";
import Link from "next/link";
import { Church, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  {
    name: "Beranda",
    href: "#beranda",
  },
  {
    name: "Visi & Misi",
    href: "#visi-misi",
  },
  {
    name: "Statistik",
    href: "#statistik",
  },
  {
    name: "Penggembalaan",
    href: "#tim-penggembalaan",
  },
  {
    name: "BPJ",
    href: "#struktur-bpj",
  },
  {
    name: "Berita",
    href: "#berita",
  },
  {
    name: "Komunitas",
    href: "#komunitas",
  },
  {
    name: "Kontak",
    href: "#kontak",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="#beranda"
          className="flex items-center gap-2 font-bold text-primary"
        >
          <Church className="h-6 w-6" />
          <span className="hidden sm:inline">GKII Barong Tongkok</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <div className="mt-8 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-md px-3 py-2 text-lg transition-colors hover:bg-muted hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}

                <Button
                  asChild
                  className="mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="#kontak">Hubungi Kami</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
