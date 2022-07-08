import {GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import {initializeApollo} from '@/Apollo/client'
import styles from '@/styles/ShopDetail.module.css';
import {GET_CURRENT_SHOP, GET_SHOPS} from "@/graphql/shopQueries";
import {IShopBody} from '@/interfaces/IShop';
import {useRouter} from 'next/router'
import Spinner from 'react-bootstrap/Spinner'
import {useEffect, useState} from 'react';
import {useAppSelector} from '@/app/hooks'
import { Button } from 'react-bootstrap';

interface props {
	shop: IShopBody
}
//doc : https://github.com/vercel/next.js/blob/canary/examples/with-apollo/lib/apolloClient.js

const ShopPage: NextPage<props> = ({shop}) => {
	const user = useAppSelector((state) => state.user.value);
	const isAdmin = parseInt(user.user_id) === shop.user_id;

	if (!shop) return <div> empty </div>
	return (<div className={styles.container}> 
		<p>Welcome to {shop?.shop_name}</p>
		{isAdmin ? (
		<div>
		<Button>Add services</Button>
		<Button>Add Technicians</Button>
		</div>) : null}
	</div>)
}

export default ShopPage

export const getStaticPaths: GetStaticPaths = async () => {
	const prefetch  = true;
	const client = initializeApollo(null, prefetch);
    const {data} = await client.query({query: GET_SHOPS, variables: {name: ""}})
	const paths = data.shops.map((e: IShopBody) => ({
		params: {id: e.id.toString()},
	}))
	return {
		paths,
		fallback: true,
	}

}

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
	const {params} = ctx;
	const prefetch  = true;
	const client = initializeApollo(null, prefetch);
	const {data} = await client.query({query: GET_CURRENT_SHOP, variables: {id:  params?.id ? parseInt(params.id as string) : -1}})
	return {
		props: {
			shop: data.shop,
		},
		revalidate: 1,
	}

}
