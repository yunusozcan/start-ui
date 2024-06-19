import React from 'react';

import Progress from './index';

const Template = (args) => {
  return (
    <>
      <h2>{args.title}</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: 'column',
        }}
      >
        <Progress />
      </div>
    </>
  );
};

export const ProgressComponent = Template.bind({});
ProgressComponent.args = { title: 'Progress' };

const Component = {
  title: 'UI/Progress',
  component: ProgressComponent,
};

export default Component;
