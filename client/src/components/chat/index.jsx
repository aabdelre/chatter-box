import React from 'react';
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from 'react-chat-engine-advanced';
import Header from "@/components/customHeader"
import StandardMessageForm from "@/components/customMessageForms/StandardMessageForm"

function Chat() {
    const chatProps = useMultiChatLogic(
        import.meta.env.VITE_PROJECT_ID,
        "test-user",
        "1234"
    )
    return (
        <div style={{flexBasis: "100%"}}>
            <MultiChatSocket {...chatProps}></MultiChatSocket>
            <MultiChatWindow 
                {...chatProps}
                style={{height: "100vh"}}
                renderChatHeader={(chat) => <Header chat={chat}/>}
                renderMessageForm={(props) => {
                    return (
                        <StandardMessageForm props={props} activeChat={chatProps.chat}/>
                    )
                }}
            />
        </div>
    )
}

export default Chat