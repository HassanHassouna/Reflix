import React from 'react';

function Search(props) {

    const handleSearch = (e) => {
        props.setSearch(e.target.value);
    }
    return (
        <div style={
            {
                display: 'flex',
                justifyContent: 'space-between',
                padding: '20px',
                alignItems: 'center',
            }
        }>
            <input onChange={
                handleSearch
            } style={
                {
                    width: '50%',
                    height: '30px',
                    padding: '5px',
                    borderRadius: '5px',
                    border: 'none',
                    outline: 'none',
                }
            } type="text" placeholder="Search"/>
            <div>
                {
                    props.budget > 0 ? <h4>Budget: {props.budget}$</h4> : <h4 style={
                        {
                            color: 'red'
                        }
                    }>You have no more budget</h4>
                }
            </div>
        </div>
    );
}

export default Search;
