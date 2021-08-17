import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, TouchableOpacity, ImageBackground, ScrollView, SafeAreaView, Pressable, Modal } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';
const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const getAllData = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/episode');
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const getEpisode = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/episode/' + id);
      const json = await response.json();
      setData(json.results.id);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllData();
  }, []);

  const showEpisodeModal = () => {
      setModalVisible(true);
      getEpisode();
  }

  return (
    <SafeAreaView>
        <View style={styles.container}>    
            <ScrollView>
             <Modal
        animationType="slide"
        style={styles.modal}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => showEpisodeModal()}>
                                <Text style={styles.listItem}>{item.name}, {item.episode}</Text>
                            </TouchableOpacity>
                            
                        )}
                        />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal> 
     
                {/* <Swiper 
                    style={styles.wrapper} 
                    showsButtons={false} 
                    paginationStyle={styles.pagination}   
                    autoplay={true}>
                        <View style={styles.slide1}>
                            <ImageBackground
                                style={{
                                    width: '100%',
                                    height: 250,
                                    resizeMode: 'stretch'
                                }}
                                source={require('../../assets/swiper1.jpg')}>
                            </ImageBackground>
                        </View>
                        <View style={styles.slide2}>
                            <ImageBackground
                                style={{
                                    width: '100%',
                                    height: 250,
                                    resizeMode: 'cover'
                                }}
                                source={require('../../assets/swiper2.jpg')}/>
                        </View>
                        <View style={styles.slide3}>
                            <Text style={styles.text}>And simple</Text>
                        </View>
                </Swiper> */}
                {isLoading ? <ActivityIndicator/> : ( 
                    <ScrollView>
                        <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => showEpisodeModal()}>
                                <Text style={styles.listItem}>{item.name}, {item.episode}</Text>
                            </TouchableOpacity>
                            
                        )}
                        />
                    </ScrollView>
                )}
            </ScrollView>
        </View>
    </SafeAreaView>
  );
};

export default Home;