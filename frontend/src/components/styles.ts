import { StyleSheet } from 'react-native';
import { colors } from '../styles/colors';

const styles = StyleSheet.create({
  // ---------- ProgressCard ----------
  progressCard: {
    backgroundColor: '#F9FAFB',
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
  },

  progressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  progressIconBox: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginRight: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 2,
  },

  progressIcon: {
    fontSize: 20,
    color: colors.purple,
  },

  progressTextBox: {
    flex: 1,
  },

  progressTitle: {
    fontWeight: '700',
    color: colors.textPrimary,
    fontSize: 16,
  },

  progressSubtitle: {
    color: colors.textSecondary,
    fontSize: 13,
  },

  progressPercent: {
    fontWeight: '700',
    color: colors.blue,
    fontSize: 16,
  },

  progressBarBackground: {
    height: 10,
    backgroundColor: '#E5E7EB',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 16,
  },

  progressBarFill: {
    height: '100%',
    borderRadius: 10,
  },

  steps: {
    gap: 8,
  },

  step: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },

  stepActive: {
    backgroundColor: '#F5F3FF',
  },

  stepInactive: {
    backgroundColor: '#E5E7EB',
  },

  dotActive: {
    backgroundColor: colors.purple,
  },

  dotInactive: {
    backgroundColor: '#9CA3AF',
  },

  stepTextActive: {
    color: colors.purple,
    fontWeight: '600',
  },

  stepTextInactive: {
    color: '#6B7280',
    fontWeight: '600',
  },

  // ---------- UploadCard ----------
  uploadCard: {
    backgroundColor: '#FFFFFF',
    padding: 28,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#D1D5DB',
    marginBottom: 20,
  },

  uploadIconCircle: {
    backgroundColor: '#EEF2FF',
    borderRadius: 50,
    padding: 20,
    marginBottom: 16,
  },

  uploadIcon: {
    fontSize: 28,
    color: colors.blue,
  },

  uploadTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 6,
  },

  uploadSubtitle: {
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 20,
  },

  formatRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 10,
  },

  formatBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
  },

  formatIcon: {
    marginRight: 6,
  },

  formatText: {
    fontWeight: '600',
    color: colors.textPrimary,
  },

  formatInfo: {
    color: colors.textSupport,
    fontSize: 12,
    marginBottom: 20,
  },

  uploadButton: {
    width: '100%',
    borderRadius: 12,
    overflow: 'hidden',
  },

  gradient: {
    paddingVertical: 14,
    alignItems: 'center',
  },

  uploadButtonText: {
    color: '#fff',
    fontWeight: '700',
  },
});

export default styles;
