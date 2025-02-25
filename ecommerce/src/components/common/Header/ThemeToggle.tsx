import { useAppDispatch, useAppSelector } from "@store/hooks";
import { toggleTheme } from "@store/theme/themeSlice";
import { useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.theme.mode);
  useEffect(() => {
    document.body.className = mode; //light dark
  }, [mode]);
  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "1.5rem",
        color: "inherit",
      }}
      aria-label="Toggle theme"
    >
      {mode === "light" ? <Moon size={24} /> : <Sun size={24} />}
    </button>
  );
};
export default ThemeToggle;