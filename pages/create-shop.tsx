import {NextPage} from 'next'
import styles from '../styles/CreateShop.module.css'

const CreatePage = () => {
	return (<div className={styles.container}>
		<form>
    <div className="form-group col-md-6">
      <label htmlFor="inputCity">Shop Name</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div>
  <div className="form-group">
    <label htmlFor="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress2">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="inputState">Country</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label htmlFor="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip"/>
    </div>
  </div>
  <div className="form-group">
  </div>
  <button type="submit" className="btn btn-primary">Create Shop</button>
</form>
	</div>) 


}

export default CreatePage;
