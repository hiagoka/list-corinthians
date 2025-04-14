import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  Image,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [partipantName, setParticipantName] = useState("");

  function handleParticipantAdd() {
    if (participants.includes(partipantName)) {
      return Alert.alert(
        "Jogador já foi escalado",
        "Já existe jogador na lista com esse nome"
      );
    }

    setParticipants((prevState) => [...prevState, partipantName]);
    setParticipantName("");

    console.log("Você clicou no botão");
  }
  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Você deseja remover o jogador ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setParticipants(
            (prevState) =>
              prevState.filter((participant) => participant !== name) // Removendo o participante do
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
    console.log(`Você clicou no botton ${name}`);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Corinthians</Text>
      <Text style={styles.dateName}>Escale seu time ideal do timão.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Escale seu jogador"
          placeholderTextColor="#6B6B6B"
          onChangeText={(text) => setParticipantName(text)}
          value={partipantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.emptyComponent}>
            <Text style={styles.listEmptyText}>
              Ainda não escalou seus jogadores? Adicione já a sua escalação!
            </Text>

            <Image
              style={styles.image}
              source={require("../../assets/corinthians.png")}
            />
          </View>
        )}
      />
    </View>
  );
}
