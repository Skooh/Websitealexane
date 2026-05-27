import { useState } from "react";

// Component: AnimalCard
export function AnimalCard({ iconType, title, description }: { iconType: string; title: string; description: string }) {
  const [isHovered, setIsHovered] = useState(false);

  const iconColor = isHovered ? "var(--mp-bg)" : "var(--mp-primary)";

  const renderIcon = () => {
    switch (iconType) {
      case "dogcat":
        return <DogCatIcon className="w-12 h-12" style={{ fill: iconColor }} />;
      case "horse":
        return <HorseIcon className="w-12 h-12" style={{ fill: iconColor }} />;
      case "cow":
        return <CowIcon className="w-12 h-12" style={{ fill: iconColor }} />;
      case "rabbit":
        return <RabbitIcon className="w-12 h-12" style={{ fill: iconColor }} />;
      default:
        return null;
    }
  };

  return (
    <div
      className="p-8 rounded-2xl transition-all duration-250 cursor-pointer"
      style={{
        backgroundColor: isHovered ? "var(--mp-primary)" : "var(--mp-surface)"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-4">
        {renderIcon()}
      </div>
      <h3
        className="font-medium mb-2"
        style={{
          fontSize: "var(--text-lg)",
          color: isHovered ? "var(--mp-bg)" : "var(--mp-text)"
        }}
      >
        {title}
      </h3>
      <p
        className="text-sm"
        style={{ color: isHovered ? "var(--mp-bg)" : "var(--mp-muted)" }}
      >
        {description}
      </p>
    </div>
  );
}

// Component: MotifCard
export function MotifCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div
      className="p-6 rounded-xl"
      style={{ backgroundColor: "var(--mp-bg)" }}
    >
      <div className="mb-3">
        {icon}
      </div>
      <h3
        className="font-medium mb-1"
        style={{
          fontSize: "var(--text-lg)",
          color: "var(--mp-text)"
        }}
      >
        {title}
      </h3>
      <p
        className="text-sm"
        style={{ color: "var(--mp-muted)" }}
      >
        {description}
      </p>
    </div>
  );
}

// Component: TimelineStep
export function TimelineStep({ number, icon, title, description }: { number: number; icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center relative z-10">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center mb-4 font-medium"
        style={{ backgroundColor: "var(--mp-primary)", color: "var(--mp-bg)" }}
      >
        {number}
      </div>
      <div className="mb-3">
        {icon}
      </div>
      <h3
        className="font-medium mb-2"
        style={{
          fontSize: "var(--text-lg)",
          color: "var(--mp-text)"
        }}
      >
        {title}
      </h3>
      <p
        className="text-sm"
        style={{ color: "var(--mp-muted)" }}
      >
        {description}
      </p>
    </div>
  );
}

// Component: TestimonialCard
export function TestimonialCard({ quote, animal, client }: { quote: string; animal: string; client: string }) {
  return (
    <div
      className="p-6 rounded-2xl"
      style={{ backgroundColor: "var(--mp-bg)" }}
    >
      <div
        className="text-4xl mb-4"
        style={{ color: "var(--mp-primary)" }}
      >
        "
      </div>
      <p
        className="mb-6 leading-relaxed"
        style={{ color: "var(--mp-text)" }}
      >
        {quote}
      </p>
      <div className="flex items-center gap-3">
        <span
          className="px-3 py-1 rounded-full text-sm"
          style={{ backgroundColor: "var(--mp-surface)", color: "var(--mp-primary)" }}
        >
          {animal}
        </span>
        <span
          className="text-sm"
          style={{ color: "var(--mp-muted)" }}
        >
          {client}
        </span>
      </div>
    </div>
  );
}

