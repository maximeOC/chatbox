import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {

   const{chats, activateChat, userName, messages} = props;

   const chat = chats && chats[activateChat];
   
const renderMessages = () => {
    const keys = Object.keys(messages);
    console.log(keys);
}

renderMessages();

    return(
        <div>
            chat
        </div>
    )
}

export default ChatFeed;