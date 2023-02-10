import moment from 'moment'

export const getYear = (str) => {
    return moment(str).format('YYYY')
}

export const formatDate = (str) => {
    return moment(str).format('DD/MM/YYYY'); 
}