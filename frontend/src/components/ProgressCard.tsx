import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import { colors } from '../styles/colors';

export default function ProgressCard() {
  const progress = 68;

  return (
    <View style={styles.progressCard}>
      {/* Cabeçalho */}
      <View style={styles.progressHeader}>
        <View style={styles.progressIconBox}>
          <Text style={styles.progressIcon}></Text>
        </View>

        <View style={styles.progressTextBox}>
          <Text style={styles.progressTitle}>IA analisando seu envio...</Text>
          <Text style={styles.progressSubtitle}>
            Analisando estrutura e argumentos centrais
          </Text>
        </View>

        <Text style={styles.progressPercent}>{progress}%</Text>
      </View>

      {/* Barra de progresso */}
      <View style={styles.progressBarBackground}>
        <LinearGradient
          colors={[colors.blue, colors.purple]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.progressBarFill, { width: `${progress}%` }]}
        />
      </View>

      {/* Etapas */}
      <View style={styles.steps}>
        <View style={[styles.step, styles.stepActive]}>
          <View style={[styles.dot, styles.dotActive]} />
          <Text style={styles.stepTextActive}>Verificando Citações</Text>
        </View>

        <View style={[styles.step, styles.stepActive]}>
          <View style={[styles.dot, styles.dotActive]} />
          <Text style={styles.stepTextActive}>Avaliando Fluxo</Text>
        </View>

        <View style={[styles.step, styles.stepInactive]}>
          <View style={[styles.dot, styles.dotInactive]} />
          <Text style={styles.stepTextInactive}>Checagem de Plágio</Text>
        </View>
      </View>
    </View>
  );
}
