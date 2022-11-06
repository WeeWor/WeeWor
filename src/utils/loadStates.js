import Geolocation from '@react-native-community/geolocation';
import axios from "axios";
import { API_URL } from "../../config";

export default async function (props) {
  // Set latitude and longitude
  Geolocation.getCurrentPosition(async info => {
    const coords = info.coords;
    props.setLatitude(coords.latitude);
    props.setLongitude(coords.longitude);
    let plus_code = (await axios.post(API_URL + "/location/address", {
      latitude: coords.latitude,
      longitude: coords.longitude
    })).data;
    props.setAddress(plus_code.plus_code);
  });
}
