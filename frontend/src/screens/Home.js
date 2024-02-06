import * as React from 'react';

import FormHome from '../components/Form'
import GridHome from '../components/GridHome'
import OverView from '../components/OverView'




export default function ResponsiveGrid() {
  return (
    <div style={{display:'flex',flexDirection:'row', flexGrow: 1}}>
        <FormHome />
        <GridHome />
        <OverView />
    </div>
  );
}
