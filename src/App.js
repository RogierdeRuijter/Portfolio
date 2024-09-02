import AllProjects from "./AllProjects";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import AllBlogPosts from "./AllBlogPosts";
import "./App.css";

const App = () => {
  return (
    <>
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
    </>
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
