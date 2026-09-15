import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wajeeh Murad AlSultan | Portfolio",

  description:
    "Personal portfolio of Wajeeh Murad AlSultan, Informatics Engineer specializing in data analysis, information management, MEAL, IT, artificial intelligence and digital solutions.",

  keywords: [
    "Wajeeh Murad AlSultan",
    "Informatics Engineer",
    "Data Analysis",
    "Information Management",
    "MEAL",
    "Monitoring and Evaluation",
    "Power BI",
    "KoboToolbox",
    "Artificial Intelligence",
    "IT",
    "Programming",
  ],

  authors: [
    {
      name: "Wajeeh Murad AlSultan",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}