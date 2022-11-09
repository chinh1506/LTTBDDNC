import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  Image,
  Easing,
  PanResponder,
  Dimensions,
  TouchableOpacity,
} from "react-native";

// const { width, height } = Dimensions.get("screen");
const width = 600;
const height = 400;

const App = () => {
  const [locationCat, setLocationCat] = useState({
    x: 0,
    y: 0,
  });
  const [location1, setLocation1] = useState({
    x: 0,
    y: 0,
  });
  const [location2, setLocation2] = useState({
    x: 0,
    y: 0,
  });
  const [location3, setLocation3] = useState({
    x: 0,
    y: 0,
  });
  const pan1 = useRef(new Animated.ValueXY()).current;
  const pan2 = useRef(new Animated.ValueXY()).current;
  const pan3 = useRef(new Animated.ValueXY()).current;
  const panCat = useRef(new Animated.ValueXY()).current;
  useEffect(() => {
    runXY1();
    runXY2();
    runXY3();
    runCat();
  });

  const onTouchDog = () => {
    console.log(width, height);
    let x1 = Math.floor(Math.random() * width);
    let y1 = Math.floor(Math.random() * height);
    let x2 = Math.floor(Math.random() * width);
    let y2 = Math.floor(Math.random() * height);
    let x3 = Math.floor(Math.random() * width);
    let y3 = Math.floor(Math.random() * height);
    console.log(x1, y1, x2, y2, x3, y3);
    setLocation1({
      x: x1,
      y: y1,
    });
    setLocation2({
      x: x2,
      y: y2,
    });
    setLocation3({
      x: x3,
      y: y3,
    });
  };
  const runXY1 = () => {
    Animated.timing(pan1, {
      toValue: { x: location1.x - 50, y: location1.y - 50 },
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  const runXY2 = () => {
    Animated.timing(pan2, {
      toValue: { x: location2.x - 50, y: location2.y - 50 },
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  const runXY3 = () => {
    Animated.timing(pan3, {
      toValue: { x: location3.x - 50, y: location3.y - 50 },
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  const runCat = () => {
    Animated.timing(panCat, {
      toValue: { x: locationCat.x - 50, y: locationCat.y - 50 },
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const onPress = (evt) => {
    var x = evt.nativeEvent.locationX;
    var y = evt.nativeEvent.locationY;
    setLocationCat({
      x: x,
      y: y,
    });
  };

  return (
    <SafeAreaView
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderGrant={onPress}
      style={styles.container}
    >
      <Animated.View style={{ marginLeft: pan1.x, marginTop: pan1.y }}>
        <TouchableOpacity onPress={onTouchDog}>
          <Image
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
            source={require("./assets/dog.png")}
          ></Image>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={{ marginLeft: pan2.x, marginTop: pan2.y }}>
        <TouchableOpacity onPress={onTouchDog}>
          <Image
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
            source={require("./assets/dog.png")}
          ></Image>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={{ marginLeft: pan3.x, marginTop: pan3.y }}>
        <TouchableOpacity onPress={onTouchDog}>
          <Image
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
            source={require("./assets/dog.png")}
          ></Image>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={{ marginLeft: panCat.x, marginTop: panCat.y }}>
        <TouchableOpacity onPress={onTouchDog}>
          <Image
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
            source={require("./assets/icon.png")}
          ></Image>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
