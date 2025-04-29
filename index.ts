import 'dotenv/config'
import * as jose from 'jose';

export const generateToken = async () => {

    const userId = process.env.USER_ID;
    const sharedSecret = process.env.SHARED_SECRET;
    const kid = process.env.KID;

    if(!userId || !sharedSecret || !kid) throw new Error(
        "Missing environment variables: USER_ID and SHARED_SECRET"
    )

    const token = await new jose.SignJWT({})
       .setProtectedHeader({ alg: 'HS256', kid: kid })
       .setSubject(userId)
       .setIssuedAt(new Date())
       .setAudience('powersync-dev')
       .setExpirationTime('12h')
       .sign(Buffer.from(sharedSecret, 'base64url'));
    console.log(token);
};

(async () => {
    await generateToken();
})();
