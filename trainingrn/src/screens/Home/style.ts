import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    marginBottom: 6,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width - 8,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  text: {
    marginVertical: 30,
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  modalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableSave: {
    backgroundColor: '#8E97FD',
    paddingHorizontal: 100,
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 12,
  },
  textInput: {
    width: (width * 3) / 4 - 10,
    height: 63,
    backgroundColor: '#F2F3F7',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  textInputChange: {
    width: (width * 3) / 4 - 10,
    height: 63,
    backgroundColor: '#F2F3F7',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 12,
  },
  btn: {
    width: 50,
    height: 20,
    marginRight: 20,
  },
  btnDel: {
    width: 50,
    height: 20,
    marginRight: 20,
  },

  btnAdd: {
    width: (width * 1) / 4 - 10,
    // width: 50,
    flexDirection: 'row',
    height: 63,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8E97FD',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
});