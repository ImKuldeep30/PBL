import { Modal, View, Text, TextInput, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const SocialModal = ({visible,platform,value,onChangeText,onClose,onSave,}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>

          <Text style={styles.title}>
            Add {platform} Profile
          </Text>

          <TextInput
            placeholder={`Enter your ${platform} profile link`}
            value={value}
            onChangeText={onChangeText}
            style={styles.input}
            autoCapitalize="none"
          />

          <View style={styles.buttonRow}>
            <Pressable onPress={onClose}>
              <Text style={styles.cancel}>Cancel</Text>
            </Pressable>

            <Pressable style={styles.saveBtn} onPress={onSave}>
              <Text style={styles.saveText}>Save</Text>
            </Pressable>
          </View>

        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 12,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 20,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cancel: {
    fontSize: 15,
    color: '#666',
  },

  saveBtn: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
  },

  saveText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
  },
})


export default SocialModal
