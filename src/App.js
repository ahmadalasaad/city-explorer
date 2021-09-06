import React , {Component} from "react";
import CityForm from "./components/CityForm"
import CityList from "./components/CityList";
import axios from "axios";
import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      locationData:{},
      locationName:'',
      showMap:false,
      showAlert:false,
      errMessage:'',
      WeatherForcast:[]
    }
  }
  handelLocationNameChange=(e)=>{
    this.setState({
      locationName:e.target.value
    })

  }
  handelSubmit = async (e) => {

    e.preventDefault();
    try{
    const url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.locationName}&format=json`;

    const serverUrl=`${process.env.REACT_APP_SERVER_URL}/weather?city_name=${this.state.locationName}`;

    const response = await axios.get(url);
    const serverResponse = await axios.get(serverUrl);
    this.setState({
      locationData: response.data[0],
      showMap:true,
      showAlert:false,
      errMessage:'',
      WeatherForcast:serverResponse.data
    });
    console.log(this.state.WeatherForcast);
     } 
    catch(err) { 
this.setState({
showMap:false,
showAlert:true,
errMessage:err.message
})}
  }

  render(){
    return(
      <div>
        {
          this.state.showAlert &&
          <Alert  variant={'danger'}>
    {this.state.errMessage}
  </Alert>
        }
      <CityForm handelLocationNameChange={this.handelLocationNameChange} handelSubmit={this.handelSubmit}/>
      {
        this.state.showMap &&
      <CityList locationData={this.state.locationData} WeatherForcast={this.state.WeatherForcast} />
      }
      </div>
    )
  }
}
export default App;
