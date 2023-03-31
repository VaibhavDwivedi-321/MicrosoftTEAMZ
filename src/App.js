import {ChatEngine} from 'react-chat-engine';
import LoginForm from './components/LoginForm'
import "./App.css";
import ChatFeed from './components/ChatFeed';
const App = ()=>{
    if(!localStorage.getItem('username')) return <LoginForm />
    return(
        <ChatEngine 
            height="100vh"
            projectID= {process.env.REACT_APP_API_KEY}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem("password")}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>} //spreading all the props coming from chat engine and rendering our own
        />
    )
}
export default App;