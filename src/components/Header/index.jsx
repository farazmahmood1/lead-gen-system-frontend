"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/components/common/Button";
const links = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];
export default function Header() {
  const router = useRouter();
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      setIsAtTop(currentScrollY === 0);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <div
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      style={{
        background: isAtTop
          ? "transparent"
          : "rgba(255, 255, 255, 0.8)",
        backdropFilter: isAtTop ? "none" : "blur(10px)",
        padding: "20px 80px",
      }}
    >
      <header className="w-full mx-auto min-h-[92px] flex items-center gap-4">
        <Image
          src={"/assets/logo.png"}
          alt={"logo"}
          width={72}
          height={66.45}
          className="object-contain"
        />
        {/* Navigation Links */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "1600px",
          }}
        >
          <nav
            className="flex items-center"
            style={{ justifyContent: "space-evenly", minWidth: "600px" }}
          >
            {links.map(({ label, href }, i) => (
              <a
                key={i}
                href={href}
                className={`text-[20px] p-2 hover:underline hover:underline-offset-4 ${label === "How it Works" ? "text-[#0E6EA9]" : ""
                  }`}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <div
              className="relative flex items-center bg-gray-100 overflow-hidden"
              style={{ borderRadius: "25px", padding: "4px", width: "320px" }}
            >
              <span className="absolute text-gray-500 ms-[8px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </span>
              {/* Input Field */}
              <input
                type="text"
                placeholder="Enter ZIP Code"
                className="w-full px-10 py-2 text-sm text-gray-700 bg-transparent border-none focus:outline-none"
              />
              {/* Search Icon */}
              <button className="absolute right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
            <Button size="md" onClick={() => router.push("/login")}>
              Login/Signup
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}






