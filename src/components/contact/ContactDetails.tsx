import { Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { contactData } from "@/data/contactData";

interface DetailItem {
  label: string;
  value?: string;
  href?: string;
  Icon: LucideIcon;
  iconColor: string;
  hoverText: string;
}

const DETAILS: DetailItem[] = [
  {
    label: "Email",
    value: contactData.email,
    href: `mailto:${contactData.email}`,
    Icon: Mail,
    iconColor: "text-accent-cyan",
    hoverText: "group-hover:text-accent-cyan",
  },
  {
    label: "Phone",
    value: contactData.phone,
    href: contactData.phone ? `tel:${contactData.phone}` : undefined,
    Icon: Phone,
    iconColor: "text-accent-violet",
    hoverText: "group-hover:text-accent-violet",
  },
  {
    label: "Location",
    value: contactData.location,
    Icon: MapPin,
    iconColor: "text-accent-green",
    hoverText: "group-hover:text-accent-green",
  },
];

const ContactDetails = () => {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
      {DETAILS.filter((d) => Boolean(d.value)).map((detail) => {
        const { Icon } = detail;
        const inner = (
          <>
            <Icon aria-hidden className={`size-4 shrink-0 ${detail.iconColor} transition-colors duration-200`} />
            <span className={`text-[14px] text-foreground transition-colors duration-200 ${detail.hoverText}`}>
              {detail.value}
            </span>
          </>
        );
        return (
          <li key={detail.label}>
            {detail.href ? (
              <a
                href={detail.href}
                className="group flex cursor-pointer items-center gap-2.5 rounded outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/60"
              >
                {inner}
              </a>
            ) : (
              <span className="group flex items-center gap-2.5">
                {inner}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default ContactDetails;
