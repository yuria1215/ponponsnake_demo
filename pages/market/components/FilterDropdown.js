import { useState, useRef, useEffect } from "react";

// 定義一個可重複使用的 Checkbox 元件
const FilterCheckbox = ({ checkboxStates, onClick }) => (
    <>
        {/* 遍歷 checkboxStates 物件的鍵值對 */}
        {Object.entries(checkboxStates).map(([checkboxName, isChecked]) => (
            // 對每個勾選框創建一個 div 元素
            <div className="dropdown-link" key={checkboxName} onClick={() => onClick(checkboxName)}>
                <span>
                    {/* 勾選框的外層容器，根據 isChecked 添加樣式 */}
                    <div className={`checkbox ${isChecked ? "checkboxCheck" : ""}`}>
                        {/* SVG 勾選符號，根據 isChecked 添加樣式 */}
                        <svg className={`checkMark ${isChecked ? "checkMarkShow" : ""}`} xmlns="http://www.w3.org/2000/svg" width="12.04" height="11.312" viewBox="0 0 12.04 11.312">
                            <path id="checkmark-round" d="M10.477.206A.975.975,0,0,0,9.06.445L4.348,7.339l-2.6-2.81A.97.97,0,0,0,.32,4.481,1.122,1.122,0,0,0,.276,6s3.153,3.5,3.606,3.85A.975.975,0,0,0,5.3,9.614l5.4-7.9A1.121,1.121,0,0,0,10.477.206Z" transform="translate(1.226) rotate(7)" fill="#343456" />
                        </svg>
                    </div>
                    {/* 顯示勾選框的名稱 */}
                    {checkboxName}
                </span>
            </div>
        ))}
    </>
);

// 前面帶有icon的checkbox
const Checkbox = ({ name, checked, onClick }) => (
    <div className="dropdown-link" onClick={() => onClick(name)}>
        <span>
            <div className={`checkbox ${checked ? "checkboxCheck" : ""}`}>
                <svg className={`checkMark ${checked ? "checkMarkShow" : ""}`} xmlns="http://www.w3.org/2000/svg" width="12.04" height="11.312" viewBox="0 0 12.04 11.312">
                    <path id="checkmark-round" d="M10.477.206A.975.975,0,0,0,9.06.445L4.348,7.339l-2.6-2.81A.97.97,0,0,0,.32,4.481,1.122,1.122,0,0,0,.276,6s3.153,3.5,3.606,3.85A.975.975,0,0,0,5.3,9.614l5.4-7.9A1.121,1.121,0,0,0,10.477.206Z" transform="translate(1.226) rotate(7)" fill="#343456" />
                </svg>
            </div>
            <img className="checkbox-icon" src={`${process.env.BASE_PATH}/images/marketplace/marketFilter/ElementsIcon-${name}.png`} alt="" />
            {name}
        </span>
    </div>
);



