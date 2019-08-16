
export default function dictionary(abbreviation) {
    switch (abbreviation) {
        case "IDR":
            abbreviation += " - Indonesian Rupiah";
            break;
        case "EUR":
            abbreviation += " - Euro";
            break;
        case "GBP":
            abbreviation += " - British Pound";
            break;
        case "JPY":
            abbreviation += " - Japanese Yen";
            break;
        case "SGD":
            abbreviation += " - Singapore Dollar";
            break;
        case "INR":
            abbreviation += " - Indian Rupee";
            break;
        case "CAD":
            abbreviation += " - Canadian Dollar";
            break;
        case "CHF":
            abbreviation += " - Swiss Franc";
            break;
        case "MYR":
            abbreviation += " - Malaysian Ringgit";
            break;
        case "USD":
            abbreviation += " - United States Dollar";
            break;
         case "KRW":
            abbreviation += " - South Korean Won";
            break;
        default:
            abbreviation += " - Not Found";
    }

    return abbreviation;
};