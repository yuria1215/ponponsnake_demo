import { useState, useEffect } from "react";
import cardDataRider from '@/data/cardData/cardDataRider.json';
import cardDataItem from '@/data/cardData/cardDataItem.json';
import cardDataLand from '@/data/cardData/cardDataLand.json';
// import cardData from "@/data/cardData/cardData.js";

import FilterDropdown from '@/components/market/MarketNavigation/FilterDropdown';

export default function MarketNavigation({ onSelectChange }) {
    const cardData = [...cardDataRider, ...cardDataItem, ...cardDataLand];

    // 定義選取的類型狀態
    const [selectedType, setSelectedType] = useState('all');
    const [selectedCardData, setSelectedCardData] = useState(cardData);
    const [filterNames, setFilterNames] = useState([]);
    const [isSorted, setIsSorted] = useState(false);

    const typeSelect = type => {
        let cards = cardData
        if (type === 'all') {
            setSelectedCardData(cards)
        } else {
            cards = cardData.filter(card => card.type == type)
            setSelectedCardData(cards)
        }
        setSelectedType(type);
        onSelectChange(cards);
        return cards
    }

    const handleSelectChange = filterNames => {
        const cards = typeSelect(selectedType)
        setFilterNames(filterNames)
        if (filterNames.length === 0) {
            setSelectedCardData(cards)
            onSelectChange(cards);
            return cards
        } else {
            const filtered = cards.filter(card => {
                const { rarity, labelIcon } = card
                const hasRarity = rarity && filterNames.includes(rarity)
                const hasIcon = labelIcon && filterNames.includes(labelIcon)
                return hasRarity || hasIcon
            })
            setSelectedCardData(filtered)
            onSelectChange(filtered);
            return filtered
        }
    }

    const sort = cards => {
        if (isSorted) {
            handleSelectChange(filterNames)
            setIsSorted(false)
        } else {
            const newCards = cards.slice()
            const sorted = newCards.sort((pre, next) => {
                return pre.priceUSD - next.priceUSD
            })
            setSelectedCardData(sorted)
            setIsSorted(true)
        }
    }

    onSelectChange(selectedCardData)




    // useEffect(() => {
    //     // 選擇卡片資料
    //     let filteredData = [];
    //     if (selectedType === 'All') {
    //         filteredData = [...cardDataRider, ...cardDataItem, ...cardDataLand];
    //     } else if (selectedType === 'Rider') {
    //         filteredData = cardDataRider;
    //     } else if (selectedType === 'Item') {
    //         filteredData = cardDataItem;
    //     } else if (selectedType === 'Land') {
    //         filteredData = cardDataLand;
    //     }

    //     // 設定選擇後的卡片資料狀態
    //     setSelectedCardData(filteredData);

    //     // 呼叫父元件傳遞的onSelectChange回調函數，並傳遞選擇後的資料
    //     onSelectChange(filteredData);

    // }, [selectedType]);

    return (
        <section className="market-navigation">
            <div className="market-navigation-block">
                <div className="left-block">

                    <div
                        className={`type ${selectedType === 'all' ? 'current' : ''}`}
                        onClick={() => typeSelect('all')}
                    >
                        <img className="type-icon" src={`${process.env.BASE_PATH}/images/marketplace/marketFilter/All.png`} alt="" />
                        <div className="type-name">All</div>
                    </div>

                    <div
                        className={`type ${selectedType === 'rider' ? 'current' : ''}`}
                        onClick={() => typeSelect('rider')}
                    >
                        <img className="type-icon" src={`${process.env.BASE_PATH}/images/marketplace/marketFilter/Rider.png`} alt="" />
                        <div className="type-name">Rider</div>
                    </div>

                    <div
                        className={`type ${selectedType === 'item' ? 'current' : ''}`}
                        onClick={() => typeSelect('item')}
                    >
                        <img className="type-icon" src={`${process.env.BASE_PATH}/images/marketplace/marketFilter/Item.png`} alt="" />
                        <div className="type-name">Item</div>
                    </div>

                    <div
                        className={`type ${selectedType === 'land' ? 'current' : ''}`}
                        onClick={() => typeSelect('land')}
                    >
                        <img className="type-icon" src={`${process.env.BASE_PATH}/images/marketplace/marketFilter/Land.png`} alt="" />
                        <div className="type-name">Land</div>
                    </div>

                </div>

                <div className="right-block">

                    <div className="dropdown-block">
                        <FilterDropdown onSelectChange={handleSelectChange} />
                    </div>

                    <div className="dropdown-block">

                        <div className="button" id="button-sort" onClick={() => sort(selectedCardData)}>
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

            </div>
        </section>
    )
}