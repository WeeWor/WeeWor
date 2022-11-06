import React from "react";
import { connect } from 'react-redux';
import { Button, Container, Icon, Text } from "native-base";
import { StyleSheet} from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import Icons from "../utils/icons";
import { setAddress, setLatitude, setLongitude } from "../redux/reducers/locationSlice";
import axios from "axios";
import { API_URL } from "../../config";

const mapStateToProps = state => ({
  latitude: state.location.latitude,
  longitude: state.location.longitude,
  address: state.location.address
});

const mapDispatchToProps = () => ({
  setLatitude,
  setLongitude,
  setAddress
});

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        position: {
            latitude: this.props.latitude,
            longitude: this.props.longitude,
        }
    }
  }

  async confirmation() {
    this.props.setLatitude(this.state.position.latitude);
    this.props.setLongitude(this.state.position.longitude);

    let plus_code = (await axios.post(API_URL + "/location/address", {
      latitude: this.state.position.latitude,
      longitude: this.state.position.longitude
    })).data;

    this.props.setAddress(plus_code.plus_code);

    return this.props.navigation.goBack();
  }

  render() {
    return (
      <>
        <Container style={{height:"100%", width: 400}}>
            <MapView onPress={(e) => this.setState({ position: e.nativeEvent.coordinate })}
                 provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                 style={styles.map}
                 region={{
                     latitude: this.props.latitude,
                     longitude: this.props.longitude,
                     latitudeDelta: 0.015,
                     longitudeDelta: 0.0121,
                 }}
                 showsUserLocation={true}
            >
                <Marker
                    coordinate={this.state.position}
                />
            </MapView>
            <Button style={styles.button} onPress={() => this.confirmation()}>
                <Text bold fontSize={"2xl"} style={{color: "white"}}>ยืนยัน</Text>
            </Button>
        </Container>
        <Icon as={Icons.Feather} name="x" size="2xl" color="black" style={styles.cross} onPress={() => this.props.navigation.goBack()} />
      </>
    );
  }
}

const styles = StyleSheet.create({
    map: {
    ...StyleSheet.absoluteFillObject,
        width: 400,
    },
    button: {
        position: "absolute",
        bottom: 5,
        left: 5,
        width: 380
    },
    cross: {
      position: "absolute",
      left: 8,
      top: 8
    }
});

export default connect(mapStateToProps, mapDispatchToProps())(Map);
