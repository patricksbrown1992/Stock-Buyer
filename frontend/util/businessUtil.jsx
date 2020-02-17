export const getBusinesses = (user) => {
    return $.ajax({
        method: "GET",
        url: `api/users/${user.id}/businesses`,
        
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

export const updateBusiness = (id, business) => {
  
    return $.ajax({
        method: "PATCH",
        url: `api/users/${id}/businesses/${business.id}`,
        data: {
            business
        }
    })
} 

export const createBusiness = (id, business) => {
  
    return $.ajax({
        method: "POST",
        url: `api/users/${id}/businesses`,
        data: {
            business
        }
    })
} 

export const deleteBusiness = (business) => {
    
    return $.ajax({
        method: "DELETE",
        url: `api/users/${business.user_id}/businesses/${business.id}`
    })
} 