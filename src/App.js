import { Button } from '@mui/material';
import React, { useState } from 'react';
import MealDescription from './Component/MealDescription';
import MealInfo from './Component/MealInfo';

function App() {
  const [buttonFlag, setButtonFlag] = useState(true);
  return (
    <div>
      <Button
        onClick={() => {
          setButtonFlag(!buttonFlag);
        }}
      >
        Switch Back
      </Button>
      {buttonFlag ? <MealDescription /> : <MealInfo />}
    </div>
  );
}

export default App;
