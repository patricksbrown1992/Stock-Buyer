export const getCompanies = () => {
    return $.ajax({
        method: "GET",
        url: "api/companies"
    })
}

export const getCompany = id => {
    return $.ajax({
        method: "GET",
        url: `api/companies/${id}`
    })
}