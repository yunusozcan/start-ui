import React from "react";
import Popover from "./index";

interface TemplateProps {
  title: string;
}

const Template: React.FC<TemplateProps> = (args) => {
  return (
    <>
      <h2>{args.title}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
        }}
      >
        <Popover />
      </div>
    </>
  );
};

export const PopoverComponent = Template.bind({});
PopoverComponent.args = { title: "Popover" };

const Component = {
  title: "UI/Popover",
  component: PopoverComponent,
};

export default Component;