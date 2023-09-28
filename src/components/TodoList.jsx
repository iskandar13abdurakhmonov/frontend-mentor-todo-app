import './TodoList.scss'

export default function TodoList({ todos, children }) {
    return (
        <>{todos.length > 0 ? <ul className="todo-list">{children}</ul> : ''}</>
    )
}