export default function FilterDropdown() {
    //點擊展開filter下拉選單
    const [filterDropdownShow, setFilterDropdownShow] = useState(false);


    // const [checkboxClick, setCheckboxClick] = useState(false);
    // 狀態變數，用於控制勾選框的狀態
    const [checkboxClick, setCheckboxClick] = useState({
        Rarity: { Excellent: false, Rare: false, Legend: false, Ordinary: false, Cooperation: false },
        Talent: { Water: false, Fire: false, Earth: false, Wind: false },
    });

    // const [checkboxClick2, setCheckboxClick2] = useState(false);

    // 定義不同 Talent 的 icon 資訊
    const talents = [
        { name: "Water", iconPath: `${process.env.BASE_PATH}/images/marketplace/marketFilter/ElementsIcon-Water.png` },
        { name: "Fire", iconPath: `${process.env.BASE_PATH}/images/marketplace/marketFilter/ElementsIcon-Fire.png` },
        { name: "Earth", iconPath: `${process.env.BASE_PATH}/images/marketplace/marketFilter/ElementsIcon-Earth.png` },
        { name: "Wind", iconPath: `${process.env.BASE_PATH}/images/marketplace/marketFilter/ElementsIcon-Wind.png}` },
    ];


    // 處理展開收合選單的點擊事件
    const clickFilterDropdown = () => {
        setFilterDropdownShow(!filterDropdownShow);
    }


    // 處理勾選框的點擊事件
    const clickCheckbox = (group, checkboxName) => {
        setCheckboxClick((prevStates) => ({
            ...prevStates,
            [group]: {
                ...prevStates[group],
                [checkboxName]: !prevStates[group][checkboxName],
            },
        }));
    };
    // const clickCheckbox2 = () => {
    //     setCheckboxClick2(!checkboxClick2);
    // }
    const [checkboxStates2, setCheckboxStates2] = useState({
        Water: false,
        Fire: false,
        Earth: false,
        Wind: false,
    });

    const clickCheckbox2 = (checkboxName) => {
        setCheckboxStates2((prevStates) => ({
            ...prevStates,
            [checkboxName]: !prevStates[checkboxName],
        }));
    };



    return (
        <>
            <div className="button" id="button-filter" onClick={() => clickFilterDropdown()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12.668" height="10.025" viewBox="0 0 12.668 10.025">
                    <path id="filter-list" d="M4.916,16.025V14.341H7.753v1.684ZM0,6H12.668V7.684H0Zm2.111,5.835V10.19h8.446v1.645Z" transform="translate(0 -6)" fill="#c5cbfe" />
                </svg>

                Filters
            </div>

            <div className={`filterDropdown ${filterDropdownShow ? "filterDropdownShow" : ""}`}>

                {/* Rarity 分類 */}
                <div className="filter-type">
                    <span>RARITY</span>
                </div>

                {/* 使用 FilterCheckbox 元件，傳入相應的 checkboxStates 和 clickCheckbox 函數 */}
                <FilterCheckbox checkboxStates={checkboxClick.Rarity} onClick={(name) => clickCheckbox("Rarity", name)} />

                {/* Talent 分類 */}
                <div className="filter-type">
                    <span>TALENT</span>
                </div>

                {/* <FilterCheckbox checkboxStates={checkboxClick.Talent} onClick={(name) => clickCheckbox("Talent", name)} /> */}




                <Checkbox name="Water" checked={checkboxStates2["Water"]} onClick={clickCheckbox2} />
                <Checkbox name="Fire" checked={checkboxStates2["Fire"]} onClick={clickCheckbox2} />
                <Checkbox name="Earth" checked={checkboxStates2["Earth"]} onClick={clickCheckbox2} />
                <Checkbox name="Wind" checked={checkboxStates2["Wind"]} onClick={clickCheckbox2} />

                {/* <div className="dropdown-link" onClick={() => clickCheckbox2("Water")}>
                    <span>
                        勾選框的外層容器，根據 isChecked 添加樣式
                        <div className={`checkbox ${checkboxStates2["Water"] ? "checkboxCheck" : ""}`}>
                            SVG 勾選符號，根據 isChecked 添加樣式
                            <svg className={`checkMark ${checkboxStates2["Water"] ? "checkMarkShow" : ""}`} xmlns="http://www.w3.org/2000/svg" width="12.04" height="11.312" viewBox="0 0 12.04 11.312">
                                <path id="checkmark-round" d="M10.477.206A.975.975,0,0,0,9.06.445L4.348,7.339l-2.6-2.81A.97.97,0,0,0,.32,4.481,1.122,1.122,0,0,0,.276,6s3.153,3.5,3.606,3.85A.975.975,0,0,0,5.3,9.614l5.4-7.9A1.121,1.121,0,0,0,10.477.206Z" transform="translate(1.226) rotate(7)" fill="#343456" />
                            </svg>
                        </div>

                        顯示勾選框的名稱的icon
                        <img className="checkbox-icon" src={`${process.env.BASE_PATH}/images/marketplace/marketFilter/ElementsIcon-Water.png`} alt="" />
                        顯示勾選框的名稱
                        Water
                    </span>
                </div> */}

            </div>


        </>
    )
}