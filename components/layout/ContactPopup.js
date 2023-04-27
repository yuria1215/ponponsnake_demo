export default function ContactPopup() {
    return (
        <div className="contactPopupBlock">

            <div className="contact-icon">

                <svg className="contact-arrow" data-name="Group 2752" xmlns="http://www.w3.org/2000/svg" width="" height="" viewBox="0 0 19.041 17.771">
                    <path id="Union_14" data-name="Union 14" d="M4.389,13.963h.053A4.448,4.448,0,0,1,0,9.52V4.443A4.448,4.448,0,0,1,4.443,0H14.6A4.448,4.448,0,0,1,19.04,4.443V9.52A4.448,4.448,0,0,1,14.6,13.963H8.886l-4.5,3.808Zm7.67-6.982a1.269,1.269,0,1,0,1.269-1.269A1.269,1.269,0,0,0,12.059,6.982Zm-3.808,0A1.269,1.269,0,1,0,9.52,5.712,1.269,1.269,0,0,0,8.251,6.982Zm-3.808,0A1.269,1.269,0,1,0,5.712,5.712,1.269,1.269,0,0,0,4.443,6.982Z" transform="translate(0 0)" fill="#343456" />
                </svg>

                {/* 點擊後變箭頭icon */}
                {/* <svg className="contact-arrow" xmlns="http://www.w3.org/2000/svg" width="" height="13.978" viewBox="0 0 21.902 13.978">
                    <g id="Group_2762" data-name="Group 2762" transform="translate(-7442 -10268.994)">
                    <path id="Union_15" data-name="Union 15" d="M-4051.947-234.034a1.633,1.633,0,0,1-1.2-.493l-2.862-2.862-.024.024h0l-3.454-3.5-.185-.185h0l-2.842-2.882a1.636,1.636,0,0,1-.492-1.2,1.631,1.631,0,0,1,.492-1.194l1.194-1.194a1.629,1.629,0,0,1,1.2-.493,1.636,1.636,0,0,1,1.2.493l2.872,2.9.013-.013,6.48,6.524a1.64,1.64,0,0,1,.491,1.2,1.636,1.636,0,0,1-.491,1.194l-1.2,1.2a1.634,1.634,0,0,1-1.168.493Z" transform="translate(11505 10517.006)" fill="#343456" />
                    <path id="Subtraction_28" data-name="Subtraction 28" d="M6.117,9.78h0L.492,4.076A1.636,1.636,0,0,1,0,2.881,1.635,1.635,0,0,1,.492,1.687l1.2-1.2A1.633,1.633,0,0,1,2.881,0,1.634,1.634,0,0,1,4.076.492L9.739,6.155,6.117,9.779Z" transform="translate(7463.902 10269.068) rotate(90)" fill="#343456" />
                    </g>
                </svg> */}



            </div>


            <div className="contact-popup">
                <div className="contact-popup-inner">
                    <div className="contact-title">
                        Contact Us
                    </div>

                    <div className="input-data">

                        <div className="form-group">
                            <input type="text" id="name-input" class="input-form-control" placeholder=" " />
                            <label for="name-input">Your Name</label>
                        </div>

                        <div className="form-group">
                            <input type="text" id="email-input" class="input-form-control" placeholder=" " />
                            <label for="name-input">Your Email</label>
                        </div>

                        <div className="form-group">
                            <input type="text" id="phone-input" class="input-form-control" placeholder=" " />
                            <label for="name-input">Your Phone</label>
                        </div>

                        <div className="form-group">
                            <input type="text" id="title-input" class="input-form-control" placeholder=" " />
                            <label for="name-input">Feedback Title</label>
                        </div>

                        <div className="form-group">
                            <textarea id="message-textarea" class="textarea-form-control" placeholder=" " />
                            <label for="name-input">What's About</label>
                        </div>

                    </div>

                </div>
            </div>



        </div>
    )
}