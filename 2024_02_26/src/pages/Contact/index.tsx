import React, {useState} from "react";
import {createRoot} from "react-dom/client";
import styled from "styled-components";

function Contact() {
    const H1 = styled.h1`
        margin-top: 0;
        text-align: center;
        padding-bottom: 10px;
        font-size: 50px;
        margin-bottom: 10px;
    `

    const Form = styled.form`
        margin: 10px;
        padding: 20px;
        background-color: hotpink;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

        div {
            width: 95%;
            margin: 15px;

            label {
                display: block;
                margin-bottom: 5px;
                font-weight: bold;
            }

            input[type="email"],
            select,
            textarea {
                width: 100%;
                padding: 10px;
                border: 1px solid #6c757d;
                border-radius: 5px;
                font-size: 16px;
            }

            input[type="checkbox"] {
                margin-right: 10px;
            }
        }
        button[type="submit"] {
            padding: 10px 20px;
            background-color: #FF79C4;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s ease;

            &:hover {
                background-color: #EF69B4;
            }
        }
    `
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')

    const [agreement, setAgreement] = useState(false)
    const [agreementError, setAgreementError] = useState('')

    const [message, setMessage] = useState('')
    const [messageError, setMessageError] = useState('')

    interface TextToError{
        text: string;
    }
    const SentMessage = () => {
        return React.createElement('h2', {}, 'Your message has been sent.')
    }

    const SentError = ({text}: TextToError) => {
        return React.createElement('p', {style: {color: 'red'}}, text)
    }

    function validation(){
        const wzor = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/i
        if(email.length == 0)
        {
            setEmailError('You need to type something here...')
        }
        else{
            setEmailError('')
        }

        if(!wzor.test(email))
        {
            setEmailError('Incorrect email (Don\'t you know how to write)')
        }

        if(message.length < 20)
        {
            setMessageError('Too short (min 20 chars)')
        }
        else{
            setMessageError('')
        }

        if(!agreement)
        {
            setAgreementError('Bruh idk why we asking you abt this... (You need to agree)')
        }
        else{
            setAgreementError('')
        }

        if(wzor.test(email) && agreement && message.length >= 20){
            const form = document.getElementById('form')
            const root = createRoot(form!)
            root.render(<SentMessage/>)
        }
    }

    return (
        <>
            <H1>Contact</H1>
            <Form action="/contact" method="post" id="form">
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={event => {
                        setEmail(event.target.value)
                    }} required/>
                </div>
                <SentError text={emailError}/>
                <div>
                    <label htmlFor="topic">Topic:</label>
                    <select id="topic" name="topic" required>
                        <option value="general" selected>General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="billing">Billing Question</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="agreement">I agree to process my personal data</label>
                    <input type="checkbox" id="agreement" name="agreement" checked={agreement} onChange={event => {
                        setAgreement(event.target.checked)
                    }} required/>
                </div>
                <SentError text={agreementError}/>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows={4} cols={50} value={message} onChange={event => {
                        setMessage(event.target.value)
                    }} required></textarea>
                </div>
                <SentError text={messageError}/>
                <button type="submit" onClick={validation}>Send</button>
            </Form>
        </>
    )
}
export default Contact