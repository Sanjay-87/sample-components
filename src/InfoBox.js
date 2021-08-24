import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { isEmpty } from "lodash";
import SuccessIcon from "./assets/success_icon.svg";
import ErrorIcon from "./assets/error_icon.svg";
import PendingIcon from "./assets/pending_icon.svg";

const Styles = StyleSheet.create({
  infoBoxContainer: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  bodyText: {
    marginLeft: 30,
    marginTop: 11,
    color: "#767e86",
    fontSize: 13,
  },
  stretch: {
    width: 20,
    height: 20,
    backgroundColor: 'lightblue'
  },
});

export default function InfoBox({ heading, messageText, bodyText, variant, containerStyle }) {
  const getIconFor = (variant) => {
    switch (variant) {
      case INFOBOX_VARIANTS.SUCCESS:
        return <SuccessIcon />;
      case INFOBOX_VARIANTS.ERROR:
        return <ErrorIcon />;
      case INFOBOX_VARIANTS.PENDING:
        return <PendingIcon />;
    }
  };

  const getStylingFor = (variant) => {
    switch (variant) {
      case INFOBOX_VARIANTS.SUCCESS:
        return {
          color: "#4D890D",
          backgroundColor: "#E0FFBF",
        };
      case INFOBOX_VARIANTS.ERROR:
        return {
          color: "#8C0E1E",
          backgroundColor: "#fff5f6",
        };
      case INFOBOX_VARIANTS.PENDING:
        return {
          color: "#B39712",
          backgroundColor: "#FFF6CE",
        };
    }
  };

  return (
    <View
      style={[
        Styles.infoBoxContainer,
        { backgroundColor: getStylingFor(variant).backgroundColor },
        containerStyle,
      ]}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        {getIconFor(variant)}
        <Text
          style={{
            color: getStylingFor(variant).color,
            fontSize: 13,
            lineHeight: 21,
            marginLeft: 12,
            flex: 1,
            marginTop: -4,
          }}
        >
          {!isEmpty(heading) ? heading : messageText}
        </Text>
      </View>
      {!isEmpty(bodyText) && <Text style={Styles.bodyText}>{bodyText}</Text>}
    </View>
  );
}

export const INFOBOX_VARIANTS = {
  SUCCESS: "success",
  ERROR: "err",
  PENDING: "pending",
};
