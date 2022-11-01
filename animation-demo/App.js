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
} from "react-native";

const App = () => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [isStop, setStop] = useState(false);
  console.log(fadeAnim);
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const tranfXY = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 150], // 0 : 150, 0.5 : 75, 1 : 0
  });

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              // Bind opacity to animated value
              opacity: fadeAnim,
              transform: [
                {
                  translateY: tranfXY,
                },
              ],
            },
          ]}
        >
          <Text style={styles.fadingText}>Fading View!</Text>
        </Animated.View>
        <Animated.View
          style={{
            transform: [
              {
                translateX: tranfXY,
              },
            ],
          }}
        >
          <Image
            style={{
              width: 50,
              height: 50,
            }}
            resizeMode="contain"
            source={require("./assets/icon.png")}
          ></Image>
        </Animated.View>
      </View>
      <View style={styles.buttonRow}>
        <Button title="Start" onPress={fadeIn} />
        <Button title="Stop" onPress={Animated.timing(fadeAnim).stop} />
        <Button title="Reset" onPress={fadeOut} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue",
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16,
  },
});

export default App;
