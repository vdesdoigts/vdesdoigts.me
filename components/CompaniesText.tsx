'use client'
import { TypeAnimation } from 'react-type-animation';

export default function CompaniesText() {
  return (
    <TypeAnimation
      preRenderFirstString={true}
      sequence={[
        'Orpi.',
        4000,
        '20 Minutes.',
        4000,
        'Dayuse.',
        4000,
      ]}
      wrapper="span"
      cursor={false}
      repeat={Infinity}
    />
  )
  }
