import { useState } from "react";
import { imgUrl } from '@/utils/tool.js'
import FilterDropdown from './FilterDropdown.js';

export default function MarketNavigation({ onChange }) {
    // 分類
    const [selectedType, setSelectedType] = useState('all');
    // 是否排序
    const [isSort, setIsSort] = useState(false);
    // 分類列表
    const types = [
        { type: 'all', name: 'All' },
        { type: 'rider', name: 'Rider' },
        { type: 'item', name: 'Item' },
        { type: 'land', name: 'Land' },
    ]

    // 分類選擇並向上層傳遞
    const typeSelect = type => {
        setSelectedType(type);
        onChange({ type })
    }

    // 子層勾選事件並向上層傳遞
    const onFilterDropdownChange = condition => onChange(condition)

    // 切換排序開關並向上層傳遞
    const sort = () => {
        const flag = !isSort
        setIsSort(flag)
        onChange({ isSort: flag })
    }

    return (
        <section className="market-navigation">
            <div className="market-navigation-block">
                <div className="left-block">
                    {
                        types && types.map(({ type, name }) => (
                            <div
                                className={`type ${selectedType === type ? 'current' : ''}`}
                                key={type}
                                onClick={() => typeSelect(type)}
                            >
                                <img className="type-icon" src={imgUrl(`images/marketplace/marketFilter/${type}.png`)} alt="" />
                                <div className="type-name">{name}</div>
                            </div>
                        ))
                    }
                </div>

                <div className="right-block">

                    <div className="dropdown-block">
                        <FilterDropdown onChange={onFilterDropdownChange} />
                    </div>

                    <div className="dropdown-block">

                        <div className="button" id="button-sort" onClick={sort}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14.161" height="13.126" viewBox="0 0 14.161 13.126">
                                <g id="arrows-vertical" transform="translate(-3.021 -4.146)">
                                    <path id="Path_4468" data-name="Path 4468" d="M24.61,13.09l-1.863,1.863V4.5H21.712V14.953L19.849,13.09l-.724.724,3.1,3.1,3.1-3.1Z" transform="translate(-8.505 0)" fill="#c5cbfe" stroke="#c5cbfe" strokeWidth="0.5" />
                                    <path id="Path_4469" data-name="Path 4469" d="M6.48,4.5l-3.1,3.1.724.724L5.962,6.466V16.919H7V6.466L8.86,8.329,9.585,7.6Z" transform="translate(0 0)" fill="#c5cbfe" stroke="#c5cbfe" strokeWidth="0.5" />
                                </g>
                            </svg>

                            Price low to high
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}