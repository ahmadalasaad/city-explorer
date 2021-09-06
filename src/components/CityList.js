import React ,{Component} from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class CityList extends Component {
  constructor(props){
    super(props);
  }
  render(){
   let newArr=this.props.WeatherForcast.map(item=>{
     return <p>{item.date}:{item.describtion}</p>
   })
    return(
    //   <div>
    //         <div>
    //         <p>City: {this.props.locationData.display_name}</p>
    //         <p>lat: {this.props.locationData.lat}</p>
    //         <p>lon: {this.props.locationData.lon}</p>
    //         <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${this.props.locationData.lat},${this.props.locationData.lon}&zoom=18&size=600x600&format=png&maptype=roadmap&markers=icon:<icon>|${this.props.locationData.lat},${this.props.locationData.lon}&markers=icon:small-red-blank|${this.props.locationData.lat},${this.props.locationData.lon}`} alt=''/>
    //     </div>
    //  {newArr}
    // </div>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${this.props.locationData.lat},${this.props.locationData.lon}&zoom=18&size=600x600&format=png&maptype=roadmap&markers=icon:<icon>|${this.props.locationData.lat},${this.props.locationData.lon}&markers=icon:small-red-blank|${this.props.locationData.lat},${this.props.locationData.lon}`} alt='' />
  <Card.Body>
    <Card.Title>{this.props.locationData.display_name}</Card.Title>
    <Card.Text>
    lat: {this.props.locationData.lat}
    </Card.Text>
    <Card.Text>
    lan: {this.props.locationData.lon}
    </Card.Text>
    <Card.Text>
    {newArr}
    </Card.Text>
  </Card.Body>
</Card>
    )
  }
}
export default CityList;