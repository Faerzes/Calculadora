import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: '',
      taxa: '',
      parcela: '',
      total: '',
      parcelaValue: '',
      jurosPagos: '',
      valorPrincipal: '',
      errorMessage: '',
    };
  }

  calculateFinance = () => {
    const principal = parseFloat(this.state.valor);
    const rate = parseFloat(this.state.taxa);
    const time = parseFloat(this.state.parcela);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
      this.setState({
        errorMessage: 'Por favor, insira valores numéricos válidos',
      });
      return;
    }

    const interest = (principal * rate * time) / 100;
    const total = principal + interest;

    this.setState({
      total: total.toFixed(2),
      errorMessage: '',
      parcelaValue: (total / time).toFixed(2),
      jurosPagos: interest.toFixed(2),
      valorPrincipal: principal.toFixed(2),
    });
  };

  limparCampos = () => {
    this.setState({
      valor: '',
      taxa: '',
      parcela: '',
      total: '',
      parcelaValue: '',
      jurosPagos: '',
      valorPrincipal: '',
      errorMessage: '',
    });
  }

  render() {
    const errorStyle = this.state.errorMessage ? { borderColor: 'red' } : {};

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Faz o L</Text>
        <Text style={styles.label}>Valor do financiamento</Text>
        <TextInput
          style={[styles.input, errorStyle]}
          placeholder="Ex: 10000"
          onChangeText={(text) => this.setState({ valor: text })}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Taxa de juros anual (%)</Text>
        <TextInput
          style={[styles.input, errorStyle]}
          placeholder="Ex: 5"
          onChangeText={(text) => this.setState({ taxa: text })}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Número de parcelas</Text>
        <TextInput
          style={[styles.input, errorStyle]}
          placeholder="Ex: 12"
          onChangeText={(text) => this.setState({ parcela: text })}
          keyboardType="numeric"
        />
        <Button title="Calcular" onPress={this.calculateFinance} />
        <Button title="Limpar" onPress={this.limparCampos} color="red" />
        {this.state.total !== '' && (
          <Text style={styles.result}>Total a pagar: R$ {this.state.total}</Text>
        )}
        <Text style={styles.error}>{this.state.errorMessage}</Text>
        {this.state.total !== '' && (
          <Text style={styles.result}>Resumo do Financiamento:</Text>
        )}
        {this.state.total !== '' && (
          <Text>Valor da parcela: R$ {this.state.parcelaValue}</Text>
        )}
        {this.state.total !== '' && (
          <Text>Juros pagos: R$ {this.state.jurosPagos}</Text>
        )}
        {this.state.total !== '' && (
          <Text>Valor principal: R$ {this.state.valorPrincipal}</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 70,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'red',
  },
  label: {
    fontSize: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gold',
    borderWidth: 3,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
    backgroundColor: 'white',
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    backgroundColor: '#E6E6E6',
    padding: 10,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    fontSize: 16,
    backgroundColor: '#FFCDD2',
    padding: 5,
    borderRadius: 5,
    marginTop: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
