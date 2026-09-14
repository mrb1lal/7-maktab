import "./globals.css";

export const metadata = {
  title: "7-sonli umumta'lim maktabi",
  description:
    "7-sonli umumta'lim maktabi — zamonaviy bilim o'chog'i. Yuqori malakali o'qituvchilar, qulay sharoit va mustahkam kelajak.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}