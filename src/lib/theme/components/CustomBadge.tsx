const CustomBadge = {
  baseStyle: (colorMode:any ) => ({
    bg: colorMode === "dark" ? "green.300" : "green.500",
    color: colorMode === "dark" ? "gray.800" : "white",
    textTransform: "uppercase",
    fontWeight: "semibold",
    letterSpacing: "0.02em",
    padding: "4px",
    borderRadius: "2px",
    fontSize: "12px",
  }),
}


export default CustomBadge