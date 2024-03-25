import './App.css';
import Header from './components/Header';
import HRCloud from './components/HRCloud';
import Register from './components/RegesterFarm';
import Home from "./components/Home";
import Recruiting from './components/Recruiting';
import LoginFarm from './components/LoginFarm';
import Admin from "./components/Admin"
import EditUser from "./components/EditUser"
import HRRegister from './components/HRRegester';
import ProtectedRoute from './components/ProtuctedRoute';
import HrLogin from './components/HrLogin';
import SendMail from './components/SendMail';
import FinanceCloud from './components/FinanceCloud';

import { BrowserRouter, Route, Switch } from "react-router-dom"
import EmployeDashBoard from './components/EmployeDashBoard';
import EmployeAttendance from './components/EmployeAttendance';
import EmployeRegister from './components/EmployeRegester';
import ITCloud from './components/ITCloud';
import ConfirmationForm from './components/CandidateConformationFarm';
// import FileUploadForm from './components/FileUploadFarm';


const  App = () => {
  return (
    <BrowserRouter>
    <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/HRCloud" exact component={HRCloud} />
          <Route path="/Recruiting" exact component={Recruiting} />
          <Route path="/Regester" exact component={Register} />
          <Route path="/Login" exact component={LoginFarm} />
          <ProtectedRoute path="/admin" exact component={Admin} />
          <Route path="/edit/:id" exact component={EditUser} />
          <ProtectedRoute path="/hrr" exact component={HRRegister} />
          <Route path="/hrlogin" exact component={HrLogin} />
          <Route path="/send-mail" exact component={SendMail} />
          <Route path="/employedb" exact component={EmployeDashBoard} />
          <Route path="/FINANCECLOUD" exact component={FinanceCloud} />
          <Route path="/ITCLOUD" exact component={ITCloud} />
          <ProtectedRoute path="/empregester" exact component={EmployeRegister} />
          <ProtectedRoute path="/empattendance" exact component={EmployeAttendance} />
          <Route path="/candidate-conformation-farm" exact component={ConfirmationForm} />
          {/* <Route path="/profile" exact component={FileUploadForm} /> */}
        </Switch>
    </BrowserRouter>
    )
}

export default App;
