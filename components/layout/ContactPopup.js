import React, { useState, useRef, useEffect } from "react"

export default function ContactPopup() {

    const [showContactPopup, setShowContactPopup] = useState(false);


    const handleContactPopup = () => {
        setShowContactPopup(!showContactPopup);
    };

    // 如果點擊視窗以外的地方也會setShowContactPopup(false);
    // const contactPopupRef = useRef(null);

    // const handleClickOutside = (event) => {
    //     if (contactPopupRef.current && !contactPopupRef.current.contains(event.target)) {
    //         setShowContactPopup(false);
    //         console.log(handleClickOutside)
    //     }
    // };

    // useEffect(() => {
    //     document.addEventListener("mousedown", handleClickOutside);
    //     console.log(handleClickOutside)
    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, []);


    return (
        <div className="contactPopupBlock">

            <div className="contact-click" onClick={handleContactPopup}>

                {!showContactPopup && (
                    <svg className="contact-icon" id="contact-ask" data-name="Group 2752" xmlns="http://www.w3.org/2000/svg" width="" height="" viewBox="0 0 19.041 17.771">
                        <path id="Union_14" data-name="Union 14" d="M4.389,13.963h.053A4.448,4.448,0,0,1,0,9.52V4.443A4.448,4.448,0,0,1,4.443,0H14.6A4.448,4.448,0,0,1,19.04,4.443V9.52A4.448,4.448,0,0,1,14.6,13.963H8.886l-4.5,3.808Zm7.67-6.982a1.269,1.269,0,1,0,1.269-1.269A1.269,1.269,0,0,0,12.059,6.982Zm-3.808,0A1.269,1.269,0,1,0,9.52,5.712,1.269,1.269,0,0,0,8.251,6.982Zm-3.808,0A1.269,1.269,0,1,0,5.712,5.712,1.269,1.269,0,0,0,4.443,6.982Z" transform="translate(0 0)" fill="#343456" />
                    </svg>
                )}

                {/* 點擊後變箭頭icon */}
                {showContactPopup && (
                    <svg className="contact-icon" id="contact-arrow" xmlns="http://www.w3.org/2000/svg" width="" height="13.978" viewBox="0 0 21.902 13.978">
                        <g id="Group_2762" data-name="Group 2762" transform="translate(-7442 -10268.994)">
                            <path id="Union_15" data-name="Union 15" d="M-4051.947-234.034a1.633,1.633,0,0,1-1.2-.493l-2.862-2.862-.024.024h0l-3.454-3.5-.185-.185h0l-2.842-2.882a1.636,1.636,0,0,1-.492-1.2,1.631,1.631,0,0,1,.492-1.194l1.194-1.194a1.629,1.629,0,0,1,1.2-.493,1.636,1.636,0,0,1,1.2.493l2.872,2.9.013-.013,6.48,6.524a1.64,1.64,0,0,1,.491,1.2,1.636,1.636,0,0,1-.491,1.194l-1.2,1.2a1.634,1.634,0,0,1-1.168.493Z" transform="translate(11505 10517.006)" fill="#343456" />
                            <path id="Subtraction_28" data-name="Subtraction 28" d="M6.117,9.78h0L.492,4.076A1.636,1.636,0,0,1,0,2.881,1.635,1.635,0,0,1,.492,1.687l1.2-1.2A1.633,1.633,0,0,1,2.881,0,1.634,1.634,0,0,1,4.076.492L9.739,6.155,6.117,9.779Z" transform="translate(7463.902 10269.068) rotate(90)" fill="#343456" />
                        </g>
                    </svg>
                )}


            </div>

            <div className={`contact-popup ${showContactPopup ? "showContactPopup" : ""}`}>
                    <div className="contact-popup-inner">
                        <div className="contact-title">
                            Contact Us
                        </div>

                        <div className="input-data">

                            <div className="form-group">
                                <input type="text" id="name-input" className="input-form-control" placeholder=" " />
                                <label htmlFor="name-input">Your Name</label>
                            </div>

                            <div className="form-group">
                                <input type="text" id="email-input" className="input-form-control" placeholder=" " />
                                <label htmlFor="email-input">Your Email</label>
                            </div>

                            <div className="form-group">
                                <input type="text" id="phone-input" className="input-form-control" placeholder=" " />
                                <label htmlFor="phone-input">Your Phone</label>
                            </div>

                            <div className="form-group">
                                <input type="text" id="title-input" className="input-form-control" placeholder=" " />
                                <label htmlFor="title-input">Feedback Title</label>
                            </div>

                            <div className="form-group">
                                <textarea id="message-textarea" className="textarea-form-control" placeholder=" " />
                                <label htmlFor="message-textarea">What's About</label>
                            </div>


                            <button type="submit" className="submit-button">
                                Submit
                                <svg xmlns="http://www.w3.org/2000/svg" width="16.08" height="16.08" viewBox="0 0 16.08 16.08">
                                    <path id="send" d="M15.828.1a.561.561,0,0,1,.242.574l-2.3,13.783a.564.564,0,0,1-.287.4.55.55,0,0,1-.278.072.606.606,0,0,1-.215-.045l-4.065-1.66L6.755,15.874a.529.529,0,0,1-.44.206.487.487,0,0,1-.2-.036.574.574,0,0,1-.377-.539V12.374l7.753-9.5L3.9,11.172.358,9.718A.568.568,0,0,1,.286,8.7L15.217.081A.548.548,0,0,1,15.5,0a.556.556,0,0,1,.323.1Z" transform="translate(0.002)" fill="#343456" />
                                </svg>


                            </button>

                        </div>



                    </div>
                </div>




        </div>
    )
}