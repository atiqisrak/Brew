// PersonalizeOrder.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const PersonalizeOrder = ({ route, navigation }) => {
    const { option } = route.params;
    const [customization, setCustomization] = useState({});

    const handleCustomizationSelection = (category, value) => {
        setCustomization(prevState => ({
            ...prevState,
            [category]: value,
        }));
    };

    const submitCustomization = () => {
        // Handle submitting customization
        console.log('Customization:', customization);
        navigation.navigate('Order', { option, customization });
    };

    const renderButtons = (category, options) => {
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 10,
            }}>
                {options.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            globalStyles.button,
                            customization[category] === option && globalStyles.selectedButton,
                        ]}
                        onPress={() => handleCustomizationSelection(category, option)}
                    >
                        <Text style={globalStyles.buttonText}>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.heading}>Customize your order:</Text>

            {option === 'Water' && renderButtons('temperature', ['Hot', 'Normal', 'Cold'])}

            {option === 'Tea' &&
                <>
                    <Text style={globalStyles.heading}>Sugar (Spoon):</Text>
                    {renderButtons('spoon', ['None', 'Half', '1', '2'])}

                    <Text style={globalStyles.heading}>Amount:</Text>
                    {renderButtons('amount', ['Half', 'Full'])}
                </>
            }

            {option === 'Coffee' &&
                <>
                    <Text style={globalStyles.heading}>Sugar (Spoon):</Text>
                    {renderButtons('spoon', ['None', 'Half', '1', '2'])}

                    <Text style={globalStyles.heading}>Amount:</Text>
                    {renderButtons('amount', ['Half', 'Full'])}

                    <Text style={globalStyles.heading}>Milk:</Text>
                    {renderButtons('milk', ['Yes', 'No'])}
                </>
            }

            {option === 'Biscuit' &&
                <>
                    <Text style={globalStyles.heading}>Biscuit:</Text>
                    {renderButtons('biscuit', ['1', '2'])}
                </>
            }

            <TouchableOpacity
                style={globalStyles.submitButton}
                onPress={submitCustomization}
            >
                <Text style={globalStyles.buttonText}>Submit Customization</Text>
            </TouchableOpacity>
        </View>
    );
};

export default PersonalizeOrder;
