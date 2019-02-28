const GreetingList = (props) => { 
    let names = ["Aivant", "Ethan", "John Denero"]
    let greetings = names.map((name) => (
        <Greeting name={name}/>
    ));
    return (
        <div>
            <h1>Greeting List!</h1>
            {greetings}
        </div>
    );
}