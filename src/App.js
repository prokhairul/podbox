import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './components/aboutPage/AboutPage';
import EpisodePage from './components/EpisodePage/EpisodePage';
import MainHome from './components/MainHome/MainHome';
import NotFound from './components/NotFound/NotFound';
import ArticlePage from './components/articlePage/ArticlePage';
import SingleArticle from './components/articlePage/SingleArticle';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainHome />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/episodes' element={<EpisodePage />}></Route>
        <Route path='/articles' element={<ArticlePage />}></Route>
        <Route path='/article' element={<SingleArticle/>}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
