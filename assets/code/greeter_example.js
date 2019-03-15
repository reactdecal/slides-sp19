class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentText: ""
        };
    }

    render() {
        return (
        <div>
            <h1>Hello, {this.state.currentText}</h1>
            <input
                onChange={ev => this.setState({ currentText: ev.target.value })}
                value={this.state.currentText}
            />
        </div>
        );
    }
}