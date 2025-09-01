# Todo App

A modern, responsive Todo application built with React and CSS Modules. This project demonstrates modular component design, a clean UI, and a user-friendly experience.

## Features

- Add, complete, and delete tasks
- Search/filter tasks in real time
- Responsive design for all devices
- Modern card-based UI with gradients and shadows
- Header with logo and embedded search bar
- Task statistics card (total and completed)
- Notifications for task actions (create, delete, clear)
- Confirmation dialog before deleting a task
- All styles via CSS Modules
- Scrollbar appears only when tasks exceed the visible area

## Project Structure

```
index.html
package.json
vite.config.js
src/
  App.jsx
  App.module.css
  main.jsx
  assets/
    logo.svg
  Components/
    Header.jsx
    Header.module.css
    Todo.jsx
    Todo.module.css
    TodoList.jsx
    TodoItems.jsx
    TodoItems.module.css
    Form.jsx
    Notification.jsx
    Notification.module.css
    SearchBar.jsx
    TodoStats.jsx
    TodoStats.module.css
```

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the development server:**
   ```sh
   npm run dev
   ```
3. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal)

## Customization

- Update the logo in `src/assets/logo.svg`.
- Tweak styles in the respective `.module.css` files for each component.

## Built With

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- CSS Modules

## License

This project is open source and available under the [MIT License](LICENSE).
