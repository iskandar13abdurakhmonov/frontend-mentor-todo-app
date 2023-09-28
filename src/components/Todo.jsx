import './Todo.scss'

export function Todo({ children }) {
    return (
        <section
            className="todo"
            style={{ zIndex: 10 }}
        >
            {children}
        </section>
    )
}
