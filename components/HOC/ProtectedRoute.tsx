import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { IUserBody } from '@/interfaces/IUser';
import cookie from 'cookie';
import axios from 'axios';

const URI = `http://localhost:5000`
// This protects from users who aren't logged in
export function ProtectedRoute(gssp: GetServerSideProps) {
  return async (ctx: GetServerSidePropsContext) => {
    const { req } = ctx;


    if(req.headers.cookie)
    {
        const { access_token } = cookie.parse(req.headers.cookie);

    try {
        
        // Send a request to the API and verify that the user exists
        // Reject and redirect if the user is undefined or there is no accessToken
        // const user: IUserBody = await fetchUser();
        const result = await axios.post(`${URI}/api/user/current-user`, {
            access_token
        });
        const user: IUserBody = result.data

        if (!user.is_loggedIn) {
        return {
            redirect: {
            permanent: false,
            destination: '/login',
            },
        };
        }
    } catch (error) {
        // Failure in the query or any error should fallback here
        // this route is possibly forbidden means the cookie is invalid
        // or the cookie is expired
        return {
        redirect: {
            permanent: false,
            destination: '/login',
        },
        };
    }

    }
    return await gssp(ctx);
  };
}