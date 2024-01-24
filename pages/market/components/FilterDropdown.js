import { use, useState } from "react";



export default function FilterDropdown() {
    //點擊展開filter下拉選單
    const [filterDropdownShow, setFilterDropdownShow] = useState(false);

    //點擊filter選單內的checkbox
    // const [checkboxClick, setCheckboxClick] = useState(false);
    const [checkboxClick, setCheckboxClick] = useState({
        Excellent: false,
        Rare: false,
        Legend: false,
        Ordinary: false,
        Cooperation: false,

    });
    const [checkboxClick2, setCheckboxClick2] = useState({

        Water: false,
        Fire: false,
        Earth: false,
        Wind: false,
    });

    const clickFilterDropdown = () => {
        setFilterDropdownShow(!filterDropdownShow);
    }


    // 定義一個函式 clickCheckbox，用來處理勾選框的點擊事件
    const clickCheckbox = (checkboxName) => {
        // 使用 setCheckboxClick 更新 checkboxClick 狀態
        setCheckboxClick((prevStates) => ({
            ...prevStates,
            [checkboxName]: !prevStates[checkboxName], // 切換 checkboxName 的狀態
        }));
    };

    const clickCheckbox2 = (checkboxName) => {
        // 使用 setCheckboxClick 更新 checkboxClick 狀態
        setCheckboxClick2((prevStates) => ({
            ...prevStates,
            [checkboxName]: !prevStates[checkboxName], // 切換 checkboxName 的狀態
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

                <div className="filter-type">
                    <span>
                        RARITY
                    </span>
                </div>

                {/* 使用 Object.entries(checkboxClick) 遍歷 checkboxClick 狀態物件的鍵值對 */}
                {Object.entries(checkboxClick).map(([checkboxName, isChecked]) => (
                    // 對每個勾選框創建一個 div 元素
                    <div className="dropdown-link" key={checkboxName} onClick={() => clickCheckbox(checkboxName)}>
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

                <div className="filter-type">
                    <span>
                        TALENT
                    </span>
                </div>


                {Object.entries(checkboxClick2).map(([checkboxName, isChecked]) => (
                    // 對每個勾選框創建一個 div 元素
                    <div className="dropdown-link" key={checkboxName} onClick={() => clickCheckbox2(checkboxName)}>
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



            </div>


        </>
    )
}