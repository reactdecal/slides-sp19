class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: ""
    };
  }

  componentDidMount() {
    this.getQuote();
  }

  async getQuote() {
    const response = await fetch("https://kanye.rest");
    const responseJson = await response.json();
    this.setState({
      quote: responseJson.quote
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.getQuote()} />
        <p>{this.state.quote}</p>
      </div>
    );
  }
}
