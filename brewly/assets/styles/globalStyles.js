// globalStyles.js

export const colors = {
    primary: '#5c3408',
    secondary: '#FFA800',
    text: '#333',
    background: '#ecf0f1',
};

export const globalStyles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    textInput: {
        width: '80%',
        height: 40,
        borderColor: colors.primary,
        color: colors.text,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    confirmationText: {
        color: colors.primary,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    submitButton: {
        backgroundColor: colors.secondary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
    },
    linkText: {
        color: colors.primary,
        fontWeight: 'bold',
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    customizationButton: {
        marginTop: 10,
    },
    scrollViewContainer: {
        flexGrow: 1,
    },
};
