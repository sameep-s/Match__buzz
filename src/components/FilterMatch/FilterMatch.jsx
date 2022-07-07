import React from 'react';
import './filtersMatch.css';

const FilterMatch = () => {
    return (
        <>
            <div className="container__main__FilterMatch mt-2">
                <div className="filter__match__banner">
                    <img
                        src="https://res.cloudinary.com/sameep1/image/upload/v1657217406/ipl__assignment/ipl__logo_oywjhg.jpg"
                        alt="banner__image"
                    />
                </div>


                <div className="container__filters flex mt-1">
                    <div className="filter__Year">
                        <label for='year' >Year: </label>
                        <select name='year' id='years' >
                            <option value='2017' >2017</option>
                            <option value='2017' >2017</option>
                            <option value='2017' >2017</option>
                            <option value='2017' >2017</option>
                        </select>
                    </div>

                    <div className="filter__team">
                        <label for='team' >Team: </label>
                        <select name='team' id='team' >
                            <option value='2017' >All</option>
                            <option value='2017' >MI</option>
                            <option value='2017' >2017</option>
                            <option value='2017' >2017</option>
                        </select>
                    </div>
                </div>

            </div>
        </>
    )
}

export default FilterMatch;