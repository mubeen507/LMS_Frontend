import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Auth from "./Authinticate/auth";
import Dashboard from "../pages/Dashboard";
import Myclassroomcourses from "../pages/MyClassroom/Myclassroomcourses";
import Header from "../pages/Header";
import CourseActivity from "./MyClassroom/courseactivity";
import Course from "./Course";
import OrderDetails from "./orderdetails";
import Profile from "./MyProfile/Profile";
import Footer from "./footer";
import { meInfo, setIsLoggedIn } from "../Store/actions/userActions";
import instance from "../services/index";
import OrderCheckout from "./ordersCheckout";
// import {show} from "../Store/actions/userActions"

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state?.isLoggedIn);

  useEffect(() => {
    studentMe();
  }, []);

  const studentMe = async () => {
    if (localStorage.getItem("token")) {
      try {
        const res = await instance.get("/student/me");
        dispatch(setIsLoggedIn(true));
        dispatch(meInfo(res));
      } catch (error) {
        console.log(error.res);
      }
    }
  };

  // dispatch(show(token))
  // const state = useSelector(state => state.show.show)

  return (
    <div>
      <BrowserRouter>
        {isLoggedIn && <Header />}

        <Switch>
          <Route path="/" exact render={() => {
            if(localStorage.getItem('token')) {
             return <Dashboard />
            }else {
              return <Auth />
            }
            }} />
          <Route path="/dashboard" component={Dashboard} />

          <Route path="/checkout" component={OrderCheckout} />

          <Route path="/Myclassroomcourses" component={Myclassroomcourses} />

          <Route path="/course_activity/:id" component={CourseActivity} />
          <Route path="/Course/:id" component={Course} />

          <Route path="/order" component={OrderDetails} />
          <Route path="/profile" component={Profile} />
          <Route path="*" component={Auth} />
        </Switch>

        {isLoggedIn && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
