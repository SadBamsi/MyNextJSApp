import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { Menu } from "../Menu";

interface IProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Sidebar: React.FC<IProps> = ({ ...props }) => {
  return (
    <aside {...props}>
      <Menu />
    </aside>
  );
};
