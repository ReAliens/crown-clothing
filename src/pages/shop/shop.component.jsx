import React from 'react';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component.jsx';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { fetchCollectionStartAsync } from '../../redux/shop/shop.action';
import { selectCollectionLoaded, selectCollectionFetching } from '../../redux/shop/shop.selector';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionStartAsync } = this.props;
        fetchCollectionStartAsync();
    }

    render() {
        const { match, isCollectionLoaded, isFetched } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isFetched} {...props} />} />
                <Route path={`${match.path}/:collectionID`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />} />
            </div>
        );

    }

}
const mapStateToProps = createStructuredSelector({
    isCollectionLoaded: selectCollectionLoaded,
    isFetched: selectCollectionFetching
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);