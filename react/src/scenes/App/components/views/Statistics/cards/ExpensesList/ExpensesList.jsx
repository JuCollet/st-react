import React, { PureComponent } from 'react';
import axios from 'axios';
import './styles/styles.less';

class ExpensesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      expensesList: [],
    };
  }

  componentWillMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
      this.setState({
        expensesList: res.data,
      });
    });
  }

  renderExpensesList() {
    function randomPrice(max = 1000) {
      return Math.round(((Math.random() * max) + 1) * 100) / 100;
    }
    if (this.state.expensesList.length === 0) return null;
    return this.state.expensesList.map((el, i) => (
      <li
        key={el.id}
        className={`expenseslist-el ${i % 2 === 0 ? 'expenseslist-el-odd' : ''}`}
      >
        <span className="expenseslist-el-userId">{el.userId}x</span>
        <span className="expenseslist-el-description">{el.title}</span>
        <span className="expenseslist-el-price">{`${randomPrice()}€`}</span>
      </li>
    ));
  }

  render() {
    return (
      <div className="card card-lg">
        <span className="card-title">Liste des dépenses</span>
        <div className="expenseslist-wrapper">
          <ul className="expenseslist">
            {this.renderExpensesList()}
          </ul>
        </div>
        <span className="card-link">Tableau détaillé</span>
      </div>
    );
  }
}

export default ExpensesList;
