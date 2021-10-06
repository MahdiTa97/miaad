import cn from "classnames";
import React, { FC, ReactNode } from "react";
import { Range } from "../../../types";

type ColSize = Range<1, 13> | "full" | "auto";
type RowSize = Range<1, 7> | "full" | "auto";

interface GridProps {
  children?: ReactNode;
  className?: string;
  col?: ColSize;
  lgCol?: ColSize;
  mdCol?: ColSize;
  smCol?: ColSize;
  xlCol?: ColSize;

  row?: RowSize;
  lgRow?: RowSize;
  mdRow?: RowSize;
  smRow?: RowSize;
  xlRow?: RowSize;
}

const Grid: FC<GridProps> = ({
  children,
  className,
  col,
  lgCol,
  mdCol,
  smCol,
  xlCol,
  row,
  lgRow,
  mdRow,
  smRow,
  xlRow,
}) => {
  const rootClassName = cn(
    {
      [sizeReducer(col, "default", "col")]: col,
    },
    { [sizeReducer(mdCol, "md", "col")]: mdCol },
    { [sizeReducer(lgCol, "lg", "col")]: lgCol },
    { [sizeReducer(smCol, "sm", "col")]: smCol },
    { [sizeReducer(xlCol, "xl", "col")]: xlCol },

    {
      [sizeReducer(row, "default", "row")]: row,
    },
    { [sizeReducer(mdRow, "md", "row")]: mdRow },
    { [sizeReducer(lgRow, "lg", "row")]: lgRow },
    { [sizeReducer(smRow, "sm", "row")]: smRow },
    { [sizeReducer(xlRow, "xl", "row")]: xlRow },

    className,
  );

  return <div className={rootClassName}>{children}</div>;
};

export default Grid;

function sizeReducer(
  size: ColSize,
  breakpoint: "md" | "lg" | "sm" | "xl" | "default",
  type: "col" | "row",
) {
  if (breakpoint === "default") {
    return size === "auto" ? `${type}-auto` : `${type}-span-${size}`;
  } else {
    return size === "auto"
      ? `${breakpoint}:${type}-auto`
      : `${breakpoint}:${type}-span-${size}`;
  }
}
