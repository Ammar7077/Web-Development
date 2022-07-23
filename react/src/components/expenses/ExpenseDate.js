import './ExpenseItem.css'

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('es-US', {month: 'long'});
    const day = props.date.toLocaleString('es-US', {day: '2-digit'});
    const year = props.date.getFullYear();
    return (
        <div>
            
            <div class="divDate">
                <h2>{month}</h2>
                <h2>{year}</h2>
                <h1 className="dayClass">{day}</h1>
            </div>
            
        </div>
    );
}

export default ExpenseDate;