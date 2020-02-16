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

export const portfolioTicker = () => {

    return {
        type: OPEN_MODAL,

        modal: 'portfolio-ticker'
    };
};

export const portfolioMoneySell = () => {

    return {
        type: OPEN_MODAL,

        modal: 'portfolio-sell-money'
    };
};

export const portfolioSell = () => {

    return {
        type: OPEN_MODAL,

        modal: 'portfolio-sell'
    };
};


export const portfolioMoney = () => {

    return {
        type: OPEN_MODAL,

        modal: 'portfolio-money'
    };
};


export const closeModal = () => ({
    type: CLOSE_MODAL
});
