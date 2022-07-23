import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const btnChangeTitle = () => {console.log("clicked!!!")}
    return (
        <div className="expense-item">
            <div>
                <ExpenseDate date={props.date}/>
            </div>
            <div className="expense-item__description">
                <h2> Name: {props.title} </h2>
                <div className="expense-item__price">Price: ${props.price}</div>
            </div>
            <button onClick={btnChangeTitle}>Change title</button>
        </div>
    );
}

export default ExpenseItem;