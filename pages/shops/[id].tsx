import styles from '../../styles/ShopDetail.module.css';
import {useQuery} from "@apollo/client";
import {GET_CURRENT_SHOP} from "../../graphql/shopQueries";
import {NextPage} from 'next';
import {IShopBody} from '../../interfaces/IShop';
import {useRouter} from 'next/router'
import Spinner from 'react-bootstrap/Spinner'
import {useEffect} from 'react';

interface resultBody {
	success: boolean,
	message: string,
	shops: [IShopBody]
}
//doc : https://github.com/vercel/next.js/blob/canary/examples/with-apollo/lib/apolloClient.js

const ShopPage = () => {
	const router = useRouter();
	const id = router.query.id
	const numId = parseInt(id as string)

	const {loading, error, data} = useQuery(GET_CURRENT_SHOP, {variables: {id: numId}});

	if (loading) return <div><Spinner animation="grow" /></div>
	if (error) return <div> error </div>
	if (!data) return <div> empty </div>
	return <div className={styles.container}> Welcome to {data.shop?.shop_name}</div>
}

export default ShopPage
