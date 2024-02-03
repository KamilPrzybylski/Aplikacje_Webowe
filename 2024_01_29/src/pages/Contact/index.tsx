import React, {useState} from "react";
import {createRoot} from "react-dom/client";

function Contact() {
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
            <h1>Contact</h1>
            <form action="/contact" method="post" id="form">
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
            </form>
        </>
    )
}
export default Contact