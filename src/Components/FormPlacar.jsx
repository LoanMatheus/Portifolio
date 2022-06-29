import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveExpenses, getAPI, total } from '../actions';
import Input from './Input';
import Button from './Button';

class FormDespesas extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.salvaDespesa = this.salvaDespesa.bind(this);
  }

  async componentDidMount() {
    const { dispatchAPI } = this.props;
    dispatchAPI();
  }

  calculate() {
    const { value, currency } = this.state;
    const { taxas, valorTotal } = this.props;
    const cambio = Object.values(taxas).find((taxa) => taxa.code === currency);
    const valorConvertido = value * cambio.ask;
    return (valorTotal + valorConvertido);
  }

  async salvaDespesa() {
    const { dispatchExpense, dispatchAPI, dispatchTotal, taxas } = this.props;
    const { id } = this.state;
    await dispatchAPI();

    this.setState({
      exchangeRates: taxas,
    });

    dispatchTotal(this.calculate());
    dispatchExpense(this.state);
    this.setState({
      id: id + 1,
      value: '',
      description: '',
    });
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;
    const { moeda } = this.props;

    return (
      <form className="formulario">
        <Input
          label="Valor: "
          id="value-input"
          name="value"
          type="number"
          testid="value-input"
          value={ value }
          onChange={ this.handleChange }
        />

        <label htmlFor="moeda">
          {'Moeda: '}
          <select
            id="moeda"
            name="currency"
            onChange={ this.handleChange }
            value={ currency }
          >
            {moeda.map((moedas, index) => (
              <option
                key={ index }
                value={ moedas }
              >
                { moedas }
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="metodo">
          {'Metodo de Pagamento: '}
          <select
            id="metodo"
            name="method"
            data-testid="method-input"
            onChange={ this.handleChange }
            value={ method }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          {'Tag: '}
          <select
            id="tag"
            name="tag"
            data-testid="tag-input"
            onChange={ this.handleChange }
            value={ tag }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <Input
          label="Descrição: "
          id="description-input"
          name="description"
          type="text"
          testid="description-input"
          value={ description }
          onChange={ this.handleChange }
        />

        <Button
          type="button"
          label="Adicionar despesa"
          buttonDisabled={ false }
          testid=""
          className=""
          onClick={ this.salvaDespesa }
        />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchAPI: () => dispatch(getAPI()),
  dispatchExpense: (state) => dispatch(saveExpenses(state)),
  dispatchTotal: (state) => dispatch(total(state)),
});

const mapStateToProps = (state) => ({
  moeda: state.wallet.currencies,
  taxas: state.wallet.taxas,
  valorTotal: state.wallet.total,
});

FormDespesas.propTypes = {

};
export default connect(mapStateToProps, mapDispatchToProps)(FormDespesas);
