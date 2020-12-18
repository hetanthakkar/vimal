import React from "react";
import { Dimensions } from "react-native";
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
} from "react-navigation";
import Icon from "@expo/vector-icons/Ionicons";
import Login from "./src/views/Login";
import Register from "./src/views/Register";
import Home from "./src/views/drawer";
import Category from "./src/views/Category";
import Detail from "./src/views/Detail";
import Basket from "./src/views/Basket";
import EditBasket from "./src/views/EditBasket";
import Category1 from "./src/views/main2";
import Address from "./src/views/Address";
import Shipping from "./src/views/Shipping";
import Payment from "./src/views/Payment";
import TermsAndConditions from "./src/views/TermsAndConditions";
import CreditCard from "./src/views/CreditCard";
import Filter from "./src/views/filter";
// import CustomDrawerComponent from "./src/components/CustomDrawerComponent";
import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyDn6VEyffIINnzAqX03yGGcRQxcxdjDixQ",
  authDomain: "vimaloptics-aaf3c.firebaseapp.com",
  databaseURL: "https://vimaloptics-aaf3c-default-rtdb.firebaseio.com",
  projectId: "vimaloptics-aaf3c",
  storageBucket: "vimaloptics-aaf3c.appspot.com",
  messagingSenderId: "954630690605",
  appId: "1:954630690605:web:6c18685ebfab693e1ae5a4",
  measurementId: "G-M0K3P32NVQ"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
console.disableYellowBox=true

export default createAppContainer(
  createSwitchNavigator(
    {
      Login,
      Home,
      Filter,
      Register,
      Category,
      Category1,
      Detail,
      Basket,
      EditBasket,
      Address,
      Shipping,
      Payment,
      TermsAndConditions,
      CreditCard,
      // CustomDrawerComponent,
    },
    {
      initialRouteName: "Category",
    }
  )
);
