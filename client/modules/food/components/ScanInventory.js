import React from 'react'

import { Button } from 'react-bootstrap';
import RegisterFoodItem from './inventory/RegisterFoodItem'


const ScanInventory = () => (
      <section className="content">
        <div className="row" style={{ textAlign: 'center'}}>
          <RegisterFoodItem />
          <Button className='btn-success' style={{ color: 'white', width: '10em', margin: 'auto', padding: '50px', fontSize: '300%', marginBottom: '20px' }}>Put item into stock</Button>
          <br />
          <Button className='btn-success' style={{ color: 'white', width: '10em', margin: 'auto', padding: '50px', fontSize: '300%' }}>Take item</Button>
        </div>
      </section>
)

export default ScanInventory