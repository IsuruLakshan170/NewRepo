
import './ex.css';

const ConnectedUsers = ({ users }) => <div className='user-list1'>
    <h4 className="connectU1">Connected Users</h4>
    {users.map((u, idx) => <h5 className="connectUh5" key={idx}>{u}</h5>)}
</div>

export default ConnectedUsers;