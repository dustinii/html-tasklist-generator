const Component = require('./Component')
const { formatDate } = require('./date');

class Header extends Component {
    // constructor(children) {
    //     super(children);
    // }

    render() {
        const date = formatDate(new Date());
        return `<header class="header"><h1>Todo Today</h1><p>${formatDate(new Date())}</p></header>`;
    }
}

module.exports = Header;