import I18n from 'i18n-js'

export const formatter = {
    tel: (/** @type {number} */ number) => {
        if(number) {
            const cleaned = ('' + number).replace(/\D/g, '');
            const match = cleaned.match(/^(\d{2})(\d{7})$/);

            return match.length !== 0 ? [match[1], ' ', match[2]].join('') : ''
        }

        return ''
    },
    money: (value) => value ? I18n.toCurrency(value)  : '$ 0'
}