import { XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react'

const StandardMessageForm = () => {
    const [message, setMessage] = useState("");
    const [attachment, setAttachment] = useState("");
    const [preview, setPreview] = useState("");

    const handleChange = (e) => setMessage(e.target.value);

  return (
    <div className='message-form-container'>
        {preview &&(
            <div className='message-form-preview'>
                <img 
                alt='message-form-preview-image' 
                className='message-form-preview-image' 
                src={preview} 
                onLoad={() => URL.revokeObjectURL(preview)}>
                </img>
                <XMarkIcon 
                className='message-form-icon-x'
                onClick={() => {
                    setPreview("");
                    setAttachment("");
                }}>   
                </XMarkIcon>
            </div>
        )}
        <div className='message-form'>
            <div className='message-form-input-container'>
                <input 
                className='message-form-input'
                type="text"
                value={message}
                onChange={handleChange}
                placeholder='Type a message...'
                >

                </input>
            </div>
        </div>
    </div>
  )
}

export default StandardMessageForm;