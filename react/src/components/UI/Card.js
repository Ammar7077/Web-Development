import './Card.css'
// import ExpenseDate from './ExpenseDate';
// import ExpenseItem from './ExpenseItem';
import Expenses from '../expenses/Expenses';

const Card = (props) => {
    return (
        <div>
            <div className="card">
                <Expenses />
                <button>Click</button>
            </div>
            
        </div>
    );
}

export default Card;