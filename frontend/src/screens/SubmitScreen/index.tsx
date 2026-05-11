import { View, ScrollView, Text } from 'react-native';
import styles from './styles';

// IMPORTAÇÃO DO MENU INFERIOR
import BottomMenu from '../../components/BottomMenu';

// OUTROS COMPONENTES
import Header from '../../components/Header';
import UploadCard from '../../components/UploadCard';
import ProgressCard from '../../components/ProgressCard';
import DetailsCard from '../../components/DetailsCard';
import TipsCard from '../../components/TipsCard';

export default function SubmitScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 180 }}
        showsVerticalScrollIndicator={false}
      >
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

   
      <BottomMenu />
    </View>
  );
}