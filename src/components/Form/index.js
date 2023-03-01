import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "./ResultImc/";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  const imcCalculator = () => {
    return setImc(weight / (height * height).toFixed(2));
  };
  console.log(imc);

  const validatorImc = () => {
    if (weight != null && height != null) {
      imcCalculator();
      // setHeight(null);
      // setWeight(null);
      setMessageImc("Seu imc é igual a: ");
      setTextButton("Calcular novamente");
      return;
    }
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha o peso e altura");
  };

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          onChangeText={setHeight}
          value={height}
        />
        <Text>Peso</Text>
        <TextInput
          placeholder="Ex. 70.269"
          keyboardType="numeric"
          onChangeText={setWeight}
          value={weight}
        />
        <Button onPress={() => validatorImc()} title={textButton} />
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}
