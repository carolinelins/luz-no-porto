import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import TabelaDados from './tabela';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 1,
    padding: 5,
    flexGrow: 1,
    fontSize: 20,
  },
  title: {
    alignSelf: 'center',
    marginBottom: 10,
    padding: 5,
    flexGrow: 1,
    fontSize: 40,
  },
});

// Create Document Component
function MyDocument(props) {
  console.log(props.dataInicio, props.dataFim);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.title}>Relatório</Text>
        </View>
        <View>
          <Text style={styles.section}>Localização: {props.sala}</Text>
        </View>
        <View>
          <Text style={styles.section}>
            Período: de {props.dataInicio} até {props.dataFim}
          </Text>
          <TabelaDados
            dataInicio={props.dataInicio}
            setDataInicio={props.setDataInicio}
            dataFim={props.dataFim}
            setDataFim={props.setDataFim}
          />
        </View>
      </Page>
    </Document>
  );
}

export default MyDocument;
