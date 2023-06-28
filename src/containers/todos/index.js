import * as React from 'react'
import {useGetTodoByIdQuery} from "../../services/test";

export default function Todos() {
    const { data, error, isLoading } = useGetTodoByIdQuery(1)

    return (
        <div className="App">
            <h2>TODOS</h2>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    <h3>{data.title} - {data.id}</h3>
                </>
            ) : null}
        </div>
    )
}