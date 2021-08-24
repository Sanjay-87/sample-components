import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {HelperText, Menu, TextInput} from 'react-native-paper';
import Input from './input';
import {findIndex, isEmpty} from 'lodash';
import PropTypes from 'prop-types';

function DropDown(props) {
  const [visible, setVisible] = React.useState(false);
  const [dropDownDirection, setDropdownDirection] = useState('menu-down');
  const [inputLayout, setInputLayout] = useState({
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  });
  const {
    options,
    error,
    helperTextType,
    showHelperText,
    helperText,
    styleFlatList,
    value,
    disabled,
    onChange,
    label,
    errorMessage,
  } = props;
  const getLabelForValue = () => {
    const label = options.find((el) => el.value === value)?.label;
    if (label) {
      return label;
    } else {
      return '';
    }
  };

  const onLayout = (e) => {
    setInputLayout(e.nativeEvent.layout);
  };

  const openMenu = () => {
    setVisible(true);
    setDropdownDirection('menu-up');
  };

  const closeMenu = () => {
    setVisible(false);
    setDropdownDirection('menu-down');
  };

  const handleSelection = (el) => {
    onChange(el.value);
    closeMenu();
  };

  const searchIndex = () => {
    const val = findIndex(options, (el) => el.label === getLabelForValue());
    if (val > 0) {
      return val;
    } else {
      return 0;
    }
  };

  const renderOptions = ({ item: el }) => {
    return (
      <Menu.Item
        onPress={() => handleSelection(el)}
        title={el.label}
        style={{ maxWidth: inputLayout?.width }}
        titleStyle={{ color: el.label === getLabelForValue() ? '#4F2DA7' : '#160D2E' }}
      />
    );
  };

  return (
    <SafeAreaView pointerEvents={disabled ? 'none' : 'auto'}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <InputDropdown
              onLayout={onLayout}
              openMenu={openMenu}
              displayValue={getLabelForValue()}
              error={error || !isEmpty(errorMessage)}
              dropDownDirection={dropDownDirection}
              disabled={disabled}
              label={label}
          />
        }
        style={{
          maxWidth: inputLayout?.width,
          width: inputLayout?.width,
          marginTop: inputLayout?.height,
        }}
      >
        <FlatList
          keyExtractor={(el, idx) => idx.toString()}
          data={options}
          renderItem={renderOptions}
          style={[styles.flatList, styleFlatList]}
          initialScrollIndex={searchIndex()}
        />
      </Menu>
      {!isEmpty(errorMessage) && (
          <HelperText type={'error'} visible={true}>
            {errorMessage}
          </HelperText>
      )}

      {showHelperText && (
        <HelperText type={helperTextType} visible={showHelperText}>
          {helperText}
        </HelperText>
      )}


    </SafeAreaView>
  );
}
export default DropDown;

const InputDropdown = (props) => {
  const { onLayout, openMenu, displayValue, error, dropDownDirection, disabled, label } = props;
  return (
    <TouchableWithoutFeedback onLayout={onLayout} onPress={openMenu}>
      <View>
        <Input
            label={label}
            value={displayValue}
            editable={false}
            error={error}
            right={<TextInput.Icon name={dropDownDirection} disabled/>}
            disabled={disabled}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  flatList: {
    maxHeight: 200,
  },
});

DropDown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.bool,
  helperTextType: PropTypes.string,
  showHelperText: PropTypes.bool,
  helperText: PropTypes.string,
  styleFlatList: PropTypes.shape({}),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  label: PropTypes.string,
};
