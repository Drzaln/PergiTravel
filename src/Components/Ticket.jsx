import React from 'react'
import Card from './Card'
import BottomActionBar from './BottomActionBar'

export default function Ticket () {
  return (
    <div>
      <Card
        FromPwtShort='CGK'
        FromClock='20.35'
        FromCity='Jakarta'
        FromBnd='Soekarno Hatta'
        estimate='2h 05m'
        flight='Langsung'
        ToPwtShort='DPS'
        ToClock='00.35'
        ToCity='Bali'
        ToBnd='Ngurah Rai Int'
        hrgNormal='1.502.050'
        hrgBank='Rp 1.472.009'
      />
      <Card
        FromPwtShort='CGK'
        FromClock='20.35'
        FromCity='Jakarta'
        FromBnd='Soekarno Hatta'
        estimate='2h 05m'
        flight='Langsung'
        ToPwtShort='DPS'
        ToClock='00.35'
        ToCity='Bali'
        ToBnd='Ngurah Rai Int'
        hrgNormal='1.502.050'
        hrgBank='Rp 1.472.009'
      />
      <Card
        FromPwtShort='CGK'
        FromClock='20.35'
        FromCity='Jakarta'
        FromBnd='Soekarno Hatta'
        estimate='2h 05m'
        flight='Langsung'
        ToPwtShort='DPS'
        ToClock='00.35'
        ToCity='Bali'
        ToBnd='Ngurah Rai Int'
        hrgNormal='1.502.050'
        hrgBank='Rp 1.472.009'
      />
      <BottomActionBar />
    </div>
  )
}
