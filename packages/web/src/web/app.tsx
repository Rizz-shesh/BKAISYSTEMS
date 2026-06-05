import { Route, Switch } from "wouter";
import Index from "./pages/index";
import About from "./pages/about";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import { Provider } from "./components/provider";

function App() {
	return (
		<Provider>
			<Switch>
				<Route path="/" component={Index} />
				<Route path="/about" component={About} />
				<Route path="/blog" component={Blog} />
				<Route path="/contact" component={Contact} />
			</Switch>
		</Provider>
	);
}

export default App;
