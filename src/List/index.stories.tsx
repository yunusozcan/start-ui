import React from "react";
import List from "./index";

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
        <List />
      </div>
    </>
  );
};

export const ListComponent = Template.bind({});
ListComponent.args = { title: "List" };

const Component = {
  title: "UI/List",
  component: ListComponent,
};

export default Component;