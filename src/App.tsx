import { useState } from "react";
import "../styles/App.scss";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

function App() {
  const [count, setCount] = useState(0);

  const pages = ["/", "/users", "/items"]

  const path = useLocation().pathname

  const home = "links " + (path == "/" ? "active" : "");
  const user = "links " + (path == "/users" ? "active" : "");
  const item = "links " + (path == "/items" ? "active" : "");


  return (
    <>
      <nav className="main-nav">
        <Link className="logo" to="/">
          <Icon icon="carbon:cube" />
        </Link>
      </nav>
      <nav className="side-nav">
        <Link className="logo" to="/">
          <Icon icon="carbon:cube" />
        </Link>
        <div className="separator" />
        <Link className={home} to="/">
          <Icon icon="ci:home-outline" />
        </Link>
        <Link className={item} to="items">
          <Icon icon="ci:file-blank-outline" />
        </Link>
        <Link className={user} to="users">
          <Icon icon="ci:user-square" />
        </Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
