import { Outlet } from "react-router-dom";
import MainHeader from "../components/Navigation/MainHeader";
import SessionsContextProvider from "../store/session-context";

export default function Root() {
  return (
    <SessionsContextProvider>
      {/* Todo: Add Header */}
      <MainHeader />
      <Outlet />
    </SessionsContextProvider>
  );
}
