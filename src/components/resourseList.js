import React from "react";
import useResource from './useResources';



const ResourceList = ( {resource} ) => {
  const datas = useResource(resource);

  const showList = () => {
    return datas.map((item) => {
      return <li key={item.id}>{item.title}</li>
    })
  }

  return (
    <div>
      <ul>{showList()}</ul>
    </div>
  );
};

export default ResourceList;
