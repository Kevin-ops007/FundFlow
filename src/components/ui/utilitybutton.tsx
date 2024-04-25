import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './button';
import { PlusCircledIcon } from '@radix-ui/react-icons';

function UtilityButton(props: any) {
    return (
        <Button variant="ghost" className={`px-4 py-2 mr-4 ${props.hoverColor}`}>
            <PlusCircledIcon className="mr-2 h-4 w-4" />
            Add {props.utility}
        </Button>
    );
}

UtilityButton.propTypes = {
    hoverColor: PropTypes.string,
    variant: PropTypes.string,
    utility: PropTypes.string,
};

export default UtilityButton;
