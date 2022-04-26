import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import CalendarTest from './components/CalendarTest';
import ClickTest from './components/ClickTest';
import ListTest from './components/ListTest';
import MessageTest from './components/MessageTest';
import SearchTest from './components/SearchTest';

export default function App() {


  return (
    <SafeAreaView style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false}>

        <ClickTest />

        <SearchTest />

        <CalendarTest />

        <MessageTest />

        <ListTest />

      </ScrollView>

    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 20
  },
});
