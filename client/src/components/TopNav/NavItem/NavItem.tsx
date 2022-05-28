import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/features/users";
import { persistor } from "../../../redux/store";

interface Props {
  navItemInner?: string | JSX.Element;
  path: string;
  linkClasses: string;
}

const NavItem: FC<Props> = ({ navItemInner, path, linkClasses }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    try {
      console.log("logout");
      dispatch(logoutUser());
      navigate("/");
      persistor.purge();
    } catch (error) {
      console.log(error);
    }
  };

  return navItemInner === "Logout" ? (
    <span className={linkClasses} onClick={() => handleLogout()}>
      {navItemInner}
    </span>
  ) : (
    <Link className={linkClasses} to={path}>
      {navItemInner}
    </Link>
  );
};

export default NavItem;
