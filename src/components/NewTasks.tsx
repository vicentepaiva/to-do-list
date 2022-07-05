import { ChangeEvent, FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';

import { List } from './List';
import { EmptyPosts } from './EmptyPosts';

import styles from './NewTasks.module.css';




export function NewTasks() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [newTextTask, setNewTextTask] = useState('');
    const [doneTask, setDoneTask] = useState(0);
    const emptyTask = tasks.length === 0;

    let id = 0;

        function handleCreateNewTasks(event: FormEvent) {
            event?.preventDefault()


            setTasks([...tasks, newTextTask]);
            setNewTextTask('');
        }

        function handleNewTasks(event: ChangeEvent<HTMLInputElement>) {
          setNewTextTask(event.target.value)
        }

        function completedTask(completedTask: string) {
            if(completedTask === "sum") {
                setDoneTask((state) => {
                    return state + 1
                })
            } else if (completedTask === "minus") {
                setDoneTask((state) => {
                    return state - 1
                })
            }
        }
        function deletedTask( deletedTask: string) {
            const taskWithoutDeletedOne = tasks.filter((task) => {
                return task !== deletedTask
            })
            setTasks(taskWithoutDeletedOne)
        }

        const isNewCreateTextEmpty = newTextTask.length === 0;

    return(
            <div>
                <form className={styles.newTask} onSubmit={handleCreateNewTasks}>
                    <div className={styles.textNewTask}>
                    <input  type="text" placeholder="Adicione uma nova tarefa" onChange={handleNewTasks} value={newTextTask}/>
                    </div>
                <div className={styles.buttonNewTask} >
                <button  
                type="submit" 
                disabled={isNewCreateTextEmpty}
                >
                     <strong>Criar</strong> 
                    <PlusCircle size={15}  />
                </button>
                </div>
                </form>
                <main  className={styles.tasks}>
                    <div className={styles.info}>
                        <span className={styles.createdTasks}>Tarefas Criadas<div className={styles.Quantidy}>{tasks.length}</div></span>
                        <span className={styles.finishedTasks}>Concluidas<div className={styles.Quantidy}></div>{doneTask}</span>
                    </div>
                    {emptyTask ? <EmptyPosts /> : tasks.map(task => {
                        return (
                            <List
                                key={task}
                                task={task}
                                onCreateTask={completedTask}
                                onDeleteTask={deletedTask}
                            />

                        )
                        })}
                
                </main>
            </div>           
        
    );
}