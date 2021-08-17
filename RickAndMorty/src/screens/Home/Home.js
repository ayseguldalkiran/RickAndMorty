import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Modal from 'react-native-modal';
import styles from './styles';

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalCharacterVisible, setModalCharacterVisible] = useState(false);
  const [modalData, setModalData] = useState({id: 0, name: '', characters: []});
  const [characterList, setCharacterList] = useState([]);
  const [characterData, setCharacterData] = useState({name: ''});

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
  };

  const getEpisode = async id => {
    try {
      const response = await fetch(
        'https://rickandmortyapi.com/api/episode/' + id,
      );
      await response.json().then(j => {
        setModalData(j);
        getCharacters(j.characters);
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getCharacters = charUrlArray => {
    try {
      let characters = [];
      charUrlArray.forEach(element => {
        fetch(element).then(response => {
          response.json().then(json => {
            characters.push(json);
          });
        });
      });
      setTimeout(function () {
        setCharacterList(characters);
      }, 800);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setModalVisible(true);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  const showEpisodeModal = id => {
    getEpisode(id);
    console.log(characterList);
  };

  let Image_Http_URL = {
    uri: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          paginationStyle={styles.pagination}
          autoplayTimeout={4.5}
          autoplay={true}>
          <View style={styles.slider}>
            <ImageBackground
              style={styles.slideImage}
              source={require('../../assets/swiper1.png')}
            />
          </View>
          <View style={styles.slider}>
            <ImageBackground
              style={styles.slideImage}
              source={require('../../assets/swiper2.png')}
            />
          </View>
          <View style={styles.slider}>
            <ImageBackground
              style={styles.slideImage}
              source={require('../../assets/swiper3.png')}
            />
          </View>
          <View style={styles.slider}>
            <ImageBackground
              style={styles.slideImage}
              source={require('../../assets/swiper4.png')}
            />
          </View>
        </Swiper>
        <Text style={styles.episodeTitle}>Episodes</Text>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <ScrollView horizontal={true}>
            <FlatList
              style={styles.flatList}
              data={data}
              renderItem={({item}) => (
                <TouchableOpacity onPress={() => showEpisodeModal(item.id)}>
                  <View style={styles.listItemsContainer}>
                    <Image
                      style={styles.episodesImage}
                      source={require('../../assets/episodesImage.png')}
                    />
                    <View>
                      <Text style={styles.listItem}>
                        {item.episode}{' '}
                        <Text style={styles.episodeNameText}> {item.name}</Text>{' '}
                      </Text>
                      <Text style={styles.airDateText}>
                        Air Date: {item.air_date}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </ScrollView>
        )}
        {/* episode modal start */}

        <Modal
          style={styles.modal}
          backdropOpacity={0.5}
          transparent={true}
          onBackButtonPress={() => setModalCharacterVisible(false)}
          onBackdropPress={() => setModalCharacterVisible(false)}
          onSwipeComplete={() => setModalCharacterVisible(false)}
          isVisible={modalCharacterVisible}
          onRequestClose={() => {
            setModalCharacterVisible(!setModalCharacterVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image
                style={styles.characterImage}
                source={{uri: characterData.image}}
              />
              <Text style={styles.boldStyle}>
                Name:{' '}
                <Text style={styles.regularStyle}>{characterData.name}</Text>
              </Text>
              <Text style={styles.boldStyle}>
                Status:{' '}
                <Text style={styles.regularStyle}>{characterData.status}</Text>
              </Text>
              <Text style={styles.boldStyle}>
                Species:{' '}
                <Text style={styles.regularStyle}>{characterData.species}</Text>
              </Text>
              <Text style={styles.boldStyle}>
                Gender:{' '}
                <Text style={styles.regularStyle}>{characterData.gender}</Text>
              </Text>
              <Text style={styles.boldStyle}>
                Origin:{' '}
                <Text style={styles.regularStyle}>
                  {characterData.origin.name}
                </Text>
              </Text>
              <Text style={styles.boldStyle}>
                Location:{' '}
                <Text style={styles.regularStyle}>
                  {characterData.location.name}
                </Text>
              </Text>
              <View>
                <TouchableOpacity
                  onPress={() => setModalCharacterVisible(false)}>
                  <Text style={{marginTop: 20, fontWeight: 'bold'}}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        {/* episode modal end */}

        {/* character modal start */}
        <Modal
          animationType="slide"
          style={styles.modal}
          visible={modalVisible}
          backdropOpacity={0.5}
          swipeDirection="down"
          onBackButtonPress={() => setModalVisible(false)}
          onBackdropPress={() => setModalVisible(false)}
          onSwipeComplete={() => setModalVisible(false)}
          transparent
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text>
                {modalData.episode} - {modalData.name}
              </Text>
              <Text style={styles.characterTitle}>Characters</Text>

              <FlatList
                style={styles.flatList}
                data={characterList}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => {
                      setCharacterData(item);
                      setModalCharacterVisible(true);
                    }}>
                    <View style={styles.listEpisodeItemsContainer}>
                      <Image
                        style={styles.imageCharacter}
                        source={{uri: item.image}}
                      />
                      <Text style={styles.listItemModal}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
              <TouchableOpacity onPress={() => setModalCharacterVisible(false)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {/* character modal end */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
