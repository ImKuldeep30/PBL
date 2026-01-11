import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

/* -------------------- Community Data -------------------- */
const COMMUNITIES_DATA = [
  {
    id: 'sem6-main',
    type: 'main',
    title: 'Community { Sem 6 }',
    subtitle: '200 Students active',
    icon: 'people',
  },
];

const PBL_COMMUNITIES_DATA = [
  {
    id: 'pbl-compiler',
    type: 'pbl',
    title: 'Compiler Design',
    subtitle: 'View Community for Compiler Design',
    image: require('../assets/pblimgcompiler.png'),
  },
  {
    id: 'pbl-dev',
    type: 'pbl',
    title: 'Web Developement',
    subtitle: 'View Community for Database Management',
    image: require('../assets/pblimgdev.png'), // Replace with actual image
  },

];

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
const CommunityCard = ({ community, onPress }) => {
  return (
    <Pressable style={styles.communityCard} onPress={onPress}>
      <View style={styles.communityIcon}>
        <Icon name={community.icon} size={18} color="#ff8c00" />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.communityTitle}>{community.title}</Text>
        <Text style={styles.communitySub}>● {community.subtitle}</Text>
      </View>

      <Pressable>
        <Icon name="ellipsis-horizontal" size={20} color="#888" />
      </Pressable>
    </Pressable>
  );
};

/* -------------------- PBL Card -------------------- */
const PBLCard = ({ community, onPress }) => {
  return (
    <Pressable style={styles.PBLcard} onPress={onPress}>
      <Image
        source={community.image}
        style={styles.PBLcardImage}
        resizeMode="contain"
      />
      <View style={styles.PBLcardContent}>
        <Text style={styles.PBLcardTitle}>{community.title}</Text>
        <View style={styles.PBLcardSubtitleRow}>
          <Text style={styles.PBLcardSubtitle}>{community.subtitle}</Text>
          <Icon name="arrow-forward" size={16} color="#666" />
        </View>
      </View>
    </Pressable>
  );
};

/* -------------------- Main Screen -------------------- */
const CommunityMainPreview = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Main');

  const openCommunityChat = (community) => {
    navigation.navigate('MainCommunityChat', {
      communityId: community.id,
      communityTitle: community.title,
      communitySubtitle: community.subtitle,
      communityType: community.type,
    });
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

      {/* Main tab content */}
      {activeTab === 'Main' && (
        <ScrollView
          style={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {COMMUNITIES_DATA.map((community) => (
            <CommunityCard
              key={community.id}
              community={community}
              onPress={() => openCommunityChat(community)}
            />
          ))}

          {PBL_COMMUNITIES_DATA.map((community) => (
            <PBLCard
              key={community.id}
              community={community}
              onPress={() => openCommunityChat(community)}
            />
          ))}
        </ScrollView>
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

  scrollContent: {
    flex: 1,
  },

  /* PBL Card */
  PBLcard: {
    marginHorizontal: 16,
    marginTop: 15,
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 10,
  },
  PBLcardImage: {
    width: '100%',
    height: 140,
    backgroundColor: '#e0e0e0',
  },
  PBLcardContent: {
    padding: 12,
  },
  PBLcardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 6,
  },
  PBLcardSubtitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  PBLcardSubtitle: {
    fontSize: 12,
    color: '#666',
    flex: 1,
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
});