import React from 'react';
// import {NavigationComponen,t Modal as RNNModal} from 'react-native-navigation';
import {TouchableOpacity, Modal} from 'react-native';

type ModalProps = {
  visible: boolean;
  onToggle: (state: boolean) => void;
  children: JSX.Element
};

const ModalComp: React.FC<ModalProps> = props => {
  const {visible, onToggle} = props;

  return (
    <Modal
      animationType={'slide'}
      visible={visible}
      presentationStyle={'pageSheet'}
      onRequestClose={() => onToggle(false)}
      onDismiss={() => onToggle(false)}>
      <TouchableOpacity
        label="Dismiss declared Modal"
        testID={'DISMISS_MODAL_BTN'}
        onPress={() => onToggle(false)}
      />
      {props.children}
    </Modal>
  );
};

export default ModalComp;
