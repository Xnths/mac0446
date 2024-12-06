import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function Index() {
  const navigation = useNavigation();

  // Estados para cada campo do formulário
  const [title, setTitle] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  // Função para lidar com o clique no botão "Salvar"
  const handleSave = () => {
    if (!title || !targetAudience || !date || !time || !description) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }
    Alert.alert("Sucesso", "Evento salvo com sucesso!");
    // Aqui você pode adicionar lógica para enviar os dados do formulário ao backend ou salvá-los localmente
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.containerHeader}>
        <Pressable onPress={() => navigation.goBack()} style={styles.button}>
          <FontAwesome size={24} name="arrow-left" color="black" />
        </Pressable>
        <Text style={styles.title}>Novo evento</Text>
      </View>

      {/* Formulário */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Título"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Público alvo"
          value={targetAudience}
          onChangeText={setTargetAudience}
        />
        <TextInput
          style={styles.input}
          placeholder="Data"
          value={date}
          onChangeText={setDate}
        />
        <TextInput
          style={styles.input}
          placeholder="Horário"
          value={time}
          onChangeText={setTime}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Descrição"
          value={description}
          onChangeText={setDescription}
          multiline
        />
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  containerHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 8,
  },
  button: {
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    flex: 1,
    gap: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  saveButton: {
    backgroundColor: "#77b300",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
