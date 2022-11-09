import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import AddItem from './AddItem';
import CardItem from './CardItem';
import {setList} from '../redux/taskReducer';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
axios.defaults.url = 'https://gorest.co.in/public/v2/';

type HeaderProps = {
  leftComp: () => void;
  heading: string;
  rightComp: () => void;
};

const HeaderComponent: React.FC<HeaderProps> = ({
  leftComp,
  heading,
  rightComp,
}) => {
  return (
    <View style={styles.headerContainer}>
      {leftComp && leftComp()}
      <Text style={styles.heading}>{heading}</Text>
      {rightComp && rightComp()}
    </View>
  );
};

const AddModalContent = () => {
  let {tasks} = useSelector(x => x.tasks);
  const dispatch = useDispatch();
  const [addItem, setAddItem] = useState<boolean>(false);

  useEffect(() => {
    async function fetchTasks() {
      const response = await axios.get('todos');
      dispatch(setList(response.data));
    }
    if (!tasks.length) {
      fetchTasks();
    }
  }, []);

  const renderCards = () => (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={[...tasks].reverse()}
      renderItem={item => <CardItem title={item.item.title} />}
      keyExtractor={item => item.title + Math.random()}
    />
  );

  if (addItem) {
    return (
      <SafeAreaView style={styles.container}>
        {HeaderComponent({
          leftComp: () => (
            <TouchableOpacity onPress={() => setAddItem(false)}>
              <Text>Back</Text>
            </TouchableOpacity>
          ),
          heading: 'Adding Data',
          rightComp: () => (
            <TouchableOpacity onPress={() => setAddItem(false)}>
              <Text style={styles.transparent}>Back</Text>
            </TouchableOpacity>
          ),
        })}
        <AddItem ontoggle={() => setAddItem(false)} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {HeaderComponent({
        leftComp: () => <Text style={styles.transparent}>Add</Text>,
        heading: 'My Modal',
        rightComp: () => (
          <TouchableOpacity onPress={() => setAddItem(true)}>
            <Text>Add</Text>
          </TouchableOpacity>
        ),
      })}
      <View style={styles.cardContainer}>{renderCards()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
  },
  transparent: {
    color: 'transparent',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    fontSize: 18,
  },
  cardContainer: {
    padding: 15,
  },
});

export default AddModalContent;
