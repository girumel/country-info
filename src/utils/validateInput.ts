export const validateInput = (input: string) => {
    const regex = /^[a-zA-Z\s]*$/;
    if (input === '' || input.length < 3) {
        return false;
    }
    else if (regex.test(input)) {
        return true;
    }
};