// Component: PricingCard
export function PricingCard({ title, price, duration, icon, featured }: { title: string; price: string; duration: string; icon: React.ReactNode; featured?: boolean }) {
  return (
    <div
      className="p-8 rounded-2xl"
      style={{
        backgroundColor: "var(--mp-surface)",
        border: featured ? "2px solid var(--mp-primary)" : "none"
      }}
    >
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3
        className="font-medium text-center mb-4"
        style={{
          fontSize: "var(--text-lg)",
          color: "var(--mp-text)"
        }}
      >
        {title}
      </h3>
      <div
        className="text-center mb-2"
        style={{
          fontSize: "2rem",
          fontWeight: 500,
          color: "var(--mp-primary)"
        }}
      >
        {price}
      </div>
      <p
        className="text-center text-sm"
        style={{ color: "var(--mp-muted)" }}
      >
        {duration}
      </p>
    </div>
  );
}

// SVG Icons
export function PawIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="8.5" cy="7" rx="2.5" ry="3.5" />
      <ellipse cx="15.5" cy="7" rx="2.5" ry="3.5" />
      <ellipse cx="5" cy="12" rx="2" ry="3" />
      <ellipse cx="19" cy="12" rx="2" ry="3" />
      <path d="M12 16c-2 0-3.5 1-4 3s.5 3.5 2.5 3.5c1.5 0 1.5-1 1.5-1s0 1 1.5 1c2 0 3-1.5 2.5-3.5s-2-3-4-3z" />
    </svg>
  );
}

export function HandsPawIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C10.3 2 9 3.3 9 5v6c0 .6-.4 1-1 1s-1-.4-1-1V8c0-1.7-1.3-3-3-3S1 6.3 1 8v4c0 4.4 3.6 8 8 8h2c4.4 0 8-3.6 8-8V5c0-1.7-1.3-3-3-3s-3 1.3-3 3v7c0 .6-.4 1-1 1s-1-.4-1-1V5c0-1.7-1.3-3-3-3z" />
      <circle cx="16" cy="4" r="1.5" />
      <circle cx="20" cy="6" r="1" />
      <circle cx="22" cy="9" r="1" />
    </svg>
  );
}

export function ChevronDownIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9L12 15L18 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DogCatIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className || "w-12 h-12"} style={style || { fill: "var(--mp-primary)" }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 4l-1 7h-4l-1-7h6zM4 4l1 7h4l1-7H4zM7 13c-2.2 0-4 1.8-4 4v3h14v-3c0-2.2-1.8-4-4-4H7z" />
    </svg>
  );
}

export function HorseIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className || "w-12 h-12"} style={style || { fill: "var(--mp-primary)" }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 8c0-2.2-1.8-4-4-4h-2l-2-2H8l2 4H8C5.8 6 4 7.8 4 10v3c0 1.1.9 2 2 2h1v7h2v-7h2v7h2v-7h1c1.1 0 2-.9 2-2v-2l4-2V8z" />
    </svg>
  );
}

export function CowIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className || "w-12 h-12"} style={style || { fill: "var(--mp-primary)" }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="8" cy="6" rx="2" ry="1.5" />
      <ellipse cx="16" cy="6" rx="2" ry="1.5" />
      <rect x="6" y="8" width="12" height="10" rx="2" />
      <rect x="7" y="18" width="2" height="4" />
      <rect x="15" y="18" width="2" height="4" />
    </svg>
  );
}

export function RabbitIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className || "w-12 h-12"} style={style || { fill: "var(--mp-primary)" }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="9" cy="3" rx="2" ry="3" />
      <ellipse cx="15" cy="3" rx="2" ry="3" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="10" cy="11" r="1" />
      <circle cx="14" cy="11" r="1" />
    </svg>
  );
}

export function WalkIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className || "w-8 h-8"} style={style || { fill: "var(--mp-primary)" }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="4" r="2" />
      <path d="M10 8l-1 7 3 3v6h2v-7l-2-2 1-4 2 2v4h2v-5l-3-3-2-1z" />
    </svg>
  );
}

