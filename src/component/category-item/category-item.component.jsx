import './category-items.styles.scss';

const CategoryItem =({category}) =>{
  const {imageUrl,title} = category;
  return(
    <div  className="category-container">
     <div className='background-image' style={{
       backgroundImage:`url(${imageUrl})`

     }}/>
      <div className="category-body-container">
        <h2 class='category-item-comp-title'>{title}</h2>
        <p>Shop Now</p>

      </div>
    </div>
  )

}

export default CategoryItem;
