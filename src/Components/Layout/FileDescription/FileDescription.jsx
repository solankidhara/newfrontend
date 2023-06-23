import classes from './FileDescription.module.css';

const FileDescription = (props) => {
      return (
            <div className={classes.description}>
                  <label>{props.title}</label>
                  <p>{props.description}</p>
            </div>
      );
};

export default FileDescription;
