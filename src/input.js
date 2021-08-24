import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, HelperText, TextInput } from "react-native-paper";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";

function Input(props) {
  const {
    label,
    mode,
    value,
    onChangeText,
    disabled,
    placeholder,
    multiline,
    numberOfLines,
    onFocus,
    onBlur,
    render,
    style,
    editable,
    autoFocus,
    keyboardType,
    maxLength,
    req,
    secureTextEntry,
    helperText,
    helperTextType,
    editText,
    onEdit,
    Icon,
    onChange,
    autoCapitalize,
    theme,
    errorMessage,
    imageUrl,
  } = props;

  return (
    <View style={Inputstyles.inputWrapper}>
      <TextInput
        label={label}
        mode={mode}
        value={value}
        onChangeText={onChangeText}
        onChange={onChange}
        disabled={disabled || editText}
        placeholder={placeholder}
        multiline={multiline}
        numberOfLines={numberOfLines}
        onFocus={onFocus}
        onBlur={onBlur}
        style={[Inputstyles.inlineStyle, style]}
        editable={editable}
        autoFocus={autoFocus}
        keyboardType={keyboardType}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
        render={render}
        req={req}
        theme={theme}
        error={!isEmpty(errorMessage) ? true : false}
        autoCapitalize={autoCapitalize}
        {...props}
      />

      {editText && (
        <View style={Inputstyles.button}>
          <Button color={'#00BC32'} onPress={onEdit}>
            Edit
          </Button>
        </View>
      )}
      {Icon && (
        <View style={Inputstyles.icon}>
          <Icon />
        </View>
      )}
      {imageUrl ? (
        <View style={Inputstyles.icon}>
          <Image style={Inputstyles.logo} source={{ uri: imageUrl }} />
        </View>
      ) : null}
      {!isEmpty(helperText) && (
        <HelperText
          type={helperTextType}
          visible={helperText ? true : false}
          style={Inputstyles.helperTextStyle}
        >
          {helperText}
        </HelperText>
      )}
      {!isEmpty(errorMessage) && (
        <HelperText
          type="error"
          visible={errorMessage ? true : false}
          style={Inputstyles.helperTextStyle}
        >
          {errorMessage}
        </HelperText>
      )}
    </View>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mode: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChangeText: PropTypes.func,
  disabled: PropTypes.bool,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  multiline: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  numberOfLines: PropTypes.number,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  render: PropTypes.func,
  style: PropTypes.object,
  editable: PropTypes.bool,
  autoFocus: PropTypes.bool,
  keyboardType: PropTypes.string,
  maxLength: PropTypes.number,
  req: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  helperText: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.elementType,
    PropTypes.string,
  ]),
  helperTextType: PropTypes.string,
  editText: PropTypes.bool,
  onEdit: PropTypes.func,
  errorMessage: PropTypes.string,
};

const Inputstyles = StyleSheet.create({
  inlineStyle: {
    backgroundColor: '#F8F8F8',
    fontSize: 15,
  },
  button: {
    position: "absolute",
    right: 10,
    top: 15,
  },
  icon: {
    position: "absolute",
    right: 10,
    top: 20,
  },
  helperTextStyle: {
    paddingLeft: 0,
    paddingBottom: 0,
  },
  logo: {
    width: 20,
    height: 20,
  },
});

export default Input;
