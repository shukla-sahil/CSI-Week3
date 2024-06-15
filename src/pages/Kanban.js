import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-kanban';

const Kanban = () => {
  const data = {
    lanes: [
      {
        id: 'lane1',
        title: 'Planned Tasks',
        label: '2/2',
        cards: [
          { id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', draggable: false },
          { id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' } }
        ]
      },
      {
        id: 'lane2',
        title: 'Completed',
        label: '0/0',
        cards: []
      }
    ]
  };

  return (
    <KanbanComponent dataSource={data.lanes} keyField="id">
      <ColumnsDirective>
        <ColumnDirective keyField="id" headerText="Planned Tasks" />
        <ColumnDirective keyField="id" headerText="Completed" />
      </ColumnsDirective>
      <Inject services={[]} />
    </KanbanComponent>
  );
}

export default Kanban;
