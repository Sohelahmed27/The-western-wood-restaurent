import Cover from "../../Shared/Cover/Cover";
import OrderImg from "../../../assets/order/banner2.jpg";import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";

import OrderTab from "../OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";



const Order = () => {
  const categories = ['salad', 'pizza', 'soup','dessert', 'drinks']
  const {category} =useParams()
  const initialIndex = categories.indexOf(category)
  console.log(category)
 
  const [tabIndex, setTabIndex] =useState( initialIndex)
  const [menu] = useMenu([])
  
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  
  
  return (
    <div>
    <Helmet>
      <title>Western Wood || Food Order</title>
    </Helmet>
      <Cover title="Order Food" img={OrderImg}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) =>setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>Dessert</Tab>
    <Tab>Drinks</Tab>
  </TabList>
  <TabPanel>
    <OrderTab items={salad}></OrderTab>
  </TabPanel>
  <TabPanel>
    <OrderTab items={pizza}></OrderTab>
  </TabPanel>
  <TabPanel>
    <OrderTab items={soup}></OrderTab>
  </TabPanel>
  <TabPanel>
    <OrderTab items={dessert}></OrderTab>
  </TabPanel>
  <TabPanel>
    <OrderTab items={drinks}></OrderTab>
  </TabPanel>
 
</Tabs>
    </div>
  );
};

export default Order;
