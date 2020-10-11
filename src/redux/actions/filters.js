export const setSortBy = ({type, order}) => ({
    type: 'SET_SORT_BY',
    payload:{ type, order },
}) 

export const setCatigories = (cetIndex) => ({
    type: 'SET_CATEGORY',
    payload: cetIndex,
})
