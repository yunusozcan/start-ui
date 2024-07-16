import React from "react";
import s from "./Col.module.scss";
import clsx from "clsx";

interface ColumnProps extends React.AllHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  span?: number;
  columns?: number;
  spanSizes?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  padding?: string;
}

function getWidth(span: number, columns: number) {
  return `${(span / columns) * 100}%`;
}

export default function Column({
  children,
  className = "",
  span = 12,
  columns = 12,
  spanSizes = {},
  padding = "8px",
  style,
  ...rest
}: ColumnProps) {
  const rootClassNames = clsx(s.root, className);

  const { sm, md, lg, xl } = spanSizes;

  const baseWidth = getWidth(span, columns);
  const smWidth = sm ? getWidth(sm, columns) : baseWidth;
  const mdWidth = md ? getWidth(md, columns) : baseWidth;
  const lgWidth = lg ? getWidth(lg, columns) : baseWidth;
  const xlWidth = xl ? getWidth(xl, columns) : baseWidth;

  return (
    <div
      className={rootClassNames}
      style={{
        "--sui-base-width": baseWidth,
        "--sui-sm-width": smWidth,
        "--sui-md-width": mdWidth,
        "--sui-lg-width": lgWidth,
        "--sui-xl-width": xlWidth,
        "--sui-padding": padding,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
