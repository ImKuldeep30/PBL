import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context'

const Setting = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.backBtn}>
          <Text style={styles.backText}>←</Text>
        </Pressable>

        <Text style={styles.headerTitle}>Account Settings</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>General</Text>

        <Pressable style={styles.card}>
          <View style={styles.iconBox}>
            <Icon name="person-outline" size={20} color="#000" />
          </View>
          <Text style={styles.cardText}>Personal Information</Text>
        </Pressable>

        <Pressable style={styles.card}>
          <View style={styles.iconBox}>
            <Icon name="notifications-outline" size={20} color="#000" />
          </View>
          <Text style={styles.cardText}>Notification</Text>
        </Pressable>

        <Pressable style={styles.card}>
          <View style={styles.iconBox}>
            <Icon name="help-circle-outline" size={20} color="#000" />
          </View>
          <Text style={styles.cardText}>Help</Text>
        </Pressable>
      </View>

      <View style={styles.bottomNav}>
        <Pressable style={styles.navItem}>
          <Icon name="home-outline" size={24} color="#777" />
        </Pressable>

        <Pressable style={styles.navItem}>
          <Icon name="notifications-outline" size={24} color="#777" />
        </Pressable>

        <Pressable style={styles.navItemActive}>
          <Icon name="settings" size={22} color="#fff" />
          <Text style={styles.navLabelActive}>Settings</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    backgroundColor: 'black',
    margin: 10,
    paddingTop: 20,
    paddingBottom: 24,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#6b6b6b',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  backText: {
    fontSize: 18,
    color: '#fff',
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
  },

  /* Content */
  content: {
    padding: 16,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 14,
    color: '#000',
  },

  /* Cards */
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 14,
    marginBottom: 12,
  },

  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  cardText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
  },

  /* Bottom Navigation */
  bottomNav: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f5f5f5',
    paddingVertical: 10,
    borderRadius: 30,
    elevation: 4,
  },

  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  navItemActive: {
    backgroundColor: 'black',
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  navLabelActive: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 6,
  },
});

export default Setting;
