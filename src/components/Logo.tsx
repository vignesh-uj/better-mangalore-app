import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.jpg.asset.json";

export function Logo({ className = "h-14" }: { className?: string }) {
  return (
    <Link to="/" className="inline-flex shrink-0 items-center" aria-label="Better Mangalore home">
      <img
        src={logo.url}
        alt="Better Mangalore — Your City. Your Voice."
        className={`${className} w-auto object-contain`}
      />
    </Link>
  );
}

export function LogoMark({ className = "h-9" }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="Better Mangalore"
      loading="lazy"
      className={`${className} w-auto object-contain mix-blend-screen`}
    />
  );
}
