import { DetailedHTMLProps, HTMLAttributes } from "react";

interface IProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Sidebar: React.FC<IProps> = ({ ...props }) => {
  return <aside {...props}>Sidebar</aside>;
};
