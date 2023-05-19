import { useState, useEffect } from "react";
import cardDataRider from '@/pages/data/cardDataRider.json';
import cardDataItem from '@/pages/data/cardDataItem.json';
import cardDataLand from '@/pages/data/cardDataLand.json';

export default function MarketFilter({ onFilterChange }) {

    const [selectedType, setSelectedType] = useState('All');
    const [filteredCardData, setFilteredCardData] = useState([]);


    useEffect(() => {
        // 篩選卡片資料
        let filteredData = [];
        if (selectedType === 'All') {
            filteredData = [...cardDataRider, ...cardDataItem, ...cardDataLand];
        } else if (selectedType === 'Rider') {
            filteredData = cardDataRider;
        } else if (selectedType === 'Item') {
            filteredData = cardDataItem;
        } else if (selectedType === 'Land') {
            filteredData = cardDataLand;
        }
        setFilteredCardData(filteredData);
        onFilterChange(filteredData); // 更新篩選後的卡片資料
    }, [selectedType, onFilterChange]);

    return (
        <section className="market-filter">
            <div className="market-filter-block">
                <div className="left-block">

                    <div
                        className={`type ${selectedType === 'All' ? 'current' : ''}`}
                        onClick={() => setSelectedType('All')}
                    >
                        <img className="type-icon" src={`${process.env.BASE_PATH}/images/marketplace/marketFilter/All.png`} alt="" />
                        <div className="type-name">All</div>
                    </div>

                    <div
                        className={`type ${selectedType === 'Rider' ? 'current' : ''}`}
                        onClick={() => setSelectedType('Rider')}
                    >
                        <img className="type-icon" src={`${process.env.BASE_PATH}/images/marketplace/marketFilter/Rider.png`} alt="" />
                        <div className="type-name">Rider</div>
                    </div>

                    <div
                        className={`type ${selectedType === 'Item' ? 'current' : ''}`}
                        onClick={() => setSelectedType('Item')}
                    >
                        <img className="type-icon" src={`${process.env.BASE_PATH}/images/marketplace/marketFilter/Item.png`} alt="" />
                        <div className="type-name">Item</div>
                    </div>

                    <div
                        className={`type ${selectedType === 'Land' ? 'current' : ''}`}
                        onClick={() => setSelectedType('Land')}
                    >
                        <img className="type-icon" src={`${process.env.BASE_PATH}/images/marketplace/marketFilter/Land.png`} alt="" />
                        <div className="type-name">Land</div>
                    </div>

                </div>

                <div className="right-block">
                    <div className="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.668" height="10.025" viewBox="0 0 12.668 10.025">
                            <path id="filter-list" d="M4.916,16.025V14.341H7.753v1.684ZM0,6H12.668V7.684H0Zm2.111,5.835V10.19h8.446v1.645Z" transform="translate(0 -6)" fill="#c5cbfe" />
                        </svg>

                        Filter
                    </div>

                    <div className="button" id="Sort">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14.161" height="13.126" viewBox="0 0 14.161 13.126">
                            <g id="arrows-vertical" transform="translate(-3.021 -4.146)">
                                <path id="Path_4468" data-name="Path 4468" d="M24.61,13.09l-1.863,1.863V4.5H21.712V14.953L19.849,13.09l-.724.724,3.1,3.1,3.1-3.1Z" transform="translate(-8.505 0)" fill="#c5cbfe" stroke="#c5cbfe" strokeWidth="0.5" />
                                <path id="Path_4469" data-name="Path 4469" d="M6.48,4.5l-3.1,3.1.724.724L5.962,6.466V16.919H7V6.466L8.86,8.329,9.585,7.6Z" transform="translate(0 0)" fill="#c5cbfe" stroke="#c5cbfe" strokeWidth="0.5" />
                            </g>
                        </svg>

                        Price low to high
                        {/* <svg className="nav-arrow"  xmlns="http://www.w3.org/2000/svg" width="6.626" height="4.142" viewBox="0 0 6.626 4.142">
                            <path id="arrow-down" d="M547.084,44.916l2.484,2.485,2.485-2.485.828.828-3.313,3.314-3.313-3.314Z" transform="translate(-546.255 -44.916)" fillRule="evenodd" />
                        </svg> */}
                    </div>
                </div>

            </div>
        </section>
    )
}