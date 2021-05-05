import ReactDOM from "react-dom"
import Menu from "./menu"
import './CSS/reset.css';
import './CSS/style.css';

function App(props) {
    return (
        <>
            <Menu />
        </>
    );
}
ReactDOM.render(<App/>, document.querySelector('.root'));