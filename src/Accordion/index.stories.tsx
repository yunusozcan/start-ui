import React from "react";
import Accordion from "./index";

interface TemplateProps {
  title: string;
}

const Template: React.FC<TemplateProps> = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
        }}
      >
        <Accordion />
      </div>
    </>
  );
};

export const AccordionComponent = Template.bind({});
AccordionComponent.args = { title: "Accordion" };

const Component = {
  title: "UI/Accordion",
  component: AccordionComponent,
};

export default Component;
