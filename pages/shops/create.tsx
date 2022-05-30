import styles from "../../styles/CreateShop.module.css";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import { useState } from "react";
import { CREATE_SHOP } from "../../graphql/shopQueries";
import { useMutation } from "@apollo/client";

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

  const stateOptions: string[] = ["VA", "GA"];
  const countryOptions: string[] = ["USA", "VIETNAM"];
  const [created, setCreated] = useState(false)
  const [currentShop, setCurrentShop] = useState(initialShopState);
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
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
          <Form.Select name="state">
            <option>State</option>
            {stateOptions.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Select>
            <option>Country</option>
            {countryOptions.map((country) => (
              <option key={country} value={country}>
                {country}
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
