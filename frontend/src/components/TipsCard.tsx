import { View, Text, StyleSheet } from 'react-native';

export default function TipsCard() {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.icon}></Text>
        <Text style={styles.header}>Dicas da IA</Text>
      </View>

      <Text style={styles.text}>
        Certifique-se de que seu <Text style={styles.bold}>Resumo</Text> esteja na primeira página. Nosso assistente de correção por IA funciona melhor quando a bibliografia está claramente marcada ao final do documento.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F3F4F6', // azul-claro do Figma
    padding: 20,
    borderRadius: 16,
    marginBottom: 30,
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  icon: {
    fontSize: 18,
    color: '#305CB1', // azul principal
    marginRight: 6,
  },

  header: {
    color: '#305CB1',
    fontSize: 16,
    fontWeight: '700',
  },

  text: {
    color: '#374151', // cinza escuro para texto
    fontSize: 14,
    lineHeight: 20,
  },

  bold: {
    fontWeight: '700',
  },
});
