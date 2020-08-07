import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, Fragment } from "react-native";

//custom helpers
import { getAmPmTimes } from '../utils/api'

const TimePicker = ({visible, getValue}) => {

  const [selectedValue, setSelectedValue] = useState("");
	if (!visible) {
		console.log("hello timepicker")
		return null
	}
	let times = getAmPmTimes()
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
			{ times.map(hour =>
				<Picker.Item
				key={hour}
				label={hour}
				value={hour}/>)
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

export default TimePicker;
