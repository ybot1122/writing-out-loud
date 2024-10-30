import { Link, Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={`posts/1`}>post1</Link>
          </li>
          <li>
            <Link to={`posts/2`}>post2</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default Root;
