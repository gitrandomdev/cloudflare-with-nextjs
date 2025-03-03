import React from 'react'

interface DataType {
    userId: number,
    title: string,
    body: string,
    id: number
}


export default async function ServerlessPage() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")

    const data = await response.json()

    return (
        <div>
            {
                data.map((item: DataType, i: number) => {
                    return <div key={i}>
                        <span>{item.id}</span>
                        <h1>{item.title}</h1>
                        <p>{item.body}</p>
                    </div>
                })
            }
        </div>
    )
}


