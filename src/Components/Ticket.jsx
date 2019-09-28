import React, { useEffect, useState } from 'react'
import Card from './Card'
import BottomActionBar from './BottomActionBar'
import data from '../Data/Data.json'

export default function Ticket () {
  const [items, setItems] = useState([])
  useEffect(() => {
    const result = data
    setItems(result.data)
  }, [])
  return (
    <div>
      {items &&
        items.length > 0 &&
        items.map(item => {
          return (
            <div key={item.id}>
              <Card
                FromPwtShort={item.frombndShort}
                FromClock={item.fromTime}
                FromCity={item.fromPlace}
                FromBnd={item.frombndLong}
                estimate={item.time}
                flight={item.flight}
                ToPwtShort={item.tobndShort}
                ToClock={item.toTime}
                ToCity={item.toPlace}
                ToBnd={item.tobndLong}
                hrgNormal={item.normalPrice}
                hrgBank={item.bankPrice}
                to={`/detail/${item.id}`}
                store={item}
              />
            </div>
          )
        })}
      <BottomActionBar />
    </div>
  )
}
