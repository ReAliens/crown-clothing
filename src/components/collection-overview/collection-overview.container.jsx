import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionFetching } from '../../redux/shop/shop.selector';
import WithSpinner from '../with-spinner/with-spinner.component'
import CollectionOverview from './collection-overview.component'


const mapStateToPrpos = createStructuredSelector({
    isFetched: selectCollectionFetching
})

const CollectionOverviewContainer = compose(
    connect(mapStateToPrpos),
    WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;