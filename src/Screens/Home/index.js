import React from 'react';
import {styles} from './style';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    source: require('../../../1.jpg'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    source: require('../../../2.jpg'),
  },
  {
    id: '58694af0f-3da1-471f-bd96-145571e29d72',
    source: require('../../../3.jpg'),
  },
  {
    id: '58694a60f-3da1-471f-bd96-145571e29d72',
    source: require('../../../4.jpg'),
  },
  {
    id: '586944a0f-3da1-471f-bd96-145571e29d72',
    source: require('../../../5.jpg'),
  },
  {
    id: '586794a0f-3da1-471f-bd96-145571e29d72',
    source: require('../../../7.jpg'),
  },
  {
    id: '58694a50f-3da1-471f-bd96-145571e29d72',
    source: require('../../../6.jpg'),
  },
];

const Item = ({source}) => (
  <View style={styles.item}>
    <Image style={{width: 300, height: 300}} source={source} />
  </View>
);

export default function Home() {
  const renderItem = ({item}) => <Item source={item.source} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};






























































// import React, {useState} from 'react';
// import {styles} from './style';
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';
// export default function Home() {


//     return(
// <View style={styles.nainView}>
// <Text style={styles.text}>Hello from home</Text>
// </View>


//     );
// }
