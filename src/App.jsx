import { ThemeProvider } from "@material-tailwind/react";
import CustomFooter from "./components/CustomFooter";
import MobileNav from "./components/MobileNav";

export default function App() {
  const customTheme = {};

  return (
    <ThemeProvider value={customTheme}>
      <MobileNav />

      <CustomFooter />
    </ThemeProvider>
  );
}
