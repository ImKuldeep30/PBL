import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

/* -------------------- Tabs -------------------- */
const CommunityTabs = ({ activeTab, onChange }) => {
  const tabs = ['Main', 'Join', 'My chats'];

  return (
    <View style={styles.tabsContainer}>
      {tabs.map((tab) => (
        <Pressable
          key={tab}
          onPress={() => onChange(tab)}
          style={[styles.tab, activeTab === tab && styles.tabActive]}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === tab && styles.tabTextActive,
            ]}
          >
            {tab}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

/* -------------------- Community Card -------------------- */
const CommunityCard = ({ onPress }) => {
  return (
    <Pressable style={styles.communityCard} onPress={onPress}>
      <View style={styles.communityIcon}>
        <Icon name="people" size={18} color="#ff8c00" />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.communityTitle}>Community {'{ Sem 6 }'}</Text>
        <Text style={styles.communitySub}>● 200 Students active</Text>
      </View>

      <Pressable>
        <Icon name="ellipsis-horizontal" size={20} color="#888" />
      </Pressable>
    </Pressable>
  );
};

/* -------------------- Message Bar -------------------- */
const MessageBar = ({ text, setText, onFocus }) => {
  const [height, setHeight] = useState(44);

  return (
    <View style={styles.messageBar}>
      <TextInput
        placeholder="Write a message..."
        placeholderTextColor="#999"
        value={text}
        multiline
        onChangeText={setText}
        onFocus={onFocus}
        onContentSizeChange={(e) =>
          setHeight(Math.min(120, e.nativeEvent.contentSize.height))
        }
        style={[styles.messageInput, { height }]}
      />

      <Pressable style={styles.iconButton}>
        <Icon name="mic" size={18} color="#000" />
      </Pressable>

      <Pressable style={styles.iconButton}>
        <Icon name="send" size={18} color="#000" />
      </Pressable>
    </View>
  );
};

/* -------------------- Main Screen -------------------- */
const CommunityMainPreview = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Main');
  const [text, setText] = useState('');

  const openFullChat = () => {
    navigation.navigate('MainCommunityChat');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={18} color="#000" />
        </Pressable>
        <Text style={styles.headerTitle}>Community</Text>
      </View>

      {/* Tabs */}
      <CommunityTabs activeTab={activeTab} onChange={setActiveTab} />

      {/* Main tab content Chat Area (Main tab only) */}
      {activeTab === 'Main' && (
        <>
          <CommunityCard onPress={openFullChat} />
          <View style={styles.chatWrapper}>
            <ScrollView showsVerticalScrollIndicator={false}>
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
                </Text>
                <Text style={styles.bubbleTime}>11:45</Text>
              </View>
            </ScrollView>
          </View>
        </>
      )}

      {/* Join tab content */}
      {activeTab === 'Join' && (
        <View style={styles.emptyState}>
          <Icon name="search" size={48} color="#ccc" />
          <Text style={styles.emptyText}>Search communities to join</Text>
        </View>
      )}

      {/* My chats tab content */}
      {activeTab === 'My chats' && (
        <View style={styles.emptyState}>
          <Icon name="chatbubbles-outline" size={48} color="#ccc" />
          <Text style={styles.emptyText}>Your personal chats appear here</Text>
        </View>
      )}

      {/* Message Bar - Opens full chat when focused */}
      {activeTab === 'Main' && (
        <MessageBar text={text} setText={setText} onFocus={openFullChat} />
      )}
    </SafeAreaView>
  );
};

export default CommunityMainPreview;

/* -------------------- Styles -------------------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  /* Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
  },
  backBtn: {
    position: 'absolute',
    left: 16,
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
    margin: 16,
    backgroundColor: '#2f343b',
    borderRadius: 18,
    padding: 4,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
  chatWrapper: {
    flex: 1,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    padding: 10,
  },
  bubbleMe: {
    alignSelf: 'flex-end',
    backgroundColor: '#d9f7be',
    padding: 10,
    borderRadius: 14,
    marginBottom: 10,
    maxWidth: '75%',
  },
  bubbleOther: {
    alignSelf: 'flex-start',
    backgroundColor: '#f1f1f1',
    padding: 10,
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

  /* Empty State */
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
    marginTop: 16,
    textAlign: 'center',
  },

  /* Message Bar */
  messageBar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    margin: 16,
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 24,
  },
  messageInput: {
    flex: 1,
    minHeight: 44,
    maxHeight: 120,
    backgroundColor: '#fff',
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    textAlignVertical: 'top',
    color: '#000',
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
});