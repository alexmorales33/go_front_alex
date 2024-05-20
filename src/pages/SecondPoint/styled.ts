import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#000',
    flex: 1,
  },
  scrollContentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: 300,
  },
  section: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    marginBottom: 5,
  },
});
