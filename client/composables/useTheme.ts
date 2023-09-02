export const useTheme = () => {
  const theme = useState("theme", () => "light")

  const setTheme = (x: "dark" | "light") => {
    theme.value = x
  }

  return {
    theme,
    setTheme,
  }
}
