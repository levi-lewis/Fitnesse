import React, { Component } from 'react';
import { CalendarList } from 'react-native-calendars';
import { View} from 'react-native';
import CalendarModal from './app/components/CalendarModal';
import AppStyles from './app/styles/AppStyles.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.showCalendarModal = this.showCalendarModal.bind(this);
    this.hideCalendarModal = this.hideCalendarModal.bind(this);
    this.state = { modalVisible: false };
  }

  render() {
    return (
      <View >
        <CalendarModal ref={ref => { this.calendarModal = ref }} closeHandler={this.hideCalendarModal}/>
        <View style={this.state.modalVisible ? AppStyles.unfocusedCalendar : null}>
          <CalendarList onDayPress={this.showCalendarModal} />
        </View>
      </View>
    )
  }

  showCalendarModal() {
    if(this.calendarModal) {
      this.calendarModal.showModal();
      this.setState( { modalVisible: true } );
    }
  }

  hideCalendarModal() {
    this.setState({ modalVisible: false});
  }
}

export default App;