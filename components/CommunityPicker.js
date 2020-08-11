import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, Fragment } from "react-native";

const CommunityPicker = ({visible, getValue, communities, defaultValue}) => {

  const [selectedValue, setSelectedValue] = useState(defaultValue);
	console.log("hello communitypicker")

  return (
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
				onValueChange={(itemValue, itemIndex) => {
					setSelectedValue(itemValue)
					getValue(itemValue)
				}}
				mode="dialog"
      >
			{ communities.map((community, index) =>
				<Picker.Item
				key={community._id}
				label={community.name}
				value={index}/>)
			}
      </Picker>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  },
	picker: {
		flex: 1,
	}
});

export default CommunityPicker;
