import {NextPage} from "next";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import { verifyUserAccount } from "../../../services/user.service";

const VerifyPage: NextPage = () => {
	const router = useRouter();
	const [verify, setVerify] = useState<string | null>(null);
	const verifyUser = async (code: string | string[] | undefined) => {

		try{
			const message = await verifyUserAccount(code)
			setVerify(message);
		}catch(e: any){
			setVerify(e.toString())
		}

	};

	useEffect(() => {
		if (!router.isReady) return;
		const code = router.query.verifyCode;
		verifyUser(code);
	}, [router.isReady]);
	return <div>{verify ? <h1>{verify}</h1> : <h1>Verifying....</h1>}</div>;
};

export default VerifyPage;
