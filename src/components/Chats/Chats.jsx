import React, {useEffect, useRef} from "react";
import {useState,useContext} from "react";
import {chatGroupContext} from "../../context/ChatGroupProvider.jsx";
import EnterButton from "../../assets/enter-icon.svg";
import ChatStyles from "./chats.module.css";

function Chats() {

    const [inputChat,setInputChat] = useState(null);
    const {chatGroup} = useContext(chatGroupContext);
    const chatContainerRef = useRef();
    useEffect(() => {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }, []);

    const handleInputChange = (e) => {
        setInputChat(e.target.value);
    }

    const handleSubmit = () => {

        console.log('chat recieved',inputChat);
    }
    return (

        <div className={ChatStyles.wrapper}>
            <heading className={ChatStyles.heading}>
                <span>CU</span>
                Cuvette Notes
            </heading>
            <div className={ChatStyles.main}>
                <div className={ChatStyles.messagesWrapper} ref={chatContainerRef}>
                    <div className={ChatStyles.message}>
                        <div className={ChatStyles.dateTime}>
                            <div>10:10 Am</div>
                            <div>9 March 2023</div>
                        </div>

                        <div className={ChatStyles.chatText}>
                            Another productive way to use this tool to begin a daily writing routine. One way is to
                            generate a random paragraph with the intention to try to rewrite it while still keeping the
                            original meaning. The purpose here is to just get the writing started so that when the
                            writer goes onto their day's writing projects, words are already flowing from their fingers.
                        </div>


                    </div>
                    <div className={ChatStyles.message}>
                        <div className={ChatStyles.dateTime}>
                            <div>10:10 Am</div>
                            <div>9 March 2023</div>
                        </div>

                        <div className={ChatStyles.chatText}>
                            It's not only writers who can benefit from this free online tool. If you're a programmer
                            who's working on a project where blocks of text are needed, this tool can be a great way to
                            get that. It's a good way to test your programming and that the tool being created is
                            working well.
                        </div>


                    </div>
                    <div className={ChatStyles.message}>
                        <div className={ChatStyles.dateTime}>
                            <div>10:10 Am</div>
                            <div>9 March 2023</div>
                        </div>

                        <div className={ChatStyles.chatText}>
                            When first building this generator we thought about using computers to generate the
                            paragraphs, but they weren't very good and many times didn't make any sense at all. We
                            therefore took the time to create paragraphs specifically for this generator to make it the
                            best that we could.
                        </div>


                    </div>
                    <div className={ChatStyles.message}>
                        <div className={ChatStyles.dateTime}>
                            <div>10:10 Am</div>
                            <div>9 March 2023</div>
                         </div>

                        <div className={ChatStyles.chatText}>
                            When first building this generator we thought about using computers to generate the
                            paragraphs, but they weren't very good and many times didn't make any sense at all. We
                            therefore took the time to create paragraphs specifically for this generator to make it the
                            best that we could.
                        </div>


                    </div>
                </div>
                <div className={ChatStyles.inputWrapper} >
                    <textarea type='text' className={ChatStyles.input} placeholder="Enter your text here" onChange={handleInputChange}/>
                        <button className={ChatStyles.buttonEnter} onClick={handleSubmit}>
                            <img src={EnterButton}/>
                        </button>
                </div>
            </div>

            {/* <div>Input Area</div> */}
        </div>
    );
}

export default Chats;
