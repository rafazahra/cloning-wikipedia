import { BrowserRouter, Switch, Link } from 'react-router-dom';
import Home from './Component/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Link path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
