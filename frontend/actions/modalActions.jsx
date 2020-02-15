export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = modal => {

    return {
        type: OPEN_MODAL,
        modal
    };
};

export const portfolioBuy = () => {

    return {
        type: OPEN_MODAL,

        modal: 'portfolio-buy'
    };
};
export const closeModal = () => ({
    type: CLOSE_MODAL
});
