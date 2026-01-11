import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChatScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable style={styles.backBtn}>
          <Icon name="arrow-back" size={18} color="#000" />
        </Pressable>

        <Text style={styles.headerTitle}>Community</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <View style={[styles.tab, styles.tabActive]}>
          <Text style={[styles.tabText, styles.tabTextActive]}>Main</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.tabText}>Join</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.tabText}>My chats</Text>
        </View>
      </View>

      {/* Community Card */}
      <View style={styles.communityCard}>
        <View style={styles.communityIcon}>
          <Icon name="people" size={18} color="#ff8c00" />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.communityTitle}>Community {'{ Sem 6 }'}</Text>
          <Text style={styles.communitySub}>● 200 Students active</Text>
        </View>
        <Icon name="ellipsis-horizontal" size={20} color="#888" />
      </View>

      {/* Chat Area */}
      <ScrollView style={styles.chatContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.bubbleMe}>
          <Text style={styles.bubbleText}>Anyone from ML section?</Text>
          <Text style={styles.bubbleTime}>11:50</Text>
        </View>

        <View style={styles.bubbleOther}>
          <Text style={styles.bubbleText}>Yes !!</Text>
          <Text style={styles.bubbleTime}>11:40</Text>
        </View>

        <View style={styles.bubbleOther}>
          <Text style={styles.bubbleText}>
            I am looking for a girl member for my team ID - 115.
            Requirements are mentioned in Team Request.
          </Text>
          <Text style={styles.bubbleTime}>11:45</Text>
        </View>

        <View style={styles.infoBubble}>
          <Text style={styles.infoText}>
            Normal chat mode. Open to all and can be used to communicate
            with any member in the community.
          </Text>
        </View>
      </ScrollView>

      {/* Input Bar */}
      <View style={styles.inputBar}>
        <Text style={styles.inputPlaceholder}>Type a message...</Text>
        <Pressable style={styles.micBtn}>
          <Icon name="mic" size={18} color="#000" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  /* Header */
  header: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
  },

  backBtn: {
    position: 'absolute',
    left: 16,
    top: 12,
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* Tabs */
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#2f343b',
    borderRadius: 18,
    padding: 4,
    marginHorizontal: 16,
    marginBottom: 12,
  },

  tab: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 14,
    alignItems: 'center',
  },

  tabActive: {
    backgroundColor: '#5b6068',
  },

  tabText: {
    fontSize: 14,
    color: '#cfcfcf',
    fontWeight: '500',
  },

  tabTextActive: {
    color: '#fff',
    fontWeight: '600',
  },

  /* Community Card */
  communityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    marginHorizontal: 16,
    borderRadius: 16,
    backgroundColor: '#fff',
    elevation: 2,
    marginBottom: 10,
  },

  communityIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ffe8cc',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  communityTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },

  communitySub: {
    fontSize: 12,
    color: '#6b6b6b',
    marginTop: 2,
  },

  /* Chat */
  chatContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },

  bubbleMe: {
    alignSelf: 'flex-end',
    backgroundColor: '#d9f7be',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 14,
    marginBottom: 10,
    maxWidth: '75%',
  },

  bubbleOther: {
    alignSelf: 'flex-start',
    backgroundColor: '#f1f1f1',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 14,
    marginBottom: 10,
    maxWidth: '75%',
  },

  bubbleText: {
    fontSize: 14,
    color: '#000',
  },

  bubbleTime: {
    fontSize: 10,
    color: '#6b6b6b',
    alignSelf: 'flex-end',
    marginTop: 4,
  },

  infoBubble: {
    alignSelf: 'center',
    backgroundColor: '#f7f7f7',
    padding: 10,
    borderRadius: 10,
    marginVertical: 16,
    maxWidth: '80%',
  },

  infoText: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
  },

  /* Input */
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 24,
  },

  inputPlaceholder: {
    flex: 1,
    fontSize: 14,
    color: '#999',
  },

  micBtn: {
    marginLeft: 10,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
