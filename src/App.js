import React from "react";
// import Card from "./Components/Card/Card";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import WatchList from "./Components/WatchList/WatchList";
// import DetaliPage from "./Components/MovieDetail/DetaliPage";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Body} />
          <Route exact path="/watchlist" component={WatchList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
