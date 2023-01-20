import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";

import './index.css'


const App = () => {
    return(
        <ChatEngine 
            height="100vh"
            projectID="61269157-4966-4977-a51f-9772cbc8d88c"
            userName="maxime"
            userSecret="12345"
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps }/>}
        />
    )
}
export default App;
