import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, Fragment } from "react-native";

const MonthPicker = ({visible}) => {
  const [selectedValue, setSelectedValue] = useState("jan");
	if (!visible)
		return null
  return (
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
				mode="dialog"
      >
        <Picker.Item label="Jan" value="jan" />
        <Picker.Item label="Feb" value="feb" />
				<Picker.Item label="Mar" value="mar" />
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

export default MonthPicker;
