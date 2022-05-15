import './categorys-menu.styles.scss'
import CategoryItem from '../category-item/category-item.component.jsx'

const CategorysMenu = ({categories})=>{

return (
  <div className="categories-container">
  {categories.map((category)=>(
    <CategoryItem key={category.id} category={category}/>
    )
  )}

  </div>
)


}

export default CategorysMenu;
