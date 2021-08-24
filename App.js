import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import InfoBox from "./src/InfoBox";
import Input from "./src/input";
import DropDown from "./src/dropdown";
import { isEmpty } from "lodash";
import FormFieldWrapper from "./src/FormFieldWrapper";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  const [address, setAddress] = useState("");
  const [accountType, setAccountType] = useState("");

  const handleAddress = (name, value) => {
    setAddress(value);
  };

  const handleAccount = (name, value) => {
    setAccountType(value);
  };

  const accountTypeOptions = [
    {
      label: "Savings",
      value: "SB",
    },
    {
      label: "Current",
      value: "CA",
    },
    {
      label: "NRE",
      value: "SB-NRE",
    },
    {
      label: "NRO",
      value: "SB-NRO",
    },
  ];

  return (
    <PaperProvider>
      <View style={styles.container}>
        <InfoBox
          variant="pending"
          heading="Note"
          bodyText="Your bank verification is still pending. You will be able to invest
        once your bank is verified."
          containerStyle={{ marginTop: 40 }}
        />
        <FormFieldWrapper>
          <Input
            label={"Address"}
            onChangeText={(text) => handleAddress("addressline", text)}
            value={address}
            showHelperText={!isEmpty(address)}
          />
        </FormFieldWrapper>
        <FormFieldWrapper>
          <DropDown
            label={"Account Type"}
            onChange={(selectedOption) =>
              handleAccount("account_type", selectedOption)
            }
            options={accountTypeOptions}
            value={accountType}
          />
        </FormFieldWrapper>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
