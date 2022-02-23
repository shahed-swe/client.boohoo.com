import { styled } from '@stitches/react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { Button } from '../button/extra';

const StyledToggleGroup = styled(ToggleGroupPrimitive.Root, {
    display: 'inline-flex',
});

const StyledItem = styled(ToggleGroupPrimitive.Item, Button, {
    borderColor: '$rose4 !important',
    '&:not(last-child)': { marginRight: '$3' },
    '&[data-state=on]': { borderColor: '$rose8 !important' },
    '&:focus': { position: 'relative' },
});

// Exports
export const ToggleGroup = StyledToggleGroup;
export const ToggleGroupItem = StyledItem;