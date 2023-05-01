import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import Link from "next/link";

const Dropdown = forwardRef(function Dropdown({ children, list }, ref) {
  const [dropdownShow, setDropdownShow] = useState(false);

  const toggleDropdown = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 850) {
      setDropdownShow(!dropdownShow);
    }
  };

  useImperativeHandle(ref, () => {
    return {
      close() {
        setDropdownShow(false);
      },
    };
  }, []);

  const DropdownLink = (item) => {
    return <Link href={item.href}>{item.text}</Link>;
  };

  useEffect(() => {
    function handleResize() {
      // 在這裡改變dropdownShow的狀態為false
      const screenWidth = window.innerWidth;
      if (screenWidth > 850) {
        setDropdownShow(false);
      }
    }
    window.addEventListener("resize", handleResize); // 加入resize事件監聽
    return () => {
      window.removeEventListener("resize", handleResize); // 移除resize事件監聽
    };
  }, []);

  return (
    <>
      <div className="dropdown-button" onClick={() => toggleDropdown()}>
        {children}
      </div>

      <div className={`dropdown ${dropdownShow ? "dropdownShow" : ""}`}>
        {list.map((item) => {
          return (
            <div
              key={item.text}
              className="dropdown-link"
              onClick={() => toggleDropdown()}
            >
              {!item.href && item.text}
              {item.href && <DropdownLink {...item} />}
            </div>
          );
        })}
      </div>
    </>
  );
}, [])


export default Dropdown
