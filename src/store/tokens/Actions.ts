
export type Action = {type: 'ADD_TOKENS', payload: string}

export const addToken = (token: string): Action => ({
    type : 'ADD_TOKENS',
    payload: token,
})