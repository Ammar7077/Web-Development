import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
    const expenses = [
        {
            title: "Car1",
            price: 44,
            date: new Date(2022, 1, 22),
        },
        {
            title: "Car2",
            price: 55,
            date: new Date(2022, 2, 23),
        },
        {
            title: "Car3",
            price: 66,
            date: new Date(2022, 3, 24),
        },
        {
            title: "Car4",
            price: 77,
            date: new Date(2022, 4, 25),
        },
    ];
    // const expensesFun = (ExpenseItem) => {
    //     return (
    //         for ( let i = 0; i < 4; ++i ) {
    //             <ExpenseItem
    //                 title={expenses[i].title}
    //                 price={expenses[i].price}
    //                 date={expenses[i].date}
    //             />
    //     );
    // }
    
    return (
        <div>
            <ExpenseItem
                title={expenses[0].title}
                price={expenses[0].price}
                date={expenses[0].date}
            />
            <ExpenseItem
                title={expenses[1].title}
                price={expenses[1].price}
                date={expenses[1].date}
            />
            <ExpenseItem
                title={expenses[2].title}
                price={expenses[2].price}
                date={expenses[2].date}
            />
            <ExpenseItem
                title={expenses[3].title}
                price={expenses[3].price}
                date={expenses[3].date}
            />
            {/* {expensesFun()}; */}
            
        </div>
    );
}

export default Expenses;
