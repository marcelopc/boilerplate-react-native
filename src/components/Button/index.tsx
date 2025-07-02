import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  label: string;
  onClick: () => void;
  testID?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, testID }) => {
  return (
    <TouchableOpacity testID={testID} style={styles.button} onPress={onClick}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  label: { color: '#fff', fontSize: 16 },
});

export default Button;
