import * as APIEntitiesUtil from '../util/companiesUtil';

export const RECEIVE_COMPANY = "RECEIVE_COMPANY";
export const RECEIVE_COMPANIES = "RECEIVE_COMPANIES";


const receiveCompanies = companies => {
    return {
        type: RECEIVE_COMPANIES,
        companies
    }
}
const receiveCompany = company => {
    return {
        type: RECEIVE_COMPANY,
        company 
    }
}


export const getCompanies = () => dispatch => {
    return APIEntitiesUtil.getCompanies()
        .then(resp => dispatch(receiveCompanies(resp)))
}
export const getCompany = id => dispatch => {
    return APIEntitiesUtil.getCompany(id)
        .then(resp => dispatch(receiveCompany(resp)))
}