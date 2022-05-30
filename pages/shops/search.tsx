import {NextPage} from "next";
import { useState, useEffect } from 'react';
import {useRouter} from "next/router";
import {initializeApollo} from '../../Apollo/client'
import {GET_SHOPS} from "../../graphql/shopQueries";
import { Form, FormControl, Button } from 'react-bootstrap';
import Shops from '../../components/Shops';
import styles from '../../styles/Home.module.css';
const Search: NextPage = () => {
    // Declare vars and useStates
    const client= initializeApollo()
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    const [result, setResult] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    // UseEffect
	useEffect(() => {

        const fetchQuery = async () => {
            if (!router.isReady) return;
            const name = router.query.name;
            const {loading, error, data} = await client.query({query: GET_SHOPS, variables: {name: name}})
            setResult(data);
            setLoading(loading);
            setError(error)
        }

        fetchQuery()

	}, [router.isReady && router.query.name]);

    // Functions
    const handleSearch = async (e: any) => {
    e.preventDefault();
    router.push(`/shops/search?name=${searchQuery}`);
	};

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setSearchQuery(e.target.value);
	};
    // Return view
    return (<div className={styles.main}>
        <Form className="d-flex" onSubmit={handleSearch}>
            <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={onInputChange}
            />
            <Button variant="outline-success" type="submit">
                Search
            </Button>
        </Form>
        <h2>Shops</h2>
        <Shops data={result} loading={loading} error={error}/>
    </div>)

};

export default Search;