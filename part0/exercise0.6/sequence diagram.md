```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    Note right of user: User wants to create a new note

    user->>browser: Types text in input field
    user->>browser: Clicks Save button

    Note right of browser: JavaScript prevents default form submission (e.preventDefault())

    browser->>browser: Creates note object with content and date
    browser->>browser: Adds note to local notes array
    browser->>browser: Re-renders notes list without page reload

    Note right of browser: Note appears immediately in UI (user interface)

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note right of server: Server saves note to database
    server-->>browser: HTTP 201 Created (JSON response)
    deactivate server

    Note right of browser: Note successfully saved to server
