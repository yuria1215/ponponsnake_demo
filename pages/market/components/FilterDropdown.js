import { useState } from "react";



export default function FilterDropdown() {

    const [filterDropdownShow, setFilterDropdownShow] = useState(false);
    const [checkboxClick, setCheckboxClick] = useState(false);

    const clickFilterDropdown = () => {
        setFilterDropdownShow(!filterDropdownShow);
    }
    const clickCheckbox = () => {
        setCheckboxClick(!checkboxClick);
    }

    return (
        <>
            <div className="button" id="button-filter" onClick={() => clickFilterDropdown()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12.668" height="10.025" viewBox="0 0 12.668 10.025">
                    <path id="filter-list" d="M4.916,16.025V14.341H7.753v1.684ZM0,6H12.668V7.684H0Zm2.111,5.835V10.19h8.446v1.645Z" transform="translate(0 -6)" fill="#c5cbfe" />
                </svg>

                Filters
            </div>

            <div className={`filterDropdown ${filterDropdownShow ? "filterDropdownShow" : ""}`}>
                <div className="filter-type">
                    <div className="">
                        RARITY
                    </div>
                </div>

                <div className="dropdown-link" onClick={() => clickCheckbox()}>
                    <span>
                        <div className={`checkbox ${checkboxClick ? "checkboxCheck" : ""}`}>
                            <svg className={`checkMark ${checkboxClick ? "checkMarkShow" : ""}`} xmlns="http://www.w3.org/2000/svg" width="12.04" height="11.312" viewBox="0 0 12.04 11.312">
                                <path id="checkmark-round" d="M10.477.206A.975.975,0,0,0,9.06.445L4.348,7.339l-2.6-2.81A.97.97,0,0,0,.32,4.481,1.122,1.122,0,0,0,.276,6s3.153,3.5,3.606,3.85A.975.975,0,0,0,5.3,9.614l5.4-7.9A1.121,1.121,0,0,0,10.477.206Z" transform="translate(1.226) rotate(7)" fill="#343456" />
                            </svg>
                        </div>
                        Excellent
                    </span>
                </div>
                <div className="dropdown-link">
                    <span>Rare</span>
                </div>
                <div className="dropdown-link">
                    <span>Legend</span>
                </div>
                <div className="dropdown-link">
                    <span>Ordinary</span>
                </div>
                <div className="dropdown-link">
                    <span>Cooperation</span>
                </div>
            </div>




        </>
    )
}