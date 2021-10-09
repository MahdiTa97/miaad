import cn from "classnames";
import { useTranslation } from "next-i18next";
import React, {
  CSSProperties,
  FunctionComponent,
  JSXElementConstructor,
} from "react";
import s from "./Text.module.css";

interface Props {
  variant?: Variant;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode | any;
  html?: string;
  isTransDisabled?: boolean;
}

type ComponentType =
  | JSXElementConstructor<any>
  | React.ReactElement<any>
  | React.ComponentType<any>
  | string;

type Variant =
  | "heading"
  | "body"
  | "pageHeading"
  | "sectionHeading"
  | "appTitle"
  | "headerLink"
  | "custom"
  | "headerLangSelector";

const Text: FunctionComponent<Props> = ({
  style,
  className = "",
  variant = "custom",
  children,
  html,
  isTransDisabled = false,
}) => {
  const { t } = useTranslation("common");

  const componentsMap: {
    [P in Variant]: React.ComponentType<any> | string;
  } = {
    body: "div",
    heading: "h1",
    pageHeading: "h1",
    sectionHeading: "h2",
    appTitle: "p",
    headerLink: "p",
    custom: "div",
    headerLangSelector: "p",
  };

  const Component: ComponentType = componentsMap![variant!];

  const htmlContentProps = html
    ? {
        dangerouslySetInnerHTML: { __html: html },
      }
    : {};

  const rootCN = cn(s.root, s[variant], className);

  return (
    <Component className={rootCN} style={style} {...htmlContentProps}>
      {isTransDisabled ? children : t(children)}
    </Component>
  );
};

export default Text;
