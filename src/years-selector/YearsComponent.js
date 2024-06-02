import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownButton, Form } from 'react-bootstrap';
import './YearsComponent.css';

function YearSelector() {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [years, setYears] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    // Generate an array of years starting from the current year
    const yearsArray = [];
    for (let i = currentYear; i > currentYear - 20; i--) {
      yearsArray.push(i);
    }
    setYears(yearsArray);
  }, [currentYear]);

  const handleSelect = (year) => {
    setSelectedYear(year);
    setIsFocused(false);
  };

  return (
    <Form.Group className="floating-label-group">
      <Form.Label
        className={`floating-label ${isFocused || selectedYear ? 'floating' : ''}`}
      >
        Select Year
      </Form.Label>
      <DropdownButton
        id="dropdown-year-selector"
        title={selectedYear}
        variant="secondary"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className='dropdown-top'
      >
        <div style={{ maxHeight: '200px', overflowY: 'auto'}}>
          {years.map((year, index) => (
            <Dropdown.Item key={index} onClick={() => handleSelect(year)}>
              {year}
            </Dropdown.Item>
          ))}
        </div>
      </DropdownButton>
    </Form.Group>
  );
}

export default YearSelector;
