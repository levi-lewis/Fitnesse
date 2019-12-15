import React, { Component } from 'react';
import { CalendarList } from 'react-native-calendars';
import { StyleSheet, View} from 'react-native';
import CalendarModal from './app/components/CalendarModal';

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleCalendarModal = this.toggleCalendarModal.bind(this);
    this.state = { modalVisible: false };
  }


  render() {
    return (
      <View>
        <CalendarModal ref={ref => { this.calendarModal = ref }} />
        <View style={this.state.modalVisible ? styles.unfocusedCalendar : null}>
          <CalendarList onDayPress={this.toggleCalendarModal} />
        </View>
      </View> 
    )
  }

  toggleCalendarModal() {
    if(this.calendarModal) {
      this.calendarModal.toggleModal();
    }
  }
}

const styles = StyleSheet.create({
  unfocusedCalendar: {
    opacity: .1
  }
});

export default App;