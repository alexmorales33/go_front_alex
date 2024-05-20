import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {View, Dimensions} from 'react-native';
import {GridProps} from './types';
import {styles} from './styles';

const GridItem: React.FC<{size: number}> = React.memo(({size}) => {
  return <View style={[styles.gridItem, {width: size, height: size}]} />;
});

const Grid: React.FC<GridProps> = ({numItems}) => {
  const [dimension, setDimension] = useState(0);

  const calculateDimension = useCallback(() => {
    const {width} = Dimensions.get('window');
    const columns = numItems > 0 ? Math.ceil(Math.sqrt(numItems)) : 1;
    return Math.floor(width / columns);
  }, [numItems]);

  useEffect(() => {
    const updateSize = () => {
      const newDimension = calculateDimension();
      if (dimension !== newDimension) {
        setDimension(newDimension);
      }
    };

    updateSize();
    const subscription = Dimensions.addEventListener('change', updateSize);

    return () => subscription.remove();
  }, [calculateDimension, dimension]);

  const gridItems = useMemo(() => {
    return Array.from({length: numItems}, (_, index) => (
      <GridItem key={index} size={dimension} />
    ));
  }, [numItems, dimension]);

  return <View style={styles.gridContainer}>{gridItems}</View>;
};

export default Grid;
