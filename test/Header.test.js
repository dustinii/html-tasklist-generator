const Header = require('../lib/Header');

describe('Header', () => {
    it('renders header with correct title and date', () => {
        const header = new Header();
        const title = 'My Task List';
        const date = 'April 20, 2023';
        const expected = `<header class="header"><h1>Todo Today</h1><p>${new Date().toLocaleDateString()}</p></header>`;

        expect(header.render()).toEqual(expected);
    })
})