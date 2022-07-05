import { ChangeEvent, useState } from "react";

import { Trash } from "phosphor-react";

import styles from "./List.module.css";

interface ListProps {
  task: string;
  onCreateTask: (createTask: string) => void;
  onDeleteTask: (deleteTask: string) => void;
}

export function List({ task, onCreateTask, onDeleteTask }: ListProps) {
  const [check, setCheck] = useState(0);

  function handleCreateCheck(event: ChangeEvent<HTMLInputElement>) {
    event?.preventDefault();

    if (event.target.checked) {
      onCreateTask("sum");
      setCheck(1);
    } else {
      onCreateTask("minus");
      setCheck(0);
    }
  }

  function handleDeleteTask() {
    onDeleteTask(task);
  }

  return (
    <div className={styles.list}>
      <input
        className={styles.checkBox}
        type="checkbox"
        name="checkTask"
        onChange={handleCreateCheck}
      />
      <p>{task}</p>
      <button title="Deletar comentário" onClick={handleDeleteTask}>
        <Trash size={20} />
      </button>
    </div>
  );
}
