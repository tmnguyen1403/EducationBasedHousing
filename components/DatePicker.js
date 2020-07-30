import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, Fragment } from "react-native";

const DatePicker = ({visible, getValue}) => {

	if (!visible) {
		console.log("hello datepicker")
		return null
	}
	const [selectedValue, setSelectedValue] = useState("");
	let dates = () => {
		let diff = new Date() - new Date(0)
		let items = []
		for (let index = 0; index < 20; ++index) {
			let date = new Date(diff + index * 24 * 3600 * 1000)
			items.push(date)
		}
		return items
	}
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
			{ dates().map(value =>
				<Picker.Item
				key={value.toDateString()}
				label={value.toDateString() === (new Date()).toDateString() ? "Today" : value.toDateString()}
				value={value.toLocaleString().split(",")[0]}/>)
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

export default DatePicker;
