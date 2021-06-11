import "./App.css";
// import LandingPage from "./pages/Landing_page/landingPage";
import UserDashboard from "./pages/user_dashboard_apge/user_dashboard";
import SimplePopover from "./test";
import Createproject from "./pages/Create-project-page/Create-project";
import CSSGrid from "./test";
import LandingPage from "./pages/Landing_page/landingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route path="/userDashboard" component={UserDashboard} />
        <Route path="/createProject" component={Createproject} />

        {/* <LandingPage /> */}
        {/* <UserDashboard /> */}
        {/* <CSSGrid /> */}
        {/* <Createproject /> */}
      </div>
    </Router>
  );
}

export default App;
