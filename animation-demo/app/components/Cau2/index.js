function Cau2() {
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}
      >
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
    </SafeAreaView>
  );
}

export default Cau2;
