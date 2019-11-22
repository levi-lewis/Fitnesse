import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default function App() {
  return (
    <View style={styles.container}>
      <CalendarList
      futureScrollRange={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
