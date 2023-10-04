import React from 'react'

const LanguageDropdown = ({onChange}) => {
  return (
    <div>
      <select onChange={onChange}>
    

       <option>Select Language</option>
       <option value={'en'}>English</option>
       <option value={'tr'}>Türkçe</option>
       <option value={'alm'}>Deutsch</option>
       <option value={'fr'}>French</option>
       
      </select>
    </div>
    
  )
}

export default LanguageDropdown
