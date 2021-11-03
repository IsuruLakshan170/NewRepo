import SendMessageForm from './SendMessageForm';
import MessageContainer from './MessageContainer';
import { Button } from 'react-bootstrap';
import LeftNev2 from './LeftNev2';
import ConnectedUsers from './ConnectedUsers';
import './Chat.css';
import './Fotter.css';
import Fotter from './Fotter';

const Chat = ({ sendMessage, messages, users, closeConnection }) =>

{
  
    return (

      <div className="one">
               <div className="dashboad">
              <LeftNev2/>
        
                <div className="right1">
                    <div className="communicatonsector">
                      <h1 className='create-acount'>Communication Sector</h1>
                        <hr className='hr'></hr>
                        </div>
               
                   
                    <div className="right-box-left">
                                  
                             <div>
                                <div className='leave-room'>
                                    <Button variant='danger'  id="Leave" onClick={() => closeConnection()}>Leave Room</Button>
                                </div>
                            
                                <div className='chat'>
                                    <MessageContainer messages={messages} />
                                    <SendMessageForm sendMessage={sendMessage} />
                                </div>
                            </div>
                   </div> 

                   <div className="right-box-right">
                     <ConnectedUsers className="connectedUser" users={users} />
                   </div> 
                   


                </div>
    
      </div>  



      <div className="two">
            <div className="FotterBack">
                  
              <Fotter/>
           </div>
        </div>



      </div>


      )
}



export default Chat;