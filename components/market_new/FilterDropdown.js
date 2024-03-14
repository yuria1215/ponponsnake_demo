import { useState } from "react";
import { imgUrl } from '@/utils/tool.js'

const FilterCheckboxIcon = ({ name, isChecked, isShowIcon, onClick }) => (
    <div className="dropdown-link" onClick={onClick}>
        <span>
            <div className={`checkbox ${isChecked ? "checkboxCheck" : ""}`}>
                <svg className={`checkMark ${isChecked ? "checkMarkShow" : ""}`} xmlns="http://www.w3.org/2000/svg" width="12.04" height="11.312" viewBox="0 0 12.04 11.312">
                    <path id="checkmark-round" d="M10.477.206A.975.975,0,0,0,9.06.445L4.348,7.339l-2.6-2.81A.97.97,0,0,0,.32,4.481,1.122,1.122,0,0,0,.276,6s3.153,3.5,3.606,3.85A.975.975,0,0,0,5.3,9.614l5.4-7.9A1.121,1.121,0,0,0,10.477.206Z" transform="translate(1.226) rotate(7)" fill="#343456" />
                </svg>
            </div>

            { isShowIcon && 
                <img 
                    className="checkbox-icon" 
                    src={imgUrl(`images/marketplace/marketFilter/ElementsIcon-${name}.png`)} 
                    alt="" 
                /> 
            }

            { name }
        </span>
    </div>
);



export default function FilterDropdown({ onChange }) {
    // 下拉選單出現條件
    const [filterDropdownShow, setFilterDropdownShow] = useState(false);
    // 結構列表 name:欄位名, isChecked: 勾選判斷
    const [checkboxes, setCheckboxes] = useState([
        {   
            type: 'rarities',
            name: 'Rarity',
            list: [
                { name: 'Excellent', isChecked: false },
                { name: 'Rare', isChecked: false },
                { name: 'Legend', isChecked: false },
                { name: 'Ordinary', isChecked: false },
                { name: 'Cooperation', isChecked: false },
            ]
        },
        {   
            type: 'talents',
            name: 'Talents',
            list: [
                { name: 'Water', isChecked: false },
                { name: 'Fire', isChecked: false },
                { name: 'Earth', isChecked: false },
                { name: 'Wind', isChecked: false },
            ]
        },
    ]);

     // 點擊下拉選單切換開關
    const clickFilterDropdown = () => setFilterDropdownShow(!filterDropdownShow)

    // 點擊外層關閉
    const onButtonFilterBlur = () => setFilterDropdownShow(false)

    // 過濾已經勾選
    const getIsCheckedList = list => {
        return list.reduce((newArray, item) => {
            if (item.isChecked) newArray.push(item.name)
            return newArray
        }, [])
    }

    // 勾選切換並上父層傳遞
    const checkboxOnClick = checkbox => {
        checkbox.isChecked = !checkbox.isChecked
        let [rarities, talents] = checkboxes
        rarities = getIsCheckedList(rarities.list)
        talents = getIsCheckedList(talents.list)
        onChange({rarities, talents})
        setCheckboxes(checkboxes.slice()) // 產生新陣列讓畫面更新
    }

    return (
        <>
            <div 
                className="button" 
                id="button-filter" 
                onClick={e => clickFilterDropdown(e)} 
                tabIndex={0} // 無 Blur 事件標籤, 需給予 tabIndex 屬性才能觸發
                onBlur={onButtonFilterBlur}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="12.668" height="10.025" viewBox="0 0 12.668 10.025">
                    <path id="filter-list" d="M4.916,16.025V14.341H7.753v1.684ZM0,6H12.668V7.684H0Zm2.111,5.835V10.19h8.446v1.645Z" transform="translate(0 -6)" fill="#c5cbfe" />
                </svg>

                Filters

                <div 
                    className={`filterDropdown ${filterDropdownShow ? "filterDropdownShow" : ""}`} 
                    onClick={e => e.stopPropagation()} // 阻擋子層觸發父層(button-filter)點擊事件
                >
                    {
                        checkboxes.map(({type, name, list}) => {
                            return (
                                <div key={name}>
                                    <div className="filter-type" >
                                        <span>{name}</span>
                                    </div>
                                    
                                    {
                                        list.map(checkbox => (
                                            <FilterCheckboxIcon
                                                key={checkbox.name}
                                                name={checkbox.name}
                                                isChecked={checkbox.isChecked}
                                                isShowIcon={type === 'talents'}
                                                onClick={() => checkboxOnClick(checkbox)}
                                            />
                                        ))
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}