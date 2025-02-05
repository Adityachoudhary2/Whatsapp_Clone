import { Image, StyleSheet, Text, View } from 'react-native'
import imagePath from '../constants/imagePath'


const Home: React.FC = () => {
  return (
    <View>
      <Text>Home</Text>
      <Image source={imagePath.react_logo}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
