import CEH from "@/public/CEH.png";
import CEHPRACTICAL from "@/public/CEHPRACTICAL.png";
import CEHMASTER from "@/public/CEHMASTER.png";
import MicrosoftBadge from "@/public/microsoft-certified-fundamentals-badge.svg";

export const certifications: {
    title: string;
    link: string;
    validity: string;
    badge: any;
    alt_text: string;
  }[] = [
    {
      title: "Certified Ethical Hacker (Theory)",
      validity: "2022 – 2025",
      link: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=AmSVYbqOhED0xd0auc6OIHg/9YhBLfakT4vhpWe2lWQ=",
      badge: CEH,
      alt_text: "Certified Ethical Hacker (Theory) Badge",
    },
    {
      title: "Certified Ethical Hacker (Practical)",
      validity: "2024 – 2027",
      link: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=lDUMGA02ZrQ5jP7bkbcoZa3rwrt9D8eOqKAzTKscIoI=",
      badge: CEHPRACTICAL,
      alt_text: "Certified Ethical Hacker (Practical) Badge",
    },
    {
      title: "Certified Ethical Hacker (Master)",
      validity: "2024 – 2027",
      link: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=lDUMGA02ZrQ5jP7bkbcoZfW3yjIB2u9cxFYTWc6XFuY=",
      badge: CEHMASTER,
      alt_text: "Certified Ethical Hacker (Master) Badge",
    },
    {
      title:
        "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
      validity: "Lifetime",
      link: "https://learn.microsoft.com/api/credentials/share/en-gb/ThamizhiniyanCS-1631/CFF28567621E4E2D",
      badge: MicrosoftBadge,
      alt_text:
        "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
    },
    {
      title: "Microsoft Certified: Azure Data Fundamentals",
      validity: "Lifetime",
      link: "https://learn.microsoft.com/api/credentials/share/en-gb/ThamizhiniyanCS-1631/A008F0B23CEF411E",
      badge: MicrosoftBadge,
      alt_text: "Microsoft Certified: Azure Data Fundamentals",
    },
  ];