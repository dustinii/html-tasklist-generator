const Component = require('./Component');


class TaskListItem extends Component {
    constructor (children, priority = false) {
        super(children);
        this.priority = priority;
    }
    render() {
        const priorityLevel = this.priority ? 'tasks-item-priority': '';
        return `<li class="tasks-item ${priorityLevel}">${this.renderInnerHTML()}</li>`
    }
}

module.exports = TaskListItem