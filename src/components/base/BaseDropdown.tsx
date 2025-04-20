import { useState } from "react";
import "./BaseDropdown.css";

type BaseDropdownProps = {
    title: string;
    options: string[];
    selected: string;
    onChange?: (option: string) => void;
}


function BaseDropdown({ title, options, selected, onChange }: BaseDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(selected);

    return (
        <div className="dropdown-container">
            <span className="dropdown-title">{title}</span>
            <div className="dropdown-selected" onClick={() => setIsOpen(!isOpen)}>
                {selectedOption}
                {isOpen && <div className="dropdown-options">
                    {options.map((option) => (
                        <div
                            key={option} onClick={() => {
                                setSelectedOption(option);
                                onChange?.(option);
                            }}
                            className={`dropdown-option ${selectedOption === option ? "selected-option" : ""}`}
                        >{option}</div>
                    ))}
                </div>}
            </div>
        </div>
    )
}

export default BaseDropdown;
