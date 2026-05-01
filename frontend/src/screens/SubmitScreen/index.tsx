import { ScrollView, Text } from 'react-native';
import styles from './styles';

import Header from '../../components/Header';
import UploadCard from '../../components/UploadCard';
import ProgressCard from '../../components/ProgressCard';
import DetailsCard from '../../components/DetailsCard';
import TipsCard from '../../components/TipsCard';

export default function SubmitScreen() {
  return (
    <ScrollView style={styles.container}>
      <Header />

      <Text style={styles.title}>Enviar Trabalho</Text>
      <Text style={styles.subtitle}>
        Finalize seu trabalho para Macroeconomia Avançada
      </Text>

      <UploadCard />
      <ProgressCard />
      <DetailsCard />
      <TipsCard />
    </ScrollView>
  );
}