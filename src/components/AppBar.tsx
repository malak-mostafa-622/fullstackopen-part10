import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        <Pressable style={styles.tab}>
          <Text style={styles.text}>Repositories</Text>
        </Pressable>
        <Pressable style={styles.tab}>
          <Text style={styles.text}>Sign in</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 90,
    paddingTop: 35,
    backgroundColor: '#24292e',
  },
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  tab: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    height: '100%',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AppBar;