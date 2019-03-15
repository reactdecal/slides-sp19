<div>
    <h1>Hello, {this.state.currentText}</h1>
    <div className="ui input">
        <input
        placeholder="Enter your name..."
        onChange={ev => this.setState({ currentText: ev.target.value })}
        value={this.state.currentText}
        />
    </div>
</div>
