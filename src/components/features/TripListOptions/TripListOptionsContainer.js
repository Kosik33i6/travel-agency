import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {
  getAllFilters,
  changeSearchPhrase,
  changeSearchDuration,
  addSearchingTag,
  removeSearchingTag,
} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeSearchDuration: (type, value) => dispatch(changeSearchDuration({type, value})),
  addSearchingTag: tag => dispatch(addSearchingTag(tag)),
  removeSearchingTag: tag => dispatch(removeSearchingTag(tag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
