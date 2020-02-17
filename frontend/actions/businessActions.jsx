import * as APIEntitiesUtil from '../util/businessUtil';

 export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
 export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
 export const DESTROY_BUSINESS = 'DESTROY_BUSINESS';
 export const CLEAR_BUSINESSES = 'CLEAR_BUSINESSES';

 const receiveBusinesses = businesses => {
     return {
         type: RECEIVE_BUSINESSES,
         businesses
     }
 }
 const receiveBusiness = business => {
 
     return {
         type: RECEIVE_BUSINESS,
         business 
     }
 }

 export const clearBusinesses = () => {
    return {
        type: CLEAR_BUSINESSES
    }
}

 const destroyBusiness = (business) => {

    return ({
        type: DESTROY_BUSINESS,
        business
    });
};


 export const getBusinesses = (user) => dispatch => {
     return APIEntitiesUtil.getBusinesses(user)
         .then(resp => dispatch(receiveBusinesses(resp)))
 }
 export const getBusiness = business => dispatch => {
     return APIEntitiesUtil.getBusiness(business)
         .then(resp => dispatch(receiveBusiness(resp)))
 } 

 export const createBusiness = (id, business) => dispatch => {
    
    return APIEntitiesUtil.createBusiness(id, business).then(business => dispatch(receiveBusiness(business)));

};

export const updateBusiness= (id, business) => dispatch => {
    
    return APIEntitiesUtil.updateBusiness(id, business).then(business => (dispatch(receiveBusiness(business))))
};

export const deleteBusiness = (business) => dispatch => {
 
    return APIEntitiesUtil.deleteBusiness(business).then(business => (dispatch(destroyBusiness(business))));
};