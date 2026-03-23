```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: Types URL in address bar
    Note right of user: User navigates to Single Page Application
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the CSS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: JavaScript bundle (React/Vue/Angular)
    deactivate server

    Note right of browser: Browser loads and executes JavaScript framework code

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: JSON data: [{ "content": "new note", "date": "2026-03-23" }, ... ]
    deactivate server

    Note right of browser: JavaScript renders content dynamically without page reloa
    
    browser->>user: Displays rendered SPA content


    
