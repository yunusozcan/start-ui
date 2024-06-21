import React from "react";
import Alert from "./index";

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
        <Alert />
      </div>
    </>
  );
};

export const AlertComponent = Template.bind({});
AlertComponent.args = { title: "Alert" };

const Component = {
  title: "UI/Alert",
  component: AlertComponent,
};

export default Component;