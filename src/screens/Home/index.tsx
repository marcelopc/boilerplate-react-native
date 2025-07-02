import { View, Text } from 'react-native';
import Button from '../../components/Button';
export const Home = () => {
  return (
    <View>
      <Text>Eu sou a homescreen!</Text>
      <Button label="Click Me" onClick={() => alert('Button clicked!')} />
    </View>
  );
};

export default Home;
