import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  navItemInner: any;
  path: string;
  linkClasses: string;
}

const NavItem: FC<Props> = ({ navItemInner, path, linkClasses }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logout");
    navigate("/");
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
