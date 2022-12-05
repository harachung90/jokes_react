import './App.css';
import Jokes from "./Jokes";
import JokesData from "./JokesData";
import jokesData from "./JokesData";

function App() {
    const jokeElement = jokesData.map(joke => {
        return <Jokes
            setup={joke.setup}
            punchline={joke.punchline}
        />
    })

  return (
    <div className="App">
        {jokeElement}
{/*        <Jokes
            punchline="It's hard to explain puns to kleptomaniacs because they always take things literally."
            isPun={true}
            upvotes={10}
            downvotes={2}
            comments={[{author: "", body: "", title: ""}]}
        />
        <Jokes
            setup="I got my daughter a fridge for her birthday."
            punchline="I can't wait to see her face light up when she opens it."
            isPun={false}
        />
        <Jokes
            setup="How did the hacker escape the police?"
            punchline="He just ransomware!"
            isPun={true}
        />
        <Jokes
            setup="Why don't pirates travel on mountain roads?"
            punchline="Scurvy."
            isPun={true}
        />*/}
    </div>
  );
}

export default App;
