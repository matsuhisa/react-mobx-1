import { ToDo } from './ToDo';

function App() {
  return (
    <>
      {[...Array(10)].map((_, index) => <ToDo key={index} />)}
    </>
  );
}

export default App;
