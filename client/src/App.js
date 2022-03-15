import Header from './components/Header';
import Notes from './components/Notes';

function App() {
  const sampleData = [{ 
    name: 'Mark',
    createdOn: 'Mar 11th, 2022 (9:35 pm)',
    project: 'Trinity Web Application',
    yesterday: '',
    today: 'Testing the API endpoint using Postman',
    impediments: 'None',
  }];
  return (
    <div className="App">
      <Header />
      <Notes notes={sampleData} />
    </div>
  );
}

export default App;
