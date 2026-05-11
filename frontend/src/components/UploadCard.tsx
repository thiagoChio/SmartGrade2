import { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles'; 
import { colors } from '../styles/colors';

export default function UploadCard() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function pickFile() {
    const result = await DocumentPicker.getDocumentAsync({
      type: ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
      copyToCacheDirectory: true,
    });

    if (result.canceled) return;

    const file = result.assets[0];
    setFileName(file.name);
    setLoading(true);

    const formData = new FormData();
    formData.append('file', {
      uri: file.uri,
      name: file.name,
      type: file.mimeType || 'application/octet-stream',
    } as any);

    try {
      const response = await fetch('http://192.168.1.53:3000/upload', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      await response.json();
      Alert.alert('Sucesso', 'Arquivo enviado!');
    } catch (error) {
      Alert.alert('Erro', 'Falha ao enviar arquivo');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.uploadCard}>
      {/* Ícone */}
      <View style={styles.uploadIconCircle}>
        <Text style={styles.uploadIcon}>☁️</Text>
      </View>

      {/* Título e subtítulo */}
      <Text style={styles.uploadTitle}>Envie seu arquivo</Text>
      <Text style={styles.uploadSubtitle}>
        Selecione um arquivo PDF ou DOCX para análise da IA
      </Text>

      {/* Arquivo selecionado */}
      {fileName && (
        <View style={styles.formatBox}>
          <Text style={styles.formatText}>📄 {fileName}</Text>
        </View>
      )}

      {/* Botão principal */}
      <TouchableOpacity
        style={styles.uploadButton}
        onPress={pickFile}
        disabled={loading}
      >
        <LinearGradient
          colors={[colors.blue, colors.purple]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          <Text style={styles.uploadButtonText}>
            {loading ? 'Enviando...' : 'Selecionar Arquivo'}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
