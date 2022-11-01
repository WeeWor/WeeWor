import React from "react";
import {Button, Container, Text} from "native-base";
import { StyleSheet} from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        position: {
            latitude: 37.78825,
            longitude: -122.4324,
        }
    }
  }

  confirmation() {
      console.log(this.state.position.latitude);
      console.log(this.state.position.longitude);
  }

  render() {
    return (
        <Container style={{height:"100%", width: 400}}>
            <MapView onPress={(e) => this.setState({ position: e.nativeEvent.coordinate })}
                 provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                 style={styles.map}
                 region={{
                     latitude: 37.78825,
                     longitude: -122.4324,
                     latitudeDelta: 0.015,
                     longitudeDelta: 0.0121,
                 }}
            >
                <Marker
                    coordinate={this.state.position}
                />
            </MapView>
            <Button style={styles.button} onPress={() => this.confirmation()}>
                <Text bold fontSize={"2xl"} style={{color: "white"}}>ยืนยัน</Text>
            </Button>
        </Container>
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
    }
});

export default Map;
