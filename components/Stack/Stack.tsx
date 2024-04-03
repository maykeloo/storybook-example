import {CSSProperties} from "react";

export function Stack({ children, spacing = 2, direction = "row", wrap = false }: {
  children: React.ReactNode
  spacing?: number
  direction?: "row" | "column"
  wrap?: boolean
}) {
  const style = {
    display: "flex",
    gap: `${spacing * 0.25}rem`,
    flexWrap: wrap ? "wrap" : "nowrap",
    flexDirection: direction,
  } as CSSProperties

  return <div style={style}>{children}</div>
}