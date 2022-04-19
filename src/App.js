import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import GlobalContext from './context/global/context';

function App() {
  const { entities: { organization: { methods } }, globalState: { organization: { organizations } } } = useContext(GlobalContext);

  return (
    <div className="App">
      <header className="App-header">
        {
          console.log(organizations)

        }
        <button onClick={() => methods.createOrganization({ name: 'test' })}>test create</button>
        {organizations.map(org => {
          <>
            <>{console.log(org.name)}</>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              listing
            </a>
          </>
        })}


      </header>
    </div>
  );
}

export default App;
