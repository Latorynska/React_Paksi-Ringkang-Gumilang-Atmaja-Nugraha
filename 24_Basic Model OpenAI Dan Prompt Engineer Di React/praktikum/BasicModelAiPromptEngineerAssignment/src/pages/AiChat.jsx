import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from 'react';
import { generateChat } from "../redux/thunks/aiApi";
import { addUserMessage } from "../redux/slices/aiSlice";
import Swal from 'sweetalert2';

const AiChat = () => {
    const dispatch = useDispatch();
    const [inputMessage, setInputMessage] = useState('');
    const { chatMessages, loading } = useSelector((state) => state.ai);
    
    const handleInputChange = (event) => {
        setInputMessage(event.target.value);
    };

    const handleSendMessage = () => {
        const messages = [...chatMessages, { content: inputMessage, role: "user" }];
        dispatch(addUserMessage(inputMessage));
        setInputMessage('');
        dispatch(generateChat(messages));
    };

    useEffect(() => {
        if (loading) {
            Swal.fire({
            title: 'mohon tunggu, AI sedang berpikir',
            allowOutsideClick: false,
            showConfirmButton: false, 
            didOpen: () => {
                Swal.showLoading();
            }
            });
        } else {
            Swal.close();
        }
    }, [loading]);
    return (
        <div className="container chat-container mt-5">
            {
                chatMessages.length > 0 ? 
                <div className="row">
                    <div className="col-12">
                        <div className="chat-messages overflow-auto" style={{ height:'50vh' }}>
                            {chatMessages.map((message, index) => (
                                <div 
                                    key={index} 
                                    className={`alert ${message.role === 'assistant' ? 'alert-success' : 'alert-dark text-end'}`}
                                >
                                    {message.content}
                                </div>
                            ))}
                        </div>
                    </div>
                </div> : 
                <p>start chatting now!</p>
            }
            <div className="row mt-5">
                <div className="col-10">
                    <input 
                        type="text" 
                        placeholder="Ketik pesan Anda..." 
                        value={inputMessage} 
                        onChange={handleInputChange} 
                        className="form-control"
                    />
                </div>
                <div className="col-2">
                    <button onClick={handleSendMessage} className="btn btn-primary w-100">Kirim</button>
                </div>
            </div>
        </div>
    );
}

export default AiChat;
