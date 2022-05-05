import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ActionType } from "../../../redux/constants/actionTypes";

interface Props {
  navItemInner: any;
  path: string;
  linkClasses: string;
}

const NavItem: FC<Props> = ({ navItemInner, path, linkClasses }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    try {
      dispatch({ type: ActionType.LOGOUT });
      // dispatch({ type: RESET_CART });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return navItemInner === "Logout" ? (
    <span className={linkClasses} onClick={handleLogout}>
      {navItemInner}
    </span>
  ) : (
    <Link className={linkClasses} to={path}>
      {navItemInner}
    </Link>
  );
};

export default NavItem;
