import React, { Component } from 'react';
import { Modal, StyleSheet, TouchableWithoutFeedback, View, Alert } from 'react-native';

class CalendarModal extends Component {
    constructor(props) {
        super(props);
        this.state={
            visible: false
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    render() {
        return (
            <Modal
                visible={this.state.visible}
                transparent={true}
            >
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <TouchableWithoutFeedback onPress={this.toggleModal}>
                        <View style={styles.leftModalStyle}>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.toggleModal}>
                        <View style={styles.rightModalStyle}>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </Modal>
        )
    }

    toggleModal() {
        this.setState({visible: !this.state.visible});
    }
}

const styles = StyleSheet.create({
    leftModalStyle: {
      backgroundColor: 'red',
      height: '100%',
      width: '50%',
      opacity: .1
    },
    rightModalStyle: {
      backgroundColor: 'blue',
      height: '100%',
      width: '50%',
      opacity: .1
    }
  });

export default CalendarModal;