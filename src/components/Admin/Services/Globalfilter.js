import React from 'react'

export const Globalfilter = ({filter,setfilter}) => {
    return (
        <div>
            <span>
                Search:{' '}
                <input value={filter || ''}
                onChange={e=> setfilter(e.target.value)}/>
            </span>
            
        </div>
    )
}
