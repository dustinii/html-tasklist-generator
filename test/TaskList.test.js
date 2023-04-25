const TaskListItem = require('../lib/TaskListItem');

describe('TaskListItem', () => {
  describe('render', () => {
    it('should render the correct HTML for a non-priority task', () => {
      const task = new TaskListItem('Do the laundry');
      expect(task.render()).toBe('<li class="tasks-item">Do the laundry</li>');
    });

    it('should render the correct HTML for a priority task', () => {
      const task = new TaskListItem('Finish project', true);
      expect(task.render()).toBe('<li class="tasks-item tasks-item-priority">Finish project</li>');
    });
  });
});