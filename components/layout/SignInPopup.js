import React, { useState, useRef, useEffect } from "react"

export default function SignInPopup() {


    const [showSignInPopup, setShowSignInPopup] = useState(false);


    const handleSignInPopup = () => {
        setShowSignInPopup(!showSignInPopup);
    };

    // 如果點擊視窗以外的地方也會setShowSignInPopup(false);
    // const contactPopupRef = useRef(null);

    // const handleClickOutside = (event) => {
    //     if (contactPopupRef.current && !contactPopupRef.current.contains(event.target)) {
    //         setShowSignInPopup(false);
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



    const [signInPhone, setSignInPhone] = useState('');
    const [signInPassword, setSignInPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        // 表單驗證
        // const errors = {};

        // if (!name) {
        //     errors.name = '請填寫姓名';
        // }
        // if (!email) {
        //     errors.email = '請填寫 Email';
        // }
        // if (!message) {
        //     errors.message = '請填寫訊息';
        // }
        // if (Object.keys(errors).length > 0) {
        //     setErrors(errors);
        //     return;
        // }

        // const handleInputChange = (e) => {
        //     const { name, value } = e.target;

        //     // 清除與該輸入欄位相關聯的錯誤訊息
        //     setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));

        //     // 更新輸入欄位的值
        //     if (name === 'name') {
        //         setName(value);
        //     } else if (name === 'email') {
        //         setEmail(value);
        //     } else if (name === 'message') {
        //         setMessage(value);
        //     }
        // };



        




        // 將表單資料送到後端

        // 清空表單資料
        const cleanData = () => {
            setSignInPhone('');
            setSignInPassword('');
        }



        console.log(formData);

        // 點擊contact-popup以外的地方彈窗關閉
    };



    return (
        <div className="signInPopupBlock">

            {/* <div className="signIn-popup showSignInPopup"> */}
                <div className={`signIn-popup ${!showSignInPopup ? "showSignInPopup" : ""}`}>

                <div className="signInPopup-close" onClick={handleSignInPopup}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16.971" height="16.97" viewBox="0 0 16.971 16.97">
                        <path id="x-pack" d="M9.725,13.87,13.891,9.7l2.373,2.381a2.529,2.529,0,0,1,0,3.578l-.588.588a2.529,2.529,0,0,1-3.578,0Zm6.532-12.5L15.669.777a2.529,2.529,0,0,0-3.578,0L8.521,4.355,4.943.777a2.529,2.529,0,0,0-3.578,0l-.588.588a2.529,2.529,0,0,0,0,3.578L4.355,8.521.777,12.1a2.529,2.529,0,0,0,0,3.578l.588.588a2.529,2.529,0,0,0,3.578,0l3.578-3.578,2.607-2.607,1.559-1.559,3.578-3.578a2.529,2.529,0,0,0,0-3.578Z" transform="translate(-0.035 -0.036)" fill="#343456" />
                    </svg>
                </div>

                <div className="popup-inner">
                    <div className="popup-title">
                        WELCOME!
                    </div>

                    <form className="input-data" onSubmit={handleSubmit}>

                        <div className="form-group">
                            <input type="text" id="signInPhone-input" className="input-form-control"
                                value={signInPhone} onChange={(e) => setName(e.target.value)} placeholder=" " />
                            <label htmlFor="signInPhone-input">Phone Number</label>
                            {/* {errors.name && <div className="error">{errors.name}</div>} */}
                        </div>

                        <div className="form-group">
                            <input type="text" id="signInPhone-input" className="input-form-control" style={{ marginBottom: '3%' }}
                                value={signInPhone} onChange={(e) => setEmail(e.target.value)} placeholder=" " />
                            <label htmlFor="signInPhone-input">Password</label>
                        </div>

                        <div className="remember_block">
                            <div className="rememberMe">
                                <input type="checkbox" id="rememberMeCheck" />
                                <label htmlFor="rememberMeCheck">Remember me</label>
                            </div>

                            <div className="">Forget Passeord?</div>
                        </div>



                        <div className="sign">
                            <button className="index-button cursor-pointer">Sign in</button>
                            <div className="">Don't have an account? <span>Register</span> </div>
                        </div>

                    </form>



                </div>
            </div>




        </div>

    )
}