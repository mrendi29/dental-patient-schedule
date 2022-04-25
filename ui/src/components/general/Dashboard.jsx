import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Profile from './Profile';

const Dashboard = () => {

    return(
        <div className="wrapper">
            <Sidebar/>
            {/* <Outlet /> */}
            <Profile/>
        </div>
    );
}

export default Dashboard;