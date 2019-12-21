import React, { Component } from 'react';
import { Modal, TouchableWithoutFeedback, View, Alert } from 'react-native';
import CalendarModalStyles from '../styles/CalendarModalStyles';

class CalendarModal extends Component {
    constructor(props) {
        super(props);
        this.state={
            visible: false
        }
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    render() {
        return (
            <Modal
                visible={this.state.visible}
                transparent={true}
            >
                <View style={CalendarModalStyles.wrapperStyle}>
                    <TouchableWithoutFeedback onPress={this.hideModal}>
                        <View style={[CalendarModalStyles.leftModalStyle, CalendarModalStyles.shadow]}>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.hideModal}>
                        <View style={[CalendarModalStyles.rightModalStyle, CalendarModalStyles.shadow]}>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </Modal>
        )
    }

    showModal() {
        this.setState({ visible: true});
    }
    
    hideModal() {
        this.props.closeHandler();
        this.setState({visible: false});
    }
}

export default CalendarModal;