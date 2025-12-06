export const metadata = {
  title: "Water Bottle Store",
  description: "Eco-friendly water bottles with unique branding and sustainable design."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}