import Geolocation from '@react-native-community/geolocation';
import axios from "axios";
import { API_URL } from "../../config";
import EncryptedStorage from "react-native-encrypted-storage";

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

  // Load user info from storage
  const userToken = await EncryptedStorage.getItem("token");
  if (userToken) {
    const userData = (await axios.get(API_URL + "/user", {headers: {
        "Authorization": "JWT " + userToken
      }})).data;

    if (userData.username) {
      props.setAuth(true);
      props.setUsername(userData.username)
    }
  }
}
