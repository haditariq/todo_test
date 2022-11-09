import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Button from '../components/Button';
import Modal from '../components/Modal';
import MyModalContent from '../components/MyModalContent';

const MoreScreen = () => {
  const [modalStatus, setModalStatus] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title={'Open Modal'}
        onPress={() => setModalStatus(!modalStatus)}
      />

      <Modal
        visible={modalStatus}
        onToggle={() => setModalStatus(!modalStatus)}>
        <MyModalContent />
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0945EF',
    borderRadius: 5,
    padding: 20,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default MoreScreen;
