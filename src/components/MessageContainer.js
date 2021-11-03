import { useEffect, useRef } from 'react';
import './ex.css';
const MessageContainer = ({ messages }) => {
    const messageRef = useRef();

    useEffect(() => {
        if (messageRef && messageRef.current) {
            const { scrollHeight, clientHeight } = messageRef.current;
            messageRef.current.scrollTo({ left: 0, top: scrollHeight - clientHeight, behavior: 'smooth' });
        }
    }, [messages]);

    return <div ref={messageRef} className='message-container' id="msg-container">
        {messages.map((m, index) =>
            <div key={index} className='user-message'>
                <div  id="secondry" className='message bg-primary'>{m.message}</div>
                <div  id="primary" className='from-user'>{m.user}</div>
            </div>
        )}
    </div>
}

export default MessageContainer;