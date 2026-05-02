import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 6,
    color: colors.textPrimary,
  },
  subtitle: {
    color: colors.textSecondary,
    marginBottom: 22,
  },
});

export default styles;
