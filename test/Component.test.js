const Component = require('../Component');

describe('Component', () => {
    it('should throw error when render() method is called', () => {
        const component = new Component([]);
        expect(() => component.render()).toThrow('Child class must implement render() method.');
    });
});