import React ,{Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
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
          <Form.Control type="text" placeholder="Enter city" onChange={this.props.handelLocationNameChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}
export default CityForm;