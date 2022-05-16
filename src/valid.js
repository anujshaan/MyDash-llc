const vaild = (data) =>{
    const {email, password, cf_password, fullname, phone} = data;

    const error = {};

    if(!email){
        error.email= 'Enter your email address';
    }else if(!validEmail(email)){
        error.email= 'Enter valid email';
    }

    if(!password){
        error.password='Enter your password !';
    }else if(password.length < 6){
        error.password='Password should be at least 6 character long!'
    }

    if(!cf_password){
        error.cf_password='Enter your password again !';
    }else if(password !== cf_password){
        error.cf_password="Password didn't matched !"
    }

    if(!fullname){
        error.fullname='Enter your fullname !'
    }

    if(!phone){
        error.phone='Enter your phone number';
    }else if(!vaildPhone(phone)){
        error.phone='Enter phone number with country code!'
    }

    return {
        errMsg: error,
        errLength: Object.keys(error).length
    };
}

export default vaild;

export const vaildPhone = (phone)=>{
    const re = /^[+]/g
    return re.test(phone);
}

const validEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};