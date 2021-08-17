import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#000029'
  },
  title: {
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold'
  },
  pagerView: {
      flex: 1,
  },
  listItem: {
      color: '#b0bec5',
      fontSize: 18
  },
  wrapper: {
       

  },
  slide1: {
    flex: 1,
    marginTop: -450,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    top:0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  pagination: {
    marginTop: -1450,

  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  modal: {
      margin: 0,
      justifyContent: 'flex-end',
  }

});

module.exports = styles;
