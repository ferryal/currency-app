import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import Select from 'react-select';
import { fetchCurrencyRate } from './../../actions/currencyRate';
import dictionary from './../../helper/dictionary';
import formatValue from './../../helper/formatValue';
import config from './../../config';

class CurrencyRate extends Component {
constructor(props) {
    super(props);
    this.state = {
			isInputActive: false,
			currencyList: ["IDR", "EUR", "GBP", "SGD"],
			newCurrency: 'JPY',
			rates: {},
			currentAmount: 1
    };

		this.handleToggle = this.handleToggle.bind(this);
		this.handleOnChange = this.handleOnChange.bind(this);
    this.handleAddCurrencny = this.handleAddCurrencny.bind(this);
		this.handleRemoveCurrency = this.handleRemoveCurrency.bind(this);
  }



handleRemoveCurrency(i) {
		const cpyCurrencyList = Object.assign(this.state.currencyList);
		cpyCurrencyList.splice(i, 1);

		this.setState({
			currencyList: cpyCurrencyList
		});
	
}
	
componentWillMount() {
		this.props.fetchCurrencyRate();
	}

handleOnChange(e) {
	console.log(e.target.value);
	e.target.value = e.target.value.toUpperCase();
	this.setState({
		[e.target.name]: e.target.value
})
}

handleAddCurrencny() {
	let tempCurrencyList = Object.assign(this.state.currencyList);
	tempCurrencyList.push(this.state.newCurrency);

	this.setState({
		currencyList: tempCurrencyList,
		newCurrency: "",
		isInputActive: !this.state.isInputActive
	});
}

handleToggle() {
	this.setState({
		isInputActive: !this.state.isInputActive
	})
}

renderListCurrency() {
	const { currencyRate } = this.props;
	const { rates } = currencyRate;
	const listCurrency = this.state.currencyList
	return(
		<div>
		{
			listCurrency.length > 0 ?
				listCurrency.map((currency, i) => {
        const convertedValue = rates[currency] * this.state.currentAmount;
        const displayValue = formatValue(convertedValue);

        return (
          <div className="converted-detail" key={i}>
            <div className="detail-container">
              <div className="amount-container">
                <div className="amount-detail currency-code">
                  {currency}
                </div>
                <div className="amount-detail">{displayValue}</div>
              </div>
              <div className="currency-name">{dictionary(currency)}</div>
              <div className="currency-detail">{`${this.state.currentAmount} ${config.baseCurrency} = ${currency} ${displayValue}`}</div>
            </div>
            <div className="delete-box" onClick={() => this.handleRemoveCurrency(i)}>( - )</div>
          </div>
        );
			}) : ''
		}
		</div>
		);
}

render() {
		// const { currencyRate } = this.props;
		// const { rates } = currencyRate;
    return(
			<div id="container" className="container">
				<div className="container-fluid currency-box">
					<div className="col-md-6 offset-md-3">
						<div className=" mb-4 header-currency">
							<div className="d-flex">
								<p className="align-items-center base-currency">USD</p>
								<p className="align-items-center">- United Stated Dollar</p>
							</div>
							<div className="justify-content-between d-flex">
								<p className="align-items-center f-bold">{config.baseCurrency}</p>
								<input  className="input-amount" type="number" name="currentAmount" value={this.state.currentAmount} onChange={this.handleOnChange}></input>
							</div>
							{ this.renderListCurrency() } 
							{
								this.state.isInputActive ? (
									<div className="row">
										<select className="select-currency col-md-9" ref="currencyList" name="newCurrency" value={this.state.newCurrency} onChange={this.handleOnChange}>
											<option value="JPY">JPY</option>
											<option value="SGD">SGD</option>
											<option value="EUR">EUR</option>
											<option value="GBP">GBP</option>
											<option value="USD">USD</option>
											<option value="CAD">CAD</option>
											<option value="IDR">IDR</option>
											<option value="CHF">CHF</option>
											<option value="INR">INR</option>
											<option value="MYR">MYR</option>
											<option value="KRW">KRW</option>
										</select>
										<button className="submit-convert mb-1 input" onClick={this.handleAddCurrencny}>Submit</button>
									</div>
								) : (
									<div className="input-toggle" onClick={this.handleToggle}>(+) add more currencies</div>
								)
							}
						</div>
					</div>
				</div>
			</div>
    )
}
}

CurrencyRate.propTypes = {
	fetchCurrencyRate: PropTypes.func.isRequired,
	currencyRate: PropTypes.object.isRequired
}

const mapStatetoProps = state => ({
	currencyRate: state.currencyRate
});

const mapDispatchToProps = {
	fetchCurrencyRate
};

export default connect(mapStatetoProps, mapDispatchToProps)(CurrencyRate);

