import React from "react";
import { FlatList } from "react-native";
import Config from "react-native-config";
import JobCard from "../../Components/JobCard";
import useFetch from "../../Hooks/useFetch/useFetch";
import styles from "./Jobs.style";
// import Loading from "../../Components/Loading";
// import Error from "../../Components/Error";

const URL = "https://www.themuse.com/api/public/jobs?page=1";

const Jobs = ({ navigation }) => {
  const { loading, data, error } = useFetch(URL);
  console.log(data);

  const handleJobsSelect = (id) => {
    navigation.navigate("DetailPage", { id });
  };

  const renderJobs = ({ item }) => (
    <JobCard jobs={item} onSelect={() => handleJobsSelect(id.item)} />
  );

  // if (loading) {
  //   return <Loading />;
  // }

  // if (error) {
  //   return <Error />;
  // }

  return <FlatList data={data.results} renderItem={renderJobs} />;
};

export default Jobs;
