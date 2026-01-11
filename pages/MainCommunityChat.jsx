import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

/* -------------------- Sample Messages Data -------------------- */
const INITIAL_MESSAGES = {
  'sem6-main': [
    {
      id: 1,
      text: 'Anyone from ML section?',
      time: '11:50',
      isMe: true,
    },
    {
      id: 2,
      text: 'Yes !!',
      time: '11:40',
      isMe: false,
    },
    {
      id: 3,
      text: 'I am looking for a girl member for my team ID - 115.',
      time: '11:45',
      isMe: false,
    },
  ],
  'pbl-compiler': [
    {
      id: 1,
      text: 'Hey, anyone working on the compiler project?',
      time: '10:30',
      isMe: false,
    },
    {
      id: 2,
      text: 'Yes! I am working on the lexical analyzer part',
      time: '10:32',
      isMe: true,
    },
  ],
  'pbl-database': [
    {
      id: 1,
      text: 'Anyone started with the normalization assignment?',
      time: '09:15',
      isMe: false,
    },
    {
      id: 2,
      text: 'Yes, I completed it yesterday',
      time: '09:20',
      isMe: true,
    },
  ],
  'pbl-networks': [
    {
      id: 1,
      text: 'Looking for teammates for networking project',
      time: '10:30',
      isMe: false,
    },
  ],
};

/* -------------------- Community Header Card -------------------- */
const CommunityHeaderCard = ({ title, subtitle }) => {
  return (
    <View style={styles.communityCard}>
      <View style={styles.communityIcon}>
        <Icon name="people" size={18} color="#ff8c00" />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.communityTitle}>{title}</Text>
        <Text style={styles.communitySub}>● {subtitle}</Text>
      </View>

      <Pressable>
        <Icon name="ellipsis-horizontal" size={20} color="#888" />
      </Pressable>
    </View>
  );
};

/* -------------------- Message Bar -------------------- */
const MessageBar = ({ text, setText, onSend }) => {
  const [height, setHeight] = useState(44);

  return (
    <View style={styles.messageBar}>
      <TextInput
        placeholder="Write a message..."
        placeholderTextColor="#999"
        value={text}
        multiline
        onChangeText={setText}
        onContentSizeChange={(e) =>
          setHeight(Math.min(120, e.nativeEvent.contentSize.height))
        }
        style={[styles.messageInput, { height }]}
      />

      <Pressable style={styles.iconButton}>
        <Icon name="mic" size={18} color="#000" />
      </Pressable>

      <Pressable style={styles.iconButton} onPress={onSend}>
        <Icon name="send" size={18} color="#000" />
      </Pressable>
    </View>
  );
};

/* -------------------- Full Screen Chat -------------------- */
const MainCommunityChat = ({ navigation, route }) => {
  // Get community details from navigation params
  const {
    communityId = 'default',
    communityTitle = 'Community',
    communitySubtitle = 'Active members',
    communityType = 'main',
  } = route.params || {};

  const [text, setText] = useState('');
  
  // Initialize messages based on community ID
  const getInitialMessages = (communityId) => {
    // You can load different messages based on communityId
    // For now, using default messages
    return [
      {
        id: 1,
        text: 'Anyone from ML section?',
        time: '11:50',
        isMe: true,
      },
      {
        id: 2,
        text: 'Yes !!',
        time: '11:40',
        isMe: false,
      },
      {
        id: 3,
        text: 'I am looking for a girl member for my team ID - 115.',
        time: '11:45',
        isMe: false,
      },
    ];
  };

  const [messages, setMessages] = useState(getInitialMessages());

  const scrollViewRef = useRef(null);

  const handleSend = () => {
    if (text.trim()) {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });

      const newMessage = {
        id: Date.now().toString(),
        text: text.trim(),
        time: timeString,
        isMe: true,
      };

      setMessages([...messages, newMessage]);
      setText('');

      // Scroll to bottom after sending message
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  };

  // Scroll to bottom on mount
  useEffect(() => {
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: false });
    }, 100);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
        <View style={styles.container}>
          {/* Header with Back Button and Community Card */}
          <View style={styles.header}>
            <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" size={20} color="#000" />
            </Pressable>
            <CommunityHeaderCard
              title={communityTitle}
              subtitle={communitySubtitle}
            />
          </View>

          {/* Chat Area */}
          <ScrollView
            ref={scrollViewRef}
            style={styles.chatContainer}
            contentContainerStyle={styles.chatContent}
            showsVerticalScrollIndicator={false}
          >
            {messages.map((msg) => (
              <View
                key={msg.id}
                style={msg.isMe ? styles.bubbleMe : styles.bubbleOther}
              >
                <Text style={styles.bubbleText}>{msg.text}</Text>
                <Text style={styles.bubbleTime}>{msg.time}</Text>
              </View>
            ))}
          </ScrollView>

          {/* Message Bar */}
          <MessageBar text={text} setText={setText} onSend={handleSend} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default MainCommunityChat;

/* -------------------- Styles -------------------- */
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  /* Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 10,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  /* Community Card */
  communityCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 16,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
  },
  chatContent: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 10,
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