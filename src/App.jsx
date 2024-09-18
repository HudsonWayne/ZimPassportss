
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'; 
import Home from './components/home/Home'; 
import PopularDocuments from './components/popular/PopularDocuments'; 
import Reference from './components/reference/Reference';
import Blog from './components/blog/Blog'; 

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/popular_documents" element={<PopularDocuments />} />
                <Route path="/reference" element={<Reference />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </Router>
    );
};

export default App;