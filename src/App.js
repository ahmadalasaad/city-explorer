import React , {Component} from "react";
import CityForm from "./components/CityForm"
import CityList from "./components/CityList";
import axios from "axios";
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      locationData:{},
      locationName:''
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

    const response = await axios.get(url);
    this.setState({
      locationData: response.data[0]
    });
     } 
    catch(err) {
alert("error: Unable to geocode")    }
  }

  render(){
    return(
      <div>
      <CityForm handelLocationNameChange={this.handelLocationNameChange} handelSubmit={this.handelSubmit}/>
      <CityList locationData={this.state.locationData} />
      </div>
    )
  }
}
export default App;
