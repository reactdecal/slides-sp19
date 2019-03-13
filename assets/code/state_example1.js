class Counter extends React.Component { 
    render() { 
        let current = this.state.count
        return (
            <button onClick={() => this.setState({count: current + 1})}/>
        )
    }
}