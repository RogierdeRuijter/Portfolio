import AllProjects from "./AllProjects";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import AllBlogPosts from "./AllBlogPosts";
import "./App.css";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";

const navTabel = [
  { id: 'my-journey-with-web-components', navId: '2024-09-01' }
];

const App = () => {
  const location = useLocation();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [scrollToStart, setScrollToStart] = useState();
  const [scrollId, setScrollId] = useState();

  useEffect(() => {
    if (location.search) {
      const id = location.search.replace('?post=', '');
      const element = document.getElementById(scrollId);

      setScrollId(id);

      if (element) {
        setTimeout(() => {
          setScrollToStart(true);
        }, 1500);
      } else {
        console.log('Element not found');
      }
    }
  }, [location]);

  useEffect(() => {
    if (scrollId && !hasScrolled && !scrollToStart) {
      const element = document.getElementById(navTabel.find(nav => nav.id === scrollId).navId);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [scrollToStart, hasScrolled, scrollId]);


  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(true);
      window.removeEventListener('scroll', handleScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  location.hash;
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AllProjects />} />
        <Route path="blog" element={<AllBlogPosts />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<div />} />
      </Route>
    </Routes>
  );
};

function scrollToFirstH1(heading) {
  // So ugly
  setTimeout(() => {
    const firstH1 = document.querySelector('#root').querySelector(heading);
    if (firstH1) {
      firstH1.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 300);
}

function Layout() {
  return (
    <>
      <nav className="nav">
        <ul className="list">
          <li className="item">
            <Link to="/blog" onClick={() => scrollToFirstH1('h1')}>Blog</Link>
          </li>
          <li className="item">
            <Link to="/" onClick={() => scrollToFirstH1('h2')}>Home</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </>
  );
}

export default App;
