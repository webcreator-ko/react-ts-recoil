import React from 'react';
import { useRecoilValue } from 'recoil';
import { addTitleState, addTitleStateLength } from '@/store/addTitleState';
import './addTask.css';
import { Tasks } from '@/types/tasks';

const AddTask = () => {
  const addTitle = useRecoilValue(addTitleState);
  const addTitleLength = useRecoilValue(addTitleStateLength);

  return (
    <div className="taskField">
      <div>{addTitleLength}個のタスクがあります</div>
      <ul>
        {addTitle.map((task: Tasks) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddTask;
