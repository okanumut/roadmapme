import { Route, Switch, useLocation } from "react-router";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";

//Components
import Main from "./components/Main"; 
import AddRoadPage from "./components/AddRoad"
import FavoritePage from "./components/Favorities"
import SettingsPage from "./components/Settings"
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        {/* <SoundBar /> */}

        {/* For framer-motion animation on page change! */}
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Main} />
            <Route exact path="/add-road" component={AddRoadPage} />
            <Route exact path="/favorities" component={FavoritePage} />
            <Route exact path="/settings" component={SettingsPage} />
            {/* <Route exact path="/about" component={AboutPage} />
            <Route exact path="/blog" component={BlogPage} />
            <Route exact path="/work" component={WorkPage} />
            <Route exact path="/skills" component={MySkillsPage} /> */}
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
