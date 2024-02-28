
import "../App.css"
import { db } from "../firebase";
import React, {  useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Contacts = () => {
  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
  
    const [loader, setLoader] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoader(true);
  
      db.collection("contacts")
        .add({
          name: name,
          email: email,
          subject:subject,
          message: message,
          
        })
        .then(() => {
          setLoader(false);
          alert("Your message has been submitted👍");
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });
  
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    };

    return (
        <section id="contacts">
            
      <form className="form" onSubmit={handleSubmit}>
                                    <div className="single-contact text-center text-white"> 
                                        <i className="mdi mdi-cellphone"></i>
                                        <MdLocationOn color='green' size='5rem'/>
      
    
                                        <h4 style={{ color: 'gray' }}>Phone</h4>
                                        <p>+94 713 620 406</p>
                                    </div>
                          
                            
                                    <div className="single-contact text-center text-white"> 
                                        <i className="mdi mdi-map-marker"></i>
                                        <BiPhoneCall color='green' size='5rem'/>
                                        <h4 style={{ color: 'gray' }}>Address</h4>
                                        <p>678/14, Mahawatta rd, Thunandahena, Korathota, Kaduwela.</p>
                                    </div>
                          
                           
                                    <div className="single-contact text-center text-white"> 
                                        <i className="mdi mdi-email-outline"></i>
                                        <MdEmail color='green' size='5rem'/>
                                        <h4 style={{ color: 'gray' }}>Email</h4>
                                        <p>pubududilshan97@gmail.com</p>
                                    </div>
                             
                         
      <h1 style={{ color: 'white' }}>Sent Me A Messege</h1>

        <label>Name<span className="required">*</span></label>
        <input
     
          value={name}
          onChange={(e) => setName(e.target.value)} required
          
        />

        <label>Email<span className="required">*</span></label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)} required
        />
        <label>Subject<span className="required">*</span></label>
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)} required
        />
  
        <label>Message<span className="required">*</span></label>
        <textarea 
          value={message}
          onChange={(e) => setMessage(e.target.value)} required
        ></textarea>
  
        <button
          type="submit"
          style={{ background: loader ? "#bbb" : " rgb(23, 144, 56)" ,fontFamily: 'dosis-regular'}}
        >
          SEND A MESSAGE
        </button>
      </form>
      
      </section>
      
    );
  };
  
  export default Contacts;
