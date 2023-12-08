import React, { useState } from 'react';
import {
  RadioInputContainer,
  Input,
  Label,
  Selection,
  FirstCheckedSelection,
  SecondCheckedSelection,
  ThirdCheckedSelection,
  FourthCheckedSelection,
  CheckedLabel,
  CheckedSelection
} from '../styles/radioButton';
import { Text1, Text2, Text3, Text4 } from '../texts/radioButtonText';


export const RadioInput: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('value-1');

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="radio-component">
      <RadioInputContainer className="radio-input">
        <Label>
          <Input
            value="value-1"
            name="value-radio"
            id="value-1"
            type="radio"
            checked={selectedOption === 'value-1'}
            onChange={handleOptionChange}
          />
          {selectedOption === 'value-1' ? (
            <CheckedLabel>CRM</CheckedLabel>
          ) : (
            <span>CRM</span>
          )}
          {selectedOption === 'value-1' && <FirstCheckedSelection className="selection"></FirstCheckedSelection>}
        </Label>
        <Label>
          <Input
            value="value-2"
            name="value-radio"
            id="value-2"
            type="radio"
            checked={selectedOption === 'value-2'}
            onChange={handleOptionChange}
          />
          {selectedOption === 'value-2' ? (
            <CheckedLabel>Dashboards de Gestão</CheckedLabel>
          ) : (
            <span>Dashboards de Gestão</span>
          )}
          {selectedOption === 'value-2' && <SecondCheckedSelection className="selection"></SecondCheckedSelection>}
        </Label>
        <Label>
          <Input
            value="value-3"
            name="value-radio"
            id="value-3"
            type="radio"
            checked={selectedOption === 'value-3'}
            onChange={handleOptionChange}
          />
          {selectedOption === 'value-3' ? (
            <CheckedLabel>Gestão Financeira</CheckedLabel>
          ) : (
            <span>Gestão Financeira</span>
          )}
          {selectedOption === 'value-3' && <ThirdCheckedSelection className="selection"></ThirdCheckedSelection>}
        </Label>
        <Label>
          <Input
            value="value-4"
            name="value-radio"
            id="value-4"
            type="radio"
            checked={selectedOption === 'value-4'}
            onChange={handleOptionChange}
          />
          {selectedOption === 'value-4' ? (
            <CheckedLabel>Tecnologia</CheckedLabel>
          ) : (
            <span>Tecnologia</span>
          )}
          {selectedOption === 'value-4' && <FourthCheckedSelection className="selection"></FourthCheckedSelection>}
        </Label>
        <Selection className="selection">
          {selectedOption === 'value-1' && <CheckedSelection className="selection"></CheckedSelection>}
          {selectedOption === 'value-2' && <CheckedSelection className="selection"></CheckedSelection>}
          {selectedOption === 'value-3' && <CheckedSelection className="selection"></CheckedSelection>}
          {selectedOption === 'value-4' && <CheckedSelection className="selection"></CheckedSelection>}
        </Selection>
      </RadioInputContainer>

      <div className="radio-carousel">
        <div className="content">
          {selectedOption === 'value-1' && (
            <div>
              <Text1 />
            </div>
          )}
          {selectedOption === 'value-2' && (
            <div>
              <Text2 />
            </div>
          )}
          {selectedOption === 'value-3' && (
            <div>
              <Text3 />
            </div>
          )}
          {selectedOption === 'value-4' && (
            <div>
              <Text4 />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};