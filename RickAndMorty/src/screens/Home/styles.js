import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0',
  },
  listItemsContainer: {
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    flex: 1,
    flexDirection: 'row',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  characterTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  listItem: {
    marginTop: 15,
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  episodeNameText: {
    marginTop: 15,
    fontSize: 16,
    color: '#9e9e9e',
  },
  episodesImage: {
    width: 80,
    height: 80,
  },
  imageCharacter: {
    width: 60,
    height: 60,
    marginVertical: 10,
    marginRight: 15,
  },

  listEpisodeItemsContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 10,
    shadowColor: '#000',
    flex: 1,
    flexDirection: 'row',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  airDateText: {
    fontSize: 16,
    color: '#9e9e9e',
    marginBottom: 15,
  },
  listItemModal: {
    color: 'black',
  },
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  characterModal: {
    marginBottom: 10,
    backgroundColor: 'white',
    marginLeft: 3,
    marginRight: 7,
    borderRadius: 10,
    shadowColor: '#000',
    minWidth: '100%',
    minHeight: '100%',
  },
  characterImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  boldStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  regularStyle: {
    fontSize: 18,
    fontWeight: 'normal',
  },
  modalView: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 15,
    paddingBottom: 30,
  },
  episodeTitle: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 15,
  },
  flatList: {
    marginHorizontal: 10,
    marginTop: 5,
    marginBottom: 20,
    minWidth: '95%',
  },
  wrapper: {
    height: 220,
    marginBottom: 10,
  },
  slider: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  slideImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  pagination: {
    marginTop: -1450,
  },
  scrollView: {
    marginBottom: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
});

module.exports = styles;
