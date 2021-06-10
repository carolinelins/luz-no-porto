import React, { useState } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import TabelaDados from './tabela'

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 1,
    padding: 5,
    flexGrow: 1,
    fontSize: 20
  },
  title: {
    alignSelf: "center",
    marginBottom: 10,
    padding: 5,
    flexGrow: 1,
    fontSize: 40
  }
});



// Create Document Component
function MyDocument(props) {
  const [dataInicio, setDataInicio] = useState("2020-05-14")
  const [dataFim, setDataFim] = useState("2020-05-15")

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.title}>
            Relatório
          </Text>
        </View>
        <View>
          <Text style={styles.section}>Localização: {props.sala}</Text>
        </View>
        <View>
          <Text style={styles.section}>Período: de {props.dataInicio} até {props.dataFim}</Text>
            <TabelaDados
              dataInicio={dataInicio}
              setDataInicio={setDataInicio}
              dataFim={dataFim}
              setDataFim={setDataFim}
            />

        </View>
      </Page>
    </Document>
  )
}

export default MyDocument