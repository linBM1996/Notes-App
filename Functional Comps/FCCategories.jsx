import { StyleSheet, View } from 'react-native';
import FCCategory from './FCCategory';

export default function FCCategories(props) {

    let categoriesStr = props.CategoriesList.map((category, ind) => {
        return <FCCategory id={category.id}
            name={category.name}
            key={category.id}/>;
    }
    )

    return (
        <View>
            {categoriesStr}
        </View>
    )
}