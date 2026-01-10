import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import SocialModal from '../components/SocialModal';

const avatars = ['👨‍💻', '👩‍💻', '🧑‍🎓', '🧑‍💼', '🤖', '🧠', '🧑‍🔬'];

const skills = [
  // Web Development
  'Frontend Developer',
  'Web Developer',
  'Backend Developer',
  'UI / UX Design',
  'Full Stack Developer',

  // Mobile Development
  'Android Developer',
  'iOS Developer',
  'React Native Developer',
  'Flutter Developer',

  // Programming Languages
  'C / C++',
  'Java',
  'Python',
  'JavaScript',
  'TypeScript',

  // Data & AI
  'Artificial Intelligence',
  'Machine Learning',
  'Deep Learning',
  'Data Science',
  'Data Analytics',

  // Cloud & DevOps
  'Cloud Computing',
  'AWS',
  'Azure',
  'Google Cloud',
  'DevOps',
  'Docker',
  'Kubernetes',

  // Security & Networking
  'Cyber Security',
  'Ethical Hacking',
  'Network Security',

  // Systems & Hardware
  'Internet of Things (IoT)',
  'Embedded Systems',
  'Robotics',

  // Databases
  'SQL',
  'NoSQL',
  'MongoDB',
  'PostgreSQL',

  // Others
  'Blockchain',
  'AR / VR',
  'Game Development',
  'Software Testing',
];

const CreatePub_profile = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [platform, setPlatform] = useState('');
  const [socialLink, setSocialLink] = useState('');

  const toggleSkill = skill => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.centerContent}>
          <Text style={styles.title}>Create Public Profile</Text>

          <Text style={styles.sectionTitle}>Choose your profile avatar</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.avatarScroll}
          >
            {avatars.map((avatar, index) => (
              <Pressable
                key={index}
                style={[
                  styles.avatar,
                  selectedAvatar === avatar && styles.avatarSelected,
                ]}
                onPress={() => setSelectedAvatar(avatar)}
              >
                <Text style={styles.avatarText}>{avatar}</Text>
              </Pressable>
            ))}
          </ScrollView>

          <Text style={styles.sectionTitle}>Select your expertise</Text>

          <View style={styles.skillContainer}>
            {skills.map((skill, index) => (
              <Pressable
                key={index}
                style={[
                  styles.skill,
                  selectedSkills.includes(skill) && styles.skillSelected,
                ]}
                onPress={() => toggleSkill(skill)}
              >
                <Text
                  style={[
                    styles.skillText,
                    selectedSkills.includes(skill) && styles.skillTextSelected,
                  ]}
                >
                  {skill}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Social Section */}
        <View style={styles.socialContainer}>
          <Text style={styles.socialTitle}>Add your social profiles</Text>

          <Pressable
            style={styles.socialCard}
            onPress={() => {
              setPlatform('LinkedIn');
              setModalVisible(true);
            }}
          >
            <Image
              source={require('../assets/linkedin.png')}
              style={styles.socialIcon}
            />
            <Text style={styles.socialText}>Add LinkedIn</Text>
          </Pressable>

          <Pressable
            style={styles.socialCard}
            onPress={() => {
              setPlatform('GitHub');
              setModalVisible(true);
            }}
          >
            <Image
              source={require('../assets/github.png')}
              style={styles.socialIcon}
            />
            <Text style={styles.socialText}>Add GitHub</Text>
          </Pressable>
        </View>
      </ScrollView>

      {/* Fixed Bottom Buttons */}
      <View style={styles.bottomRow}>
        <Text style={styles.skip}>Skip for now</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Save & Next</Text>
        </Pressable>
      </View>

      <SocialModal
        visible={modalVisible}
        platform={platform}
        value={socialLink}
        onChangeText={setSocialLink}
        onClose={() => {
          setModalVisible(false);
          setSocialLink('');
        }}
        onSave={() => {
          console.log(platform, socialLink); // later send to backend
          setModalVisible(false);
          setSocialLink('');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },

  centerContent: {
    alignItems: 'center',
    paddingTop: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    color: '#000',
    textAlign: 'center',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 20,
    color: '#000',
    textAlign: 'center',
  },

  avatarScroll: {
    marginTop: 20,
    marginBottom: 20,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },

  avatarSelected: {
    borderColor: '#000',
    borderWidth: 2,
  },

  avatarText: {
    fontSize: 34,
  },

  skillScroll: {
    maxHeight: 300,
    marginTop: 4,
    marginBottom: 20,
  },

  skillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  skill: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 6,
    marginBottom: 10,
  },

  skillSelected: {
    backgroundColor: '#000',
    borderColor: '#000',
  },

  skillText: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },

  skillTextSelected: {
    color: '#fff',
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  skip: {
    fontSize: 14,
    color: '#666',
  },

  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },

  socialContainer: {
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
  },

  socialTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },

  socialCard: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },

  socialIcon: {
    width: 28,
    height: 28,
    marginRight: 12,
    resizeMode: 'contain',
  },

  socialText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
  },

  scrollContent: {
    paddingBottom: 30, // space above bottom button
  },
});

export default CreatePub_profile;
