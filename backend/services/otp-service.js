const crypto = require('crypto');
const hashService = require('./hash-service');

const smsSid = process.env.SMS_SID;
const smsAuthToken = process.env.SMS_AUTH_TOKEN;
//const twilio = require('twilio')(smsSid, smsAuthToken, {
//    lazyLoading: true
//});
class OtpService {
    async generateOtp() {
        const otp = crypto.randomInt(1000, 9999);
        console.log(otp);
        return otp;
    }

    async sendBySms(phone, otp){
        console.log(`otp step reached and otp is: ${otp}`);
        //return await twilio.messages.create({
        //    body: `Your DevSpace OTP is ${otp}`,
        //    from : process.env.SMS_FROM_NUMBER,
        //    to : phone
        //});
    }

    verifyOtp(hashedOtp, data) {
        let computedHash = hashService.hashOtp(data);
        return computedHash === hashedOtp;
    }
}

module.exports = new OtpService();
