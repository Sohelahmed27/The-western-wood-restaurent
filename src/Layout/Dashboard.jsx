import {
  FaBars,
  FaBook,
  FaCalendarAlt,
  FaHome,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

//TODO: load data from server 
// const isAdmin = true;
const [isAdmin] = useAdmin();
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-yellow-600">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80  text-base-content">

        {
          isAdmin? <>
          <li>
            <NavLink to="/dashboard/home">
              <FaHome></FaHome>Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservations">
              <FaUtensils></FaUtensils>Add Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              <FaWallet></FaWallet>Manage Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              <FaBook></FaBook>Manage Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/allusers">
              <FaUsers></FaUsers>All Users
            </NavLink>
          </li>
          
          </>
          :
          <>
          <li>
            <NavLink to="/dashboard/home">
              <FaHome></FaHome>User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservations">
              <FaCalendarAlt></FaCalendarAlt>Reservations
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              <FaWallet></FaWallet>Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/mycart">
              {" "}
              <FaShoppingCart></FaShoppingCart>
              <div className="">
              My Cart
                <div className="badge badge-secondary mx-2">{cart.length || 0}</div>
              </div>
              
            </NavLink>
          </li>
          </>
        }
          
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaBars></FaBars> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">Order Food</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
