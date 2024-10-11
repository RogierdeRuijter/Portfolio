import AllProjects from "./AllProjects";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import AllBlogPosts from "./AllBlogPosts";
import JourneyWebcomponents from "./posts/1-FirstPost";
import PopoverApiWebcomponent from "./posts/2-UseCaseWebcomponent";
import DetailCanIUse from "./posts/3-one-detail-can-i-use";
import "./App.css";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";

const navTabel = [
  { id: 'my-journey-with-web-components', navId: '2024-09-01' },
  { id: 'i-found-a-fantastic-use-case-for-a-web-component-the-popover-api', navId: '2024-09-09' },
  { id: '1-very-important-detail-about-caniusecom', navId: '2024-10-12' }
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

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AllProjects />} />
        <Route path="blog" element={<AllBlogPosts />} />
        <Route path={`blog/${navTabel[0].id}`} element={<JourneyWebcomponents />} />
        <Route path={`blog/${navTabel[1].id}`} element={<PopoverApiWebcomponent />} />
        <Route path={`blog/${navTabel[2].id}`} element={<DetailCanIUse />} />
        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<div />} />
      </Route>
    </Routes>
  );
};

function Layout() {
  return (
    <>
      <nav className="nav">
        <ul className="list">
          <li className="item">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="item">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
