import React, { useState, useCallback } from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { styles } from './style';
import { useSelector } from 'react-redux';
import { useAddItem } from '../../hooks/useAddItem';
import { useDeleteItem } from '../../hooks/useDeleteItem';
import { useEditItem } from '../../hooks/useEditItem';
import { useSearchItem } from '../../hooks/useSearchItem';

interface Iitem {
  id: number;
  Name: string;
}

const Home = () => {
  const [isModalVisible, setisModalVisible] = useState<boolean>(false);
  const [inputText, setinputText] = useState<string>('');
  const [state, setstate] = useState<number>(0);

  const todos = useSelector((state: any) => state.todoSlice);
  const { addItem, onAddItem } = useAddItem();
  const { deleteItem, onDeleteItem } = useDeleteItem();
  const { editItem, onEditItem } = useEditItem();
  const { searchItem, onSearchItem } = useSearchItem();

  const [loading, setloading] = useState<boolean>(true);
  const [loadingBtn, setloadingBtn] = useState<boolean>(false);

  // const flatlistRef = useRef();

  const onPressEditItem = (item: Iitem): void => {
    setisModalVisible(true);
    setstate(item.id);
  };

  const onPressSaveEdit = () => {
    onEditItem(state, inputText);
    setisModalVisible(false);
  };

  const onPressAddItem = useCallback(() => {
    setloadingBtn(true);
    setTimeout(() => {
      setloadingBtn(false);
      onAddItem('New Subject');
    }, 2000);
  }, [addItem]);

  const onPressDelItem = useCallback(
    (item: Iitem) => {
      onDeleteItem(item.id);
    },
    [deleteItem],
  );
  // const onPressFunction = () => {
  //   flatlistRef.current.scrollToEnd({animating: true});
  // };

  setTimeout(() => {
    setloading(false);
  }, 2000);

  const renderItem = ({ item }: { item: Iitem }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{item.Name}</Text>
        <View>
          <TouchableOpacity onPress={() => onPressEditItem(item)} style={styles.btn}>
            <Text>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPressDelItem(item)} style={styles.btnDel}>
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row', marginTop: 16 }}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => onSearchItem(text)}
          placeholder="Search Here"
        />

        <TouchableOpacity onPress={onPressAddItem} style={styles.btnAdd}>
          {loadingBtn == true ? (
            <ActivityIndicator color="#fff" size={32} />
          ) : (
            <Text>Add Item</Text>
          )}
        </TouchableOpacity>
      </View>

      {loading == true ? (
        <ActivityIndicator color="#8E97FD" size={60} />
      ) : (
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
      <Modal
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => setisModalVisible(false)}>
        <View style={styles.modalView}>
          <Text style={styles.text}>Change Text:</Text>
          <TextInput
            style={styles.textInputChange}
            onChangeText={(text) => setinputText(text)}
            editable={true}
            multiline={false}
            maxLength={200}
          />
          <TouchableOpacity onPress={() => onPressSaveEdit()} style={styles.touchableSave}>
            <Text style={styles.text}>Save</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Home;
