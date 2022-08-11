import {NextPage} from "next";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_SERVER;
const VerifyPage: NextPage = () => {
	const router = useRouter();
	const [verify, setVerify] = useState<string | null>(null);
	const verifyUser = async (code: string | string[] | undefined) => {
		const {data} = await axios.get(
			`${API_URL}/api/user/verify/${code}`
		);
		setVerify(data.message);
	};

	useEffect(() => {
		if (!router.isReady) return;
		const code = router.query.verifyCode;
		verifyUser(code);
	}, [router.isReady]);
	return <div>{verify ? <h1>{verify}</h1> : <h1>Verifying....</h1>}</div>;
};

export default VerifyPage;
