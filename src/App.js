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

function Layout() {
  return (
    <>
      <nav class="nav">
        <ul class="list">
          <li class="item">
            <Link to="/blog">Blog</Link>
          </li>
          <li class="item">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </>
  );
}

export default App;
