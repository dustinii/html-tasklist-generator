const TaskListItem = require('../lib/TaskListItem');

describe('TaskListItem', () => {
    it('renders the list item correctly', () => {
        const task = new TaskListItem(['Task 1']);
        const html = task.render();

        expect(html).toContain('<li class="tasks-item">Task 1 </li>');
    });
    it('renders with priority class when priority is true', () => {
        const task = new TaskListItem(['Task 1'], true);
    const html = task.render();

    expect(html).toContain('<li class="tasks-item tasks-item-priority">Task 1</li>');
    })
}
)