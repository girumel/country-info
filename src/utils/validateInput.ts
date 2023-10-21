export const validateInput = (input: string) => {
    const regex = /^[a-zA-Z\s]*$/;
    if (regex.test(input)) {
        return true;
    }
    else if (input === '') {
        return false;
    }
    else {
        return false;
    }
};
