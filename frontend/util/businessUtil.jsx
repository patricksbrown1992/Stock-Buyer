export const getBusinesses = (user) => {
    return $.ajax({
        method: "GET",
        url: `api/users/${user.id}/businesses`,
        data
    })
}

export const getBusiness = (business) => {
    return $.ajax({
        method: "GET",
        url: `api/users/${business.user_id}/businesses/${business.id}`,
        date: {
            business
        }
    })
} 

export const updateBusiness = (user, business) => {
    return $.ajax({
        method: "PATCH",
        url: `api/users/${user.id}/businesses/${business.id}`,
        data: {
            business
        }
    })
} 

export const createBusiness = (user, business) => {
    return $.ajax({
        method: "POST",
        url: `api/users/${user.id}/businesses/`,
        data: {
            business
        }
    })
} 

export const deleteBusiness = (business) => {
    return $.ajax({
        method: "DELETE",
        url: `api/users/${business.user_id}/businesses/${id}`
    })
} 