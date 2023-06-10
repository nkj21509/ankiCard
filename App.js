import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Button, Pressable, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>卡片標題</Text>
      <TextInput style={styles.titleInput}></TextInput>
      <Text style={styles.title}>卡片內文</Text>
      <TextInput style={styles.contentInput}></TextInput>
      <Button title="儲存"/>
      <Button title="清除"/>
      <Pressable style={styles.clear}>
        <Text>清除</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f3337',
    padding: 20,
  },
  title: {
    marginBottom: 10,
    color: '#ffffff',
  },
  titleInput: {
    backgroundColor: '#525960',
    padding: 10,
    borderRadius: 5,
    color: '#ffffff',
    borderColor: 'transparent',
    marginBottom: 10,
  },
  contentInput: {
    backgroundColor: '#525960',
    padding: 10,
    borderRadius: 5,
    color: '#ffffff',
    borderColor: 'transparent',
    height: 300,
    marginBottom: 20,
  },
  clear: {
    color: '#000000',
    marginTop: 20,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    padding: 8,
    height: 35,
    borderRadius: 3,
  }
});
