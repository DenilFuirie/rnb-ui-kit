import React, { FC } from 'react';

export interface ButtonProps {
    color: string;
};

const Button: FC<ButtonProps> = ({ children, ...props }) => {
    const { color } = props;
    return (
        <button {...props} style={{color}}>
            {children}
        </button>
    );
};

export default Button;
