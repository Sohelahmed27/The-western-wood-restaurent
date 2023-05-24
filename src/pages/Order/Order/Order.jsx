import Cover from "../../Shared/Cover/Cover";
import OrderImg from "../../../assets/order/banner2.jpg";

const Order = () => {
  return (
    <div>
      <Cover title="Order Food" img={OrderImg}></Cover>
      <div className="tabs">
        <a className="tab tab-lifted">Tab 1</a>
        <a className="tab tab-lifted tab-active">Tab 2</a>
        <a className="tab tab-lifted">Tab 3</a>
      </div>
    </div>
  );
};

export default Order;
