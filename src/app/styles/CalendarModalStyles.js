import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    leftModalStyle: {
      backgroundColor: 'red',
      height: '90%',
      width: '47%',
      opacity: .15,
      marginRight: '2%',
    },
    rightModalStyle: {
      backgroundColor: 'blue',
      height: '90%',
      width: '47%',
      opacity: .15
    },
    wrapperStyle: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    shadow: {
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 3},
        shadowOpacity: 1
    }
});

export default styles;