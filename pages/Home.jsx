import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.headerInner}>
          <View style={styles.onlineBox}>
            <View style={styles.dot} />
            <Text style={styles.onlineText}>Online</Text>
          </View>

          <Image
            source={require('../assets/otp.jpg')}
            style={styles.profileImage}
          />
        </View>
      </View>

      <View style={styles.cardWrapper}>
        <Pressable style={styles.bigCard}>
          <Image
            source={require('../assets/pblimage.jpg')}
            style={styles.bigCardImage}
          />

          <View style={styles.bigCardContent}>
            <Text style={styles.bigCardTitle}>PBL</Text>
            <Text style={styles.bigCardSubtitle}>
              Register your team for project ➜
            </Text>
          </View>
        </Pressable>
      </View>
      
      <View style={styles.bottomNav}>
        <Pressable style={styles.navItemActive}>
          <Icon name="home" size={24} color="#fff" />
          <Text style={styles.navLabelActive}>Home</Text>
        </Pressable>

        <Pressable style={styles.navItem}>
          <Icon name="notifications-outline" size={24} color="#777" />
        </Pressable>

        <Pressable style={styles.navItem}>
          <Icon name="settings-outline" size={24} color="#777" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },

  /* Header */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  headerWrapper: {
    paddingHorizontal: 4,
    marginBottom: 10,
  },

  headerInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f3f3f3', // light gray
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 30, // rounded like bottom bar
    elevation: 4, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },

  onlineBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2f2f2f',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4cd964',
    marginRight: 6,
  },

  onlineText: {
    color: '#fff',
    fontSize: 13,
  },

  profileImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },

  /* BIG CARD */
  bigCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 3,
  },

  bigCardImage: {
    width: '100%',
    height: 180,
  },

  bigCardContent: {
    padding: 16,
  },

  bigCardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },

  bigCardSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 6,
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

  cardWrapper: {
    flex: 1,
    justifyContent: 'center', 
  },
});

export default Home;
