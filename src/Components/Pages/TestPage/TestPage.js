import React from 'react';
import { Select, MenuItem } from '@material-ui/core';

export default function TestPage() {
    return (
        <div className='TestPage'>
            <Select>
                <MenuItem value={1} >ASM</MenuItem>
                <MenuItem value={2} >PHP</MenuItem>
                <MenuItem value={3} >TSX</MenuItem>
                <MenuItem value={4} >JSX</MenuItem>
            </Select>
        </div>
    );
}