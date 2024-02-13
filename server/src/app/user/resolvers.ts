import axios from "axios";
import { prismaClient } from "../../clients/db";

interface CredentialResponse {
}



const queries = {
    verifyGoogleToken: async(parent:any, {token}:{token:string}) => {
        const googleToken = token;
        const googleOauthURL = new URL('https://www.googleapis.com/oauth2/v3/tokeninfo');
        googleOauthURL.searchParams.append('id_token', googleToken);

        const {data} = await axios.get(googleOauthURL.toString(),{
            responseType: 'json',
        });

        const user = await prismaClient.user.findUnique({
            where: {
                email: data.email,
            }
        });

        if(!user){
            await prismaClient.user.create({
                data: {
                    email: data.email,
                    firstName: data.given_name,
                    lastName: data.family_name,
                    profileImage: data.picture,
                },
            });
        }

         

        console.log(data);
        return "ok";
    },
};

export const resolvers = {queries}

// const googleOauthURL = new URL('https://oauth2.googleapis.com/tokeninfo');