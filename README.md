# ToDo App

This is a simple ToDo app that generates an HTML page with a user's task list. I built this app to learn about object-oriented programming in JavaScript, specifically the use of classes and unit tests. 

## Features

- Add tasks with text and priority
- Generates an HTML page with a task list sorted by priority
- Uses classes to define components of the app
- Includes unit tests to validate the core functionality of each class

## Usage

1. Clone the repository: `git clone https://github.com/your-username/todo-app.git`
2. Install dependencies: `npm install`
3. Run the app: `npm start`
4. Follow the prompts to enter your name and add tasks
5. After completing the prompts, the app will generate an HTML file in the `output` folder

## Dependencies

- Node.js
- Inquirer.js
- Jest

## Testing

To run the unit tests for the classes, use the command `npm test`. This will execute the Jest testing framework and output the results in the console. 

The tests cover the following functionality:
- Component class throws an error when render() is called directly
- Header class correctly renders with the date
- TaskListItem class correctly renders with and without priority
- TaskList class correctly renders a list of TaskListItems

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.