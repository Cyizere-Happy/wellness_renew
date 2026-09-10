import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito_Sans } from "next/font/google";
import RootProviders from "@/components/ui/RootProviders";
import StickyBookingButton from "@/components/ui/StickyBookingButton";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wellness Renew | Counselling, Life Coaching & Wellbeing Support",
  description:
    "Wellness Renew offers compassionate counselling, life coaching and personal empowerment support. Refresh, restore and renew — book your free initial consultation today.",
  keywords: [
    "counselling",
    "life coaching",
    "wellbeing",
    "mental health support",
    "personal empowerment",
    "healthcare staffing",
    "therapy",
    "UK",
  ],
  openGraph: {
    title: "Wellness Renew | Counselling & Wellbeing Support",
    description:
      "Compassionate counselling, life coaching and personal empowerment. Refresh. Restore. Renew.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${nunitoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0f0e0c]">
        {/* Arms the scroll-reveal motion layer before first paint so the
            resting (hidden) state only applies when JS can bring it back.
            Without JS, every element stays fully visible. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('anim-ready')",
          }}
        />
        <RootProviders>
          {children}
          <StickyBookingButton />
        </RootProviders>
      </body>
    </html>
  );
}
