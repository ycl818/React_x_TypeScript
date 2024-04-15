import { type ElementType } from "react";

type ContainerProps = {
  as: ElementType;
};

const Container = ({ as: Component }: ContainerProps) => {
  // const Component = as; 也可以這樣用

  return <Component />;
};

export default Container;
