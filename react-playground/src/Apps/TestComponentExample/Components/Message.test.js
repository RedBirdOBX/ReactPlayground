// import the component you wish to test
import Message from './Message';

describe("When setting up testing", () =>
{
    let result = null;

    // run this before others
    beforeAll(() =>
    {
        result = Message({ Greeting: "This is a test", Pocket1: 1, Pocket2: 2 });
    });

    // basic example
    it("should fail", () =>
    {
        expect(1+1).toBe(2);
    });

    it("Message should have a greeting", () =>
    {
        expect(result).not.toBeNull();
    });

    it("Message should have a greeting", () =>
    {
        console.log(result);
        expect(result).not.toBeNull();
    });

    it("Has children", () =>
    {
        console.log(result.props);
        expect(result.props.children).not.toBeNull();

        // this works too
        expect(result.props.children.length > 1).toBeTruthy();
    });
});