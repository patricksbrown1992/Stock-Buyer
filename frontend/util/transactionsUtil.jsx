export const getTransactions = (user) => {
    debugger
    return $.ajax({
        method: "GET",
        url: "api/transactions",
        data: {
            user_id: user.id,
        }
    })
}

export const createTransaction = transaction => {
    return $.ajax({
        method: "POST",
        url: "api/transactions",
        data: {transaction}
    })
}
