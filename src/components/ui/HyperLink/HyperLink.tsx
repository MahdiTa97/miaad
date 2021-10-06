import cn from "classnames";
import Link, { LinkProps } from "next/link";
import React, { FC } from "react";

interface HyperLinkProps extends React.PropsWithChildren<LinkProps> {
  className?: string;
  ariaLabel?: string;
  isDisable?: boolean;
}

const HyperLink: FC<HyperLinkProps> = ({
  href,
  children,
  as,
  passHref,
  className,
  ariaLabel,
  isDisable,
  ...props
}) => {
  const rootClassName = cn(className);
  return (
    <>
      {isDisable ? (
        <>{children}</>
      ) : (
        <Link href={href} as={as} passHref={passHref} {...props}>
          {passHref ? (
            children
          ) : ariaLabel ? (
            <a className={rootClassName} aria-label={ariaLabel}>
              {children}
            </a>
          ) : (
            <a className={rootClassName}>{children}</a>
          )}
        </Link>
      )}
    </>
  );
};

export default HyperLink;
