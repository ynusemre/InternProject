import {Container} from "reactstrap";
import {Route, Switch} from "react-router-dom";
import Navi from "../navi/Navi";
import img from './takasbank.png'
import Dashboard from "./Dashboard";
import "./App.css";


function App() {
  return (
    <div style={{backgroundImage: `url(${img})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
    }}>
        <Container>
            <Navi/>
            <Switch>
                <Route path="/" exact component={Dashboard} />
            </Switch>
        </Container>
    </div>
  );
}

export default App;
