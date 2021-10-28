import { DetailedHTMLProps, HTMLAttributes } from "react";

interface IProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement> {}

export const Header: React.FC<IProps> = ({ ...props }) => {
  return <header {...props}>Header</header>;
};
