const CURRENCY_FORMATER = new Intl.NumberFormat(undefined, 
    { currency : "EUR" , style : "currency" });

const formatCurrency = (number : number) => {
    return (  
        CURRENCY_FORMATER .format(number)
        );
}
 
export default formatCurrency;