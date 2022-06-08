import styles from "../../styles/CreateShop.module.css";
import { GetServerSideProps } from 'next';
import { ProtectedRoute } from "../../components/HOC/ProtectedRoute";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import { useState } from "react";
import { CREATE_SHOP } from "../../graphql/shopQueries";
import { useMutation } from "@apollo/client";
import { Country, State, City }  from 'country-state-city';
const CreateShop = () => {
  const [createShop] = useMutation(CREATE_SHOP);
  const initialShopState = {
    shop_name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    phone: "",
  };

  // const stateOptions: string[] = State.getAllStates().map((e) => {return });
  const countryOptions = Country.getAllCountries();
  const [stateOptions, setStateOptions] = useState<string[]>([]);
  const [created, setCreated] = useState(false)
  const [currentShop, setCurrentShop] = useState(initialShopState);
  const onInputChange = (e: any) => {
    const { name, value } = e.target;
    if(name === "country"){
      const receivedStates = State.getStatesOfCountry(value).map((state) => {return state.name})
      setStateOptions(receivedStates)
    }
    setCurrentShop({
      ...currentShop,
      [name]: value,
    });
  };
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await createShop({ variables: { shop: currentShop } });
    if(result){
      setCreated(true);
      setCurrentShop(initialShopState)
    }
  };
  return (
    <div className={styles.container}>
      <Form onSubmit={submit}>
        <FloatingLabel
          controlId="floatingShopName"
          label="Name of Shop"
          className="mb-3"
        >
          <Form.Control
            type="text"
            name="shop_name"
            value={currentShop.shop_name}
            onChange={onInputChange}
            placeholder="Name of Shop"
          />
        </FloatingLabel>
        <FloatingLabel
          className="mb-3"
          controlId="floatingStreet"
          label="Street"
        >
          <Form.Control
            type="text"
            name="street"
            value={currentShop.street}
            onChange={onInputChange}
            placeholder="123 ABC "
          />
        </FloatingLabel>
        <FloatingLabel className="mb-3" controlId="floatingCity" label="City">
          <Form.Control
            name="city"
            value={currentShop.city}
            onChange={onInputChange}
            type="text"
            placeholder="New York..."
          />
        </FloatingLabel>
        <Form.Group className="mb-3">
          <Form.Select name="country" onChange={onInputChange} value={currentShop.country}>
            <option>Country</option>
            {countryOptions.map((country) => (
              <option key={country.isoCode} value={country.isoCode}>
                {country.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Select name="state" onChange={onInputChange} value={currentShop.state} disabled={stateOptions.length < 1}>
            <option>State</option>
            {stateOptions.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <FloatingLabel className="mb-3" controlId="floatingZip" label="Zip">
          <Form.Control
            name="zip"
            value={currentShop.zip}
            onChange={onInputChange}
            type="text"
            placeholder="123 ABC "
          />
        </FloatingLabel>
        <FloatingLabel
          className="mb-3"
          controlId="floatingPhone"
          label="Phone number"
        >
          <Form.Control
            name="phone"
            value={currentShop.phone}
            onChange={onInputChange}
            type="text"
            placeholder="123 ABC "
          />
        </FloatingLabel>
        <Button variant="primary" type="submit">
          Create Shop
        </Button>
      </Form>
      {created ? (<h4>Shop Created Successfully</h4>) : null}
    </div>
  );
};

export default CreateShop;

export const getServerSideProps: GetServerSideProps = ProtectedRoute(
	async (ctx) => {
		return {
			props: {

			},
		}
	}
)