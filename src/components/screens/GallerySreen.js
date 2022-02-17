import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  ImageBackground, 
  StyleSheet, 
  ActivityIndicator, 
  Dimensions, 
  ScrollView, 
  TouchableOpacity 
} from "react-native"
import { useSelector, useDispatch } from 'react-redux'
import { setDatas } from '../../redux/actions';

const GallerySreen = ({navigation}) => {
  const datas = useSelector(store => store.datas)
  const dispatch = useDispatch()

 const [ loadStatus , setLoadStatus ] = useState(false)
 const [ loadDatas , setLoadDatas ] = useState([])
 const windowWidth = Dimensions.get('window').width;
 const windowHeight = Dimensions.get('window').height;

 const loadRes = () => {
  setLoadStatus(false)
  dispatch(setDatas())
 }


 useEffect(()=>{
  loadRes()
 },[])

 useEffect(()=>{
  return () => {
    setLoadDatas(datas)
    setLoadStatus(true)
  }
 })
console.log(loadDatas[5])
    return(
      <View>
      <ScrollView>
        <View style={styles.container}>
            {
              !loadStatus && <View style={styles.indicator}><ActivityIndicator size={60} color="gray" /></View>
            }
              {
              loadDatas.length > 0 && loadDatas.map(item => (
                <TouchableOpacity 
                  activeOpacity={.5} 
                  key={item.id}
                  onPress={() => 
                    navigation.navigate('Photo', {
                      item: item,
                    })
                  }
                  >
                    <View>
                        <ImageBackground
                            resizeMode='cover'
                            style={{...styles.tinyLogo, width: windowWidth / 2 - 2, height: windowWidth / 2 - 2,}}
                            source={{
                            uri: `${item.links.download}`,
                            }}>
                        <View style={{ ...styles.itemTitle, width: windowWidth / 2 - 2, height: windowWidth / 8}}>
                          <Text style={styles.itemName}>{item.user.name}</Text>
                          <Text style={styles.itemlocation}>{item.user.location}</Text>
                        </View>
                        </ImageBackground>
                    </View>
                 </TouchableOpacity>
                ))
            }     
        </View>
    </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
      display:"flex", 
      justifyContent: "center", 
      alignItems: "center",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    tinyLogo: {
      margin: 1,
    },
    itemTitle: {
      backgroundColor: "#00000050",
      position:"absolute", 
      bottom: 0, 
      display: "flex", 
      alignItems: "center", 
      borderRadius: 10, 
      paddingTop: 5 
    },
    itemlocation: {
      fontSize: 10, 
      color: "#fff", 
      fontWeight: "700",
    },
    itemName: {
      fontSize: 15, 
      color: "#fff", 
      fontWeight: "700",
    }
  });


export default GallerySreen