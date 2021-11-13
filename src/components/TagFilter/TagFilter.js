import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { getSelectedTag } from '../../redux/posts/postsSelector';
import { changeTag } from '../../redux/posts/postsActions';


const options = [
    { label: 'HTML', value: 'html'},
    { label: 'CSS', value: 'css'},
    { label: 'JavaScript', value: 'js'},
    { label: 'React', value: 'react'},
];

const findOption = value => options.find(el => el === value);

const TagFilter = ({ currentTag = null, onChangeTag = () => null }) => (
    <div style={{ width: 200 }}>
        <Select options={options} value={findOption(currentTag)} onChange={onChangeTag} />
    </div>
);

const mapStateToProps = (state) => ({
    currentTag: getSelectedTag(state),
})

const mapDispatchToProps = dispatch => ({
    onChangeTag: tag => dispatch(changeTag(tag.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TagFilter);