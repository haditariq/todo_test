import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTask} from '../redux/taskReducer';
import Button from './Button';

type AddItemProps = {
  ontoggle: (state: boolean) => void;
};

const AddItem: React.FC<AddItemProps> = ({ontoggle}) => {
  const [input, setInput] = useState<string>('');
  const dispatch = useDispatch();

  const addItem = () => {
    if (!input?.length) {
      alert('Task cannot be empty.');
      return;
    } else {
      dispatch(addTask({title: input}));
    }
    ontoggle(false);
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => Keyboard.dismiss()}
      activeOpacity={1}>
      <TextInput
        multiline
        placeholder={'Add your text here.'}
        style={styles.input}
        value={input}
        onChangeText={e => setInput(e)}
      />

      <View style={styles.center}>
        <Button title={'Done'} onPress={addItem} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
  },
  input: {
    padding: 20,
    paddingTop: 10,
    paddingVertical: 20,
    margin: 8,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    height: 250,
  },
  center: {
    flex: 1,
  },
});

export default AddItem;
