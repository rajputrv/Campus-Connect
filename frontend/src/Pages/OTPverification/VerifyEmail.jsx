import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function VerifyEmail() {
    const length = 6;
    const { user, verifyEmail } = useAuth();
    const [verificationCode, setVerificationCode] = useState(new Array(length).fill(''));
    const inputRefs = useRef(new Array(length).fill(null));

    useEffect(() => {
        if (inputRefs.current[0])
            inputRefs.current[0].focus();
    }, []);

    const onOTPSubmit = async (otp) => {
        try {
            console.log(otp);
            const response = await verifyEmail(user.email, otp);
            console.log(response);
        } catch (error) {
            console.log(error);
            console.log('Otp verification failed');
        }
    }

    const handleChange = (index, e) => {
        const value = e.target.value;
        if (isNaN(value)) return;
        const newOTP = [...verificationCode];
        //allow one input
        newOTP[index] = value.substring(value.length - 1);
        setVerificationCode(newOTP);

        //submit if all inputs are filled
        const cobinedOTP = newOTP.join('');
        if (cobinedOTP.length === length) {
            onOTPSubmit(cobinedOTP);
        }

        //move to next input field
        if (value && index < length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }
    }

    // delete field and reach previous field on backspace
    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace'
            && !verificationCode[index]
            && index > 0 &&
            inputRefs.current[index - 1]) {
            // const newOTP = [...verificationCode];
            // newOTP[index] = '';
            // setVerificationCode(newOTP);
            inputRefs.current[index - 1].focus();
        }
    }

    const handleClick = (index) => {
        inputRefs.current[index].setSelectionRange(1, 1);
        if (index > 0 && !verificationCode[index - 1]) {
            inputRefs.current[verificationCode.indexOf('')].focus();
        }
    }
    return (
        <>

            <div className="flex h-[100%] w-3/4 items-center justify-center rounded-r-xl bg-white">

                <h1 className="text-4xl font-semibold text-black">
                    <span>Please Verify your email.</span>
                </h1>
                <h4>You have received an OTP on your email:
                    <br /> <span>{user.email}</span></h4>
                {
                    verificationCode.map((value, index) => {
                        return <input
                            key={index}
                            ref={(input) => inputRefs.current[index] = input}
                            type='text'
                            value={value}
                            onChange={(e) => handleChange(index, e)}
                            onClick={() => handleClick(index)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            className="otp-input"
                        />
                    })
                }
            </div>
        </>
    );
}