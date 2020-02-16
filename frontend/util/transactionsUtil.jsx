export const getTransactions = (user) => {
    
    return $.ajax({
        method: "GET",
        url: "api/transactions",
        data: {
            user_id: user.id,
        }
    })
}

export const createTransaction = transaction => {
    debugger
    return $.ajax({
        method: "POST",
        url: "api/transactions",
        data: {transaction}
    })
}
