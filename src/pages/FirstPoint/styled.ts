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
  section: {
    width: '100%',
    flex: 0.85,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: 300,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    color: 'white',
  },
  title: {
    color: 'white',
    marginBottom: 5,
  },
});
