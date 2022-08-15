import CategoryItem from '../category-item/category-item.component';

import '../directory/directory.style.scss';


const Directory = ({ categories }) => {
    return (
        <div className="categories-container">
            {
                categories.map((category) => (
                    <CategoryItem {...category} key={category.id} />
                ))
            }
        </div>
    )
}

export default Directory;