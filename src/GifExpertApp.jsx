import {useState} from 'react'
import { AddCategory, GifGrid } from './components/'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One punch','Dragon Ball'])

  const onAddCategory = (newCategory) => {
    if (categories.find((value) =>newCategory === value)) return;
    setCategories([newCategory, ...categories]);

  }


  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory 
          // setCategories = {setCategories}
          onNewCategory = {onAddCategory}
        />
        {
          categories.map((category,i) => 
            <GifGrid 
              key= {category} 
              category={category} 
            />
          )
        }
    </>
  )
}
