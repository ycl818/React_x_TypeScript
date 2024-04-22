import { NavLink } from "react-router-dom";
import Button from "../Button";

const MainHeader = () => {
  return (
    <>
      <header id="main-header">
        <h1>ReactMentoring</h1>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                end
              >
                Our Mission
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sessions"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Browse Sessions
              </NavLink>
            </li>
            <li>
              <Button onClick={() => {}}>Upcoming Sessions</Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
