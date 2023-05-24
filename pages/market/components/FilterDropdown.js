import { useState } from "react";



export default function FilterDropdown() {

    const [filterDropdownShow, setFilterDropdownShow] = useState(false);

    const clickFilterDropdown = () => {
        setFilterDropdownShow(!filterDropdownShow);
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
                <div className="dropdown-link">
                    <a href="/market">Battle</a>
                </div>
            </div>


        </>
    )
}