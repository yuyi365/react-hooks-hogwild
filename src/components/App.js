import React from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogHolder from "./HogHolder";

const App = () => {

	return (
		<div className="App">
			<Nav />
			<HogHolder hogs={hogs}/>
		</div>
	);
}

export default App;
