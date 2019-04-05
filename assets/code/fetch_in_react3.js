class PokedexEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null,
      err: null
    };
  }

  async fetchPokemonInfo() {
    if (!this.props.name) {
      return;
    }
    const resp = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${this.props.name}`
    );
    if (!resp.ok) {
      this.setState({ err: "Error!" });
    } else {
      const json = await resp.json();
      this.setState({ info: json, err: null });
    }
  }

  componentDidMount() {
    this.fetchPokemonInfo();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      this.fetchPokemonInfo();
    }
  }

  render() {
    if (!this.state.info || this.state.err) {
      return null;
    }
    return (
      <div className="ui container">
        <h1>{this.state.info.name}</h1>
        <img src={this.state.info.sprites.front_default} />
      </div>
    );
  }
}
