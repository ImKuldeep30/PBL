import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomPill = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.pill}>
        
        <View style={styles.item}>
          <Icon name="information-circle-outline" size={22} />
          <Text style={styles.label}>About</Text>
        </View>

        <View style={styles.item}>
          <Icon name="people-outline" size={22} />
          <Text style={styles.label}>Join Us</Text>
        </View>

        <View style={styles.item}>
          <Icon name="help-circle-outline" size={22} />
          <Text style={styles.label}>Help</Text>
        </View>

        <View style={styles.item}>
          <Icon name="globe-outline" size={22} />
          <Text style={styles.label}>Official</Text>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    alignItems: "center",
  },

  pill: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 40,
    width: "90%",
    justifyContent: "space-between",

    // shadow (iOS)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,

    // shadow (Android)
    elevation: 8,
  },

  item: {
    alignItems: "center",
  },

  label: {
    fontSize: 12,
    marginTop: 4,
    color: "#333",
  },
});


export default BottomPill;
