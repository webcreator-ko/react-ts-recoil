import React, { useState } from 'react';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { addTitleState } from '@/states/addTitleState';
import './inputTask.css';

const getKey = () => Math.random().toString(32).substring(2); // 0〜1未満の乱数字を取得して、数字を32進法に文字列に変換。前から３番目から文字を抽出

const InputTask = () => {
  const [title, setTitle] = useState('');
  // const addTitle = useRecoilValue(addTitleState);
  // const setAddTitle = useSetRecoilState(addTitleState);

  const [addTitle, setAddTitle] = useRecoilState(addTitleState);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const handleClick = () => {
    setAddTitle([...addTitle, { id: getKey(), title }]);
    setTitle('');
  };

  return (
    <div className="inputField">
      {/* 再レンダリングは1度だけ */}
      <input
        className="inputTitle"
        type="text"
        onChange={onChange}
        value={title}
      />
      <button type="button" onClick={handleClick} className="addButton">
        追加
      </button>
    </div>
  );
};

export default InputTask;
