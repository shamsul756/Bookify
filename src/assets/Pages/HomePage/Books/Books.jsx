import React, { useContext } from "react";
import { BookContext } from "../../../../Context/HomeContext";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadBooks from "../../../Components/ListedBooks/ListedReadBooks";
import ListWishListBooks from "../../../Components/ListedBooks/ListWishListBooks";

const Books = () => {
    

    return (
        <div className="container mx-auto">
   
      
        <Tabs>
    <TabList>
      <Tab> Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
    <ListedReadBooks/>
    </TabPanel>
    <TabPanel>
     <ListWishListBooks/>
    </TabPanel>
  </Tabs>
    </div>  
    );
};

export default Books;