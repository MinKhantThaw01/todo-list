import { useEffect, useState } from "react"


const TodoFilter = ({ filterBy }) => {

    let [filter, setFilter] = useState('all');

    useEffect(() => {
        filterBy(filter)
    }, [filter, filterBy])
    return (
        <div>
            <button className={`button filter-button ${filter === 'all' ? 'filter-button-active' : ''} `} onClick={() => setFilter('all')}>
                All
            </button>
            <button className={`button filter-button ${filter === 'active' ? 'filter-button-active' : ''}`} onClick={() => setFilter('active')}>Active</button>
            <button className={`button filter-button ${filter === 'completed' ? 'filter-button-active' : ''} `} onClick={() => setFilter('completed')}>Completed</button>
        </div>
    )
}

export default TodoFilter
