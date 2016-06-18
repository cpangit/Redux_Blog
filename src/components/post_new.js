import React, {Component, PropTypes} from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        // Blog post has been created, navigate user to the index
        // We navigate by calling this.context.router.push with the new path to navigate to
        this.context.router.push('/');
      });
  }

  render() {
    const handleSubmit = this.props.handleSubmit;
    const {fields: {title, categories, content}} = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a New Post</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <input type="text" className="form-control" placeholder="Title" {...title} />
          <div className="text-help">{title.touched ? title.error : ''}</div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <input type="text" className="form-control" placeholder="Categories" {...categories} />
          <div className="text-help">{categories.touched ? categories.error : ''}</div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <textarea className="form-control" placeholder="Content" {...content} />
          <div className="text-help">{content.touched ? content.error : ''}</div>
        </div>

        <button type="submit" className="btn btn-primary" >Submit</button>
        <Link to="/" className="btn btn-danger" > Cancel </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  // If error object key matches the fields names, if there's a value then it's not valid
  if (!values.title) {
    errors.title = 'Enter a Username';
  }

  if (!values.categories) {
    errors.categories = 'Enter categories';
  }

  if (!values.content) {
    errors.content = 'Enter some content';
  }

  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate,
}, null, {createPost})(PostsNew);
