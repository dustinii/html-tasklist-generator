const Component = require('./Component');

class TaskList extends Component {
    constructor(children) {
        super(children);
    }

    render() {
        return `<ul class="tasks">${this.renderInnerHTML()}</ul>`;
    }
}

module.exports = TaskList;