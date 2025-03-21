import { ThemeProvider } from "@/components/theme-provider";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const robotoSlab = Roboto_Slab({
  style: ["normal"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={robotoSlab.className} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StoreProvider>{children}</StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
