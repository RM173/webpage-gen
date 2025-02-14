import React from 'react';
import Subcomponent from './Subcomponent';
import './ParentComponent.css';

const ParentComponent = () => {
  return (
    <div className="parent-component">
      <Subcomponent title="Title 1" content="This is the content for subcomponent 1." />
      <Subcomponent title="Title 2" content="This is the content for subcomponent 2." />
      <Subcomponent title="Title 3" content="This is the content for subcomponent 3." />
      <Subcomponent title="Title 4" content="This is the content for subcomponent 4." />
      <Subcomponent title="Title 5" content="This is the content for subcomponent 5." />
      <Subcomponent title="Title 6" content="This is the content for subcomponent 6." />
    </div>
  );
}

export default ParentComponent;