import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../styles/colors';

export default function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.menuButton}>
        <Text style={styles.menuIcon}>☰</Text>
      </TouchableOpacity>

      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>SmartGrade</Text>
      </View>

      <Image
        source={require('../../assets/avatar.png')}
        style={styles.avatar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 11,
    backgroundColor: '#F8FAFF',
    marginBottom: 25,
  },

  menuButton: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -18,
  },

  menuIcon: {
    fontSize: 26,
    color: '#000000',
    fontWeight: '700',
    marginTop: -3,
  },

  logoContainer: {
    flex: 1,
    marginLeft: 8,
  },

  logoText: {
    color: colors.primary,
    fontWeight: '800',
    fontSize: 24,
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 55,
  },
});