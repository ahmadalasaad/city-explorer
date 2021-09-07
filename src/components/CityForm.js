import React ,{Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
class CityForm extends Component {
  constructor(props){
    super(props);
    this.state={

    } 
    
  }
  render(){
    return(
        <Form  onSubmit={this.props.handelSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control name='city' type="text" placeholder="Enter city"  />
        </Form.Group>
        <Button variant="primary" type="submit">
          Explore
        </Button>
      </Form>
    )
  }
}
export default CityForm;
// onChange={this.props.handelLocationNameChange}