export function ShieldCheckIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className || "w-8 h-8"} style={style || { fill: "var(--mp-primary)" }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4zm-2 14l-4-4 1.4-1.4L10 13.2l6.6-6.6L18 8l-8 8z" />
    </svg>
  );
}

export function SproutIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className || "w-8 h-8"} style={style || { fill: "var(--mp-primary)" }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8 2 4 4 4 8c0 2 1 4 3 5-1 1-2 3-2 5h2c0-2.2 1.8-4 4-4v8h2v-8c2.2 0 4 1.8 4 4h2c0-2-1-4-2-5 2-1 3-3 3-5 0-4-4-6-8-6z" />
    </svg>
  );
}

export function HeartPulseIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className || "w-8 h-8"} style={style || { fill: "var(--mp-primary)" }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35zM9 11l2-4 2 6 2-2h3" />
    </svg>
  );
}

export function ActivityIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className || "w-8 h-8"} style={style || { fill: "var(--mp-primary)" }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12h4l3-9 4 18 3-9h4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BrainIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className || "w-8 h-8"} style={style || { fill: "var(--mp-primary)" }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4C9.8 4 8 5.8 8 8c-1.7 0-3 1.3-3 3s1.3 3 3 3c0 2.2 1.8 4 4 4s4-1.8 4-4c1.7 0 3-1.3 3-3s-1.3-3-3-3c0-2.2-1.8-4-4-4z" />
    </svg>
  );
}

export function TrophyIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className || "w-8 h-8"} style={style || { fill: "var(--mp-primary)" }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 3h12v5c0 3.3-2.7 6-6 6s-6-2.7-6-6V3zM4 5h2v3c0 .7.1 1.3.3 2H4c-1.1 0-2-.9-2-2s.9-2 2-2zM20 5h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2.3c.2-.7.3-1.3.3-2V5zM11 15v4H8v2h8v-2h-3v-4c.3 0 .7 0 1-.1.3 0 .7-.1 1-.1z" />
    </svg>
  );
}

export function ClipboardIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className || "w-8 h-8"} style={style || { fill: "var(--mp-primary)" }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2h-2c0-1.1-.9-2-2-2s-2 .9-2 2H8C6.9 2 6 2.9 6 4v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM12 1c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm4 19H8V4h8v16z" />
    </svg>
  );
}

export function ChatIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className || "w-8 h-8"} style={style || { fill: "var(--mp-primary)" }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
    </svg>
  );
}

export function EyeIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className || "w-8 h-8"} style={style || { fill: "var(--mp-primary)" }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4C7 4 2.7 7.1 1 11.5 2.7 15.9 7 19 12 19s9.3-3.1 11-7.5C21.3 7.1 17 4 12 4zm0 12.5c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" />
    </svg>
  );
}

export function HandIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className || "w-8 h-8"} style={style || { fill: "var(--mp-primary)" }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 15c0 2.2-1.8 4-4 4H9c-2.2 0-4-1.8-4-4V9c0-.6.4-1 1-1s1 .4 1 1v4c0 .6.4 1 1 1s1-.4 1-1V7c0-.6.4-1 1-1s1 .4 1 1v5c0 .6.4 1 1 1s1-.4 1-1V5c0-.6.4-1 1-1s1 .4 1 1v7c0 .6.4 1 1 1s1-.4 1-1V9c0-.6.4-1 1-1s1 .4 1 1v6z" />
    </svg>
  );
}

export function CheckCircleIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className || "w-8 h-8"} style={style || { fill: "var(--mp-primary)" }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.4-1.4L10 14.2l7.6-7.6L19 8l-9 9z" />
    </svg>
  );
}

export function PhoneIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MailIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="22,6 12,13 2,6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function InstagramIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function BookOpenIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TargetIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" strokeWidth="2" />
      <circle cx="12" cy="12" r="6" strokeWidth="2" />
      <circle cx="12" cy="12" r="2" strokeWidth="2" />
    </svg>
  );
}

export function HeartIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
