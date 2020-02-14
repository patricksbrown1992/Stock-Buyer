export const signup = (user) => {

    return $.ajax({
        method: 'POST',
        url: 'api/users',
        data: {
            user
        }
    });
};


export const login = (user) => (
    $.ajax({
        method: 'POST',
        url: 'api/session',
        data: {
            user
        }
    })
);

export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: `api/session`
    })
);

export const updateUser = user => {
    return $.ajax({
        method: 'PATCH',
        url: `api/users/${user.id}`,
        data: {
            user
        }
    });
};

export const getUser = user => {
    return $.ajax({
        method: 'GET',
        url: `api/users/${user.id}`,
        data: {
            user
        }
    });
};