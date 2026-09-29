import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";
import { contactData } from "@/data/contactData";

interface SocialLink {
  label: string;
  href?: string;
  Icon: LucideIcon;
  external: boolean;
  border: string;
  bg: string;
  text: string;
  glow: string;
}

/* GitHub / LinkedIn / Email only — no X/Twitter */
const SOCIALS: SocialLink[] = [
  {
    label: "GitHub",
    href: contactData.github,
    Icon: Github,
    external: true,
    border: "border-accent-cyan/30",
    bg: "bg-accent-cyan/10",
    text: "text-accent-cyan",
    glow: "hover:shadow-[0_0_20px_-6px_color-mix(in_srgb,var(--accent-cyan)_70%,transparent)]",
  },
  {
    label: "LinkedIn",
    href: contactData.linkedin,
    Icon: Linkedin,
    external: true,
    border: "border-accent-blue/30",
    bg: "bg-accent-blue/10",
    text: "text-accent-blue",
    glow: "hover:shadow-[0_0_20px_-6px_color-mix(in_srgb,var(--accent-blue)_70%,transparent)]",
  },
  {
    label: "Email",
    href: `mailto:${contactData.email}`,
    Icon: Mail,
    external: false,
    border: "border-accent-green/30",
    bg: "bg-accent-green/10",
    text: "text-accent-green",
    glow: "hover:shadow-[0_0_20px_-6px_color-mix(in_srgb,var(--accent-green)_70%,transparent)]",
  },
];

const ContactSocials = () => {
  return (
    <ul className="flex items-center justify-center gap-4 pt-4">
      {SOCIALS.filter((s) => Boolean(s.href)).map((social) => {
        const { Icon } = social;
        return (
          <li key={social.label}>
            <a
              href={social.href}
              aria-label={social.label}
              {...(social.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`group grid size-11 place-items-center rounded-full border ${social.border} ${social.bg} transition-[border-color,background-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 ${social.glow}`}
            >
              <Icon
                aria-hidden
                className={`size-5 ${social.text} transition-transform duration-200 group-hover:scale-110`}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactSocials;
