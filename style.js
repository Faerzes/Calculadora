
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 200, 
    height: 200, 
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  error: {
    color: 'red',
  },
  doneImage: {
    width: 200, 
    height: 200,
  },
});

export default styles;
