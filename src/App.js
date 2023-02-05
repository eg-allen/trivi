import './App.css';


const questions = ["Who is Santa's favorite reindeer?", 
                  "Who invented the airplane?", 
                  "When is St. Patrick's Day?", 
                  "How often should you go to the dentist?", 
                  "How much does a newborn elephant weigh?"];
const listQuestions = questions.map((question) =>
  <li>{question}</li>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>welcome to trivi</h1>
      </header>
      <body>
        <div className="Questions">
          <ul>{listQuestions}</ul>
        </div>
      </body>
    </div>
  );
}

export default App;
