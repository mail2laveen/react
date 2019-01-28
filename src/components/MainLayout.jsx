import React from 'react';
import SepMenu from "./navigation/presentation/SepMenu";
import{Route} from "react-router-dom";
import SepHome from "./home/presentation/SepHome";
import EventsList from "./events/container/EventsList";
import Posts from "./jph/container/Posts";
import Users from "./jph/container/Users";
import EmployeeList from "./employees/container/EmployeeList";
import EventDetails from './events/container/EventDetails';
import EmployeeDetails from './employees/container/EmployeeDetails';
import NewEvent from './events/container/NewEvent';
import NewEmployee from './employees/container/NewEmployee';

const MainLayout=()=>(
    <div>
         <SepMenu/>
         <main>
             <Route path="/" exact component={SepHome} />
             <Route path="/home" exact component={SepHome} />
             <Route path="/events"  component={EventsList} />
             <Route path="/employees"  component={EmployeeList} />
             <Route path="/jph/posts"  component={Posts} />
             <Route path="/jph/users"  component={Users} />
             <Route path="/eventdetails/:id"  component={EventDetails} />
             <Route path="/employeeDetails/:id"  component={EmployeeDetails} />
             <Route path="/newEvents"  component={NewEvent} />
             <Route path="/newEmployee"  component={NewEmployee} />
             
         </main>
    </div>
)

export default MainLayout;