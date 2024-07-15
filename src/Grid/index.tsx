import React, { forwardRef } from "react";
import s from "./Grid.module.scss";
import clsx from "clsx";
import type { GridProps } from "./types";

const Index = forwardRef<HTMLDivElement, GridProps>((props, ref) => {
  const { children, rootClassName = "", breakpoints = {}, style, ...rest } = props;
  const rootClassNames = clsx(s.root, rootClassName);

  const {
    smMinWidth = "576px",
    mdMinWidth = "768px",
    lgMinWidth = "992px",
    xlMinWidth = "1200px",
  } = breakpoints;

  return (
    <div
      className={rootClassNames}
      ref={ref}
      style={{
        "--sm-min-width": smMinWidth,
        "--md-min-width": mdMinWidth,
        "--lg-min-width": lgMinWidth,
        "--xl-min-width": xlMinWidth,
        ...style
      }}
      {...rest}
    >
      {children}
    </div>
  );
});

Index.displayName = "Grid";

export default Index;
