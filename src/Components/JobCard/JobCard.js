import React from "react";
import styles from "./JobCard.style";
import { View, Text, TouchableWithoutFeedback } from "react-native";

const JobCard = ({ jobs }) => {
  return (
    <TouchableWithoutFeedback onPress={() => console.log("job card pressed!")}>
      <View style={styles.container}>
        <Text style={styles.categoryName}>{jobs.categories[0].name}</Text>
        <Text style={styles.company}>{jobs.company.name}</Text>
        <Text style={styles.location}>{jobs.locations[0].name}</Text>
        <Text style={styles.level}>{jobs.levels[0].name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default JobCard;
