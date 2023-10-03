/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import { Todo } from './components/Todo'
import Header from './components/Header'
import { BgDark } from './components/BgDark'
import { ThemeContext } from './contexts/theme-context'
import { useState } from 'react'
import { Wrapper } from './components/Wrapper'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import TodoForm from './components/TodoForm'
import TodoContent from './components/TodoContent'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'
import { todosList } from './data/todos'
import TodoFIlters from './components/TodoFIlters'

function App() {
    const [theme, setTheme] = useState('dark')

    const [todos, setTodos] = useState(todosList)

    console.log(todos)

    const handelAddNewTodo = (newTodo) => {
        setTodos([...todos, newTodo])
    }

    function handleDeleteTodo(id) {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    function handleChangeTodo(id) {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isCompleted: !todo.isCompleted }
                }
                return todo
            })
        )
    }

    function handleClearComplete() {
        setTodos(todos.filter((todo) => !todo.isCompleted))
    }

    function handleSortByCompleted() {
        const sortedTodos = [...todos].sort((a, b) => {
            if (a.isCompleted && !b.isCompleted) return -1
            if (!a.isCompleted && b.isCompleted) return 1
            return 0
        })

        setTodos(sortedTodos)
    }

    function handleSortByActive() {
        const sortedTodos = [...todos].sort(
            (a, b) => a.isCompleted - b.isCompleted
        )
        setTodos(sortedTodos)
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className="App">
                <div className={`theme-${theme}`}></div>
                <Wrapper>
                    <Main>
                        <BgDark />
                        <div className="card__container">
                            <Todo>
                                <Header />
                                <TodoForm onAddNewTodo={handelAddNewTodo} />
                                <TodoContent>
                                    <TodoList todos={todos}>
                                        {todos.map((todo, index) => (
                                            <TodoItem
                                                todo={todo}
                                                key={todo.id}
                                                index={index}
                                                onDeleteTodo={handleDeleteTodo}
                                                onChangeTodo={handleChangeTodo}
                                            />
                                        ))}
                                    </TodoList>
                                    <TodoFIlters
                                        todos={todos}
                                        onClearComplete={handleClearComplete}
                                        onSortByCompleted={
                                            handleSortByCompleted
                                        }
                                        onSortByActive={handleSortByActive}
                                    />
                                </TodoContent>
                            </Todo>
                        </div>
                    </Main>
                    <Footer>
                        <div className="footer__container">
                            <div class="attribution">
                                Challenge by
                                <a
                                    href="https://www.frontendmentor.io?ref=challenge"
                                    target="_blank"
                                >
                                    Frontend Mentor
                                </a>
                                . Coded by <a href="#">eescan</a>.
                            </div>
                        </div>
                    </Footer>
                </Wrapper>
            </div>
        </ThemeContext.Provider>
    )
}

export default App
