# Identifying APIs for To-Do List App

    Identify and plan the necessary APIs for a To-Do List app.

# Routes and the Endpoints(URL)

## 1. Get the all initial todos

<ul>
    <li>Name: Get all todos</li>
    <li>Endpoint: http://localhost:3000/todos</li>
    <li>Method: GET</li>
    <li>Parameter: None</li>
    <li>Request formate: None</li>
</ul>

    response:
                [
                    {
                        id: "1",
                        title: "Learn GSAP",
                        description: "I'm learning today basics of timeline method",
                        completed: true,
                    },
                    {
                        id: "2",
                        title: "Let's play game",
                        description: "I'm today playing BGMI",
                        completed: false,
                    },
                    {
                        id: "3",
                        title: "Let's learn Rust",
                        description: "Learn Rust at least 1 hour",
                        completed: false,
                    },
                ]

### Description: Geting all the initial todos

## 2. Add todo

<ul>
    <li>Name: Add todo</li>
    <li>Endpoint: http://localhost:3000/todos</li>
    <li>Method: POST</li>
    <li>Parameter: None</li>
    <li>Request formate: JSON</li>
</ul>

    request:
                {
                    id: "4",
                    title: "Let's play cricket",
                    description: "I'm playing cricket with my all friends",
                    completed: false,
                }

    response:
                {
                    success: true,
                    data: [
                        {
                            id: "1",
                            title: "Learn GSAP",
                            description: "I'm learning today basics of timeline method",
                            completed: true,
                        },
                        {
                            id: "2",
                            title: "Let's play game",
                            description: "I'm today playing BGMI",
                            completed: false,
                        },
                        {
                            id: "3",
                            title: "Let's learn Rust",
                            description: "Learn Rust at least 1 hour",
                            completed: false,
                        },
                        {
                            id: "4",
                            title: "Let's play cricket",
                            description: "I'm playing cricket with my all friends",
                            completed: false,
                        },
                    ],
                    message: "Todo added successfully"
                }

### Description: This endpoint appending one new todo inside array

## 3. Toggle todo completed or not

<ul>
    <li>Name: Toggle completed</li>
    <li>Endpoint: http://localhost:3000/todos/:id</li>
    <li>Method: PUT</li>
    <li>Parameter: ID</li>
    <li>Request formate: None</li>
</ul>

    response:
                {
                    success: true,
                    message: "Your task completed",
                }

### Description: This endpoint completing your task. Ex - I'm completed second task

## 4. Update todo

<ul>
    <li>Name: Update todo</li>
    <li>Endpoint: http://localhost:3000/todos/:id</li>
    <li>Method: PUT</li>
    <li>Parameter: ID</li>
    <li>Request formate: JSON</li>
</ul>

    request:
                {
                    title: "Let's play badminton",
                    description: "I'm playing badminton with my friends",
                }

    response:
                {
                    success: true,
                    data: [
                        {
                            id: "1",
                            title: "Learn GSAP",
                            description: "I'm learning today basics of timeline method",
                            completed: true,
                        },
                        {
                            id: "2",
                            title: "Let's play game",
                            description: "I'm today playing BGMI",
                            completed: true,
                        },
                        {
                            id: "3",
                            title: "Let's learn Rust",
                            description: "Learn Rust at least 1 hour",
                            completed: false,
                        },
                        {
                            id: "4",
                            title: "Let's play badminton",
                            description: "I'm playing badminton with my friends",
                            completed: false,
                        },
                    ],
                    message: "Your task updated successfully",
                }

### Description: This endpoint Updating your task. Ex - I'm updating fourth task

## 5. Delete todo

<ul>
    <li>Name: Delete todo</li>
    <li>Endpoint: http://localhost:3000/todos/:id</li>
    <li>Method: DELETE</li>
    <li>Parameter: ID</li>
    <li>Request formate: None</li>
</ul>

    response:
                {
                    success: true,
                    message: "Todo deleted successfully"
                }

### Description: This endpoint provide id then, delete the todo
