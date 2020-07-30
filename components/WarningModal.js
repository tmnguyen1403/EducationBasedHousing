import React, { Component } from 'react';
import { Text, View, Button, Modal, StyleSheet } from 'react-native';

export default class WarningModal extends Component {
  closeModal() {
    this.props.hideModal();
  }

  render() {
    return (
        <View style={styles.container}>
          <Modal
              visible={this.props.visible}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}
							presentationStyle=""
          >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <Text>{this.props.message}</Text>
                <Button
                    onPress={() => this.closeModal()}
                    title="Close"
                >
                </Button>
              </View>
            </View>
          </Modal>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
		height: 50,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
		height: 50,
  },
  innerContainer: {
    alignItems: 'center',
  },
});
