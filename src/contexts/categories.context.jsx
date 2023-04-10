import { createContext, useState ,useEffect} from 'react';
import { addCollectionAndDocuments, getCategoriesAndDocuments } from '../components/utils/firebase/firebase.utils';
import PRODUCTS from '../shop-data.json';

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async ()=>{
            const categoryMap =  await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
            console.log(categoryMap);
        } 
        getCategoriesMap();
    },[]);

    const value = {categoriesMap}
    
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}