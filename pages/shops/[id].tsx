import styles from '@/styles/ShopDetail.module.css';
import {useQuery} from "@apollo/client";
import {GET_CURRENT_SHOP} from "@/graphql/shopQueries";
import {IShopBody} from '@/interfaces/IShop';
import {useRouter} from 'next/router'
import Spinner from 'react-bootstrap/Spinner'
import {useEffect, useState} from 'react';
import {useAppSelector} from '@/app/hooks'
import { Button } from 'react-bootstrap';

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
	const user = useAppSelector((state) => state.user.value);
	const [isAdmin, setIsAdmin] = useState(false);

	const {loading, error, data} = useQuery(GET_CURRENT_SHOP, {variables: {id: numId}});
	useEffect(() => {
		if(data && user.user_id === data.shop.user_id){
			setIsAdmin(true);
		}
	}, [data])
	if (loading) return <div><Spinner animation="grow" /></div>
	if (error) return <div> error </div>
	if (!data) return <div> empty </div>
	return (<div className={styles.container}> 
		<p>Welcome to {data.shop?.shop_name}</p>
		{isAdmin ? (
		<div>
		<Button>Add services</Button>
		<Button>Add Technicians</Button>
		</div>) : null}
	</div>)
}

export default ShopPage
