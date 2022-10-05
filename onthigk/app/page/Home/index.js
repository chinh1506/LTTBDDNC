import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import FlatListCutom from "../../component/FlatListCustom";

function Home() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);
  const handleDelete = (index) => {
    setJobs(jobs.filter((job, i) => i != index));
  };
  return (
    <View style={styles.wrapper}>
      <TextInput
        onChangeText={(value) => setJob(value)}
        value={job}
        style={styles.input}
        placeholder="enter job"
      />
      <TouchableOpacity
        onPress={() => {
          if (job) {
            setJobs((prev) => [...prev, job]);
            setJob("");
          }
        }}
        style={styles.add}
      >
        <Text style={{ color: "white" }}>ADD</Text>
      </TouchableOpacity>
      <FlatListCutom handleDelete={handleDelete} items={jobs}></FlatListCutom>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    margin: 5,
    height: 40,
    width: "80%",
    borderWidth: 1,
  },
  add: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: "20%",
    backgroundColor: "red",
  },
});

export default Home;
