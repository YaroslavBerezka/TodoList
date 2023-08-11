import { useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.scss'
import InputField from './components/InputField'
import TodoList from './components/TodoList'
import { addTodo } from './store/todoSlice'

function App() {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    return (
        <div className="App">
            <InputField
                text={text}
                addTodo={() => dispatch(addTodo({ text }))}
                setText={setText}
            />
            <TodoList />
        </div>
    )
}

export default App
