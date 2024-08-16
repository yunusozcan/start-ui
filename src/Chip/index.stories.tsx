import React from "react";
import Chip from "./index";
import type { TemplateProps } from "./types";

const Template: React.FC<TemplateProps> = (args) => {
  const { title, ...rest } = args;

  return (
    <>
      <h2>{title}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
        }}
      >
        <Chip {...rest} color="primary" />
        <Chip {...rest} color="secondary" />
        <Chip {...rest} color="info" />
        <Chip {...rest} color="warning" />
        <Chip {...rest} color="success" />
        <Chip {...rest} color="error" />
      </div>
    </>
  );
};

export const ChipComponent = Template.bind({});
ChipComponent.args = { title: "Chip", children: "Chip", className: "" };

const Component = {
  title: "UI/Chip",
  component: ChipComponent,
};

export default Component;
