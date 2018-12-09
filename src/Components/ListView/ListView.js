import React from 'react';
import List from '../List/List';

function ListView(props) {
  const { taskList } = props;

  return (
    <div>
      {
        taskList.map(
          (task) => {
            return (<List key={task}>{task}</List>);
          }
        )
      }
    </div>
  );
}

export default ListView;
