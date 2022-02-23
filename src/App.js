import { ThemeProvider } from "styled-components"
import { Route, Switch, useLocation } from "react-router"
import GlobalStyle from "./globalStyles"
import {lightTheme} from './components/Themes'
import Main from './components/Main'
import AboutPage from './components/AboutPage'
import BlogPage from './components/BlogPage'
import MySkillsPage from './components/MySkillsPage'
import WorkPage from './components/WorkPage'
import { AnimatePresence } from "framer-motion"
import SoundBar from "./subComponents/SoundBar"

function App() {

  const location = useLocation();
  return <>
  <GlobalStyle/>

  <ThemeProvider theme={lightTheme}>
    <SoundBar />

    <AnimatePresence exitBeforeEnter>
    <Switch location={location} key={location.pathname}>
    <Route exact path="/" component={Main}/>
    <Route exact path="/about" component={AboutPage}/>
    <Route exact path="/blog" component={BlogPage}/>
    <Route exact path="/skills" component={MySkillsPage}/>
    <Route exact path="/work" component={WorkPage}/>
  </Switch>
    </AnimatePresence>
  </ThemeProvider>
   
    </>
}

export default App

