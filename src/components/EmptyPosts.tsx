
import { Clipboard, ClipboardText } from 'phosphor-react'

import styles from './EmptyPosts.module.css';

export function EmptyPosts() {
    return (
        <div className={styles.empty}>
            <Clipboard size={80} />
                <p className={styles.emptyInfo}>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    );
}