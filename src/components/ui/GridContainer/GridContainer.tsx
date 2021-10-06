import cn from "classnames";
import React, { FC, ReactNode } from "react";
import { Range } from "../../../types";

type ColSize = Range<1, 13> | "none";
type RowSize = Range<1, 7> | "none";

interface GridContainerProps {
  className?: string;
  children?: ReactNode;
  col?: ColSize;
  smCol?: ColSize;
  mdCol?: ColSize;
  lgCol?: ColSize;
  xlCol?: ColSize;

  row?: RowSize;
  smRow?: RowSize;
  mdRow?: RowSize;
  lgRow?: RowSize;
  xlRow?: RowSize;
}

const GridContainer: FC<GridContainerProps> = ({
  children,
  className,
  col,
  mdCol,
  lgCol,
  smCol,
  xlCol,
  row,
  smRow,
  mdRow,
  lgRow,
  xlRow,
}) => {
  const rootClassName = cn(
    "grid",
    { [`grid-cols-${col}`]: col },
    { [`md:grid-cols-${mdCol}`]: mdCol },
    { [`lg:grid-cols-${lgCol}`]: lgCol },
    { [`sm:grid-cols-${smCol}`]: smCol },
    { [`xl:grid-cols-${xlCol}`]: xlCol },

    { [`grid-rows-${row}`]: row },
    { [`md:grid-rows-${mdRow}`]: mdRow },
    { [`lg:grid-rows-${lgRow}`]: lgRow },
    { [`sm:grid-rows-${smRow}`]: smRow },
    { [`xl:grid-rows-${xlRow}`]: xlRow },
    className,
  );

  return <div className={rootClassName}>{children}</div>;
};

export default GridContainer;
