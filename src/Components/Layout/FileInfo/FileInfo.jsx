import classes from './FileInfo.module.css';

const FileInfo = (props) => {
      return (
            <div className="d-flex flex-column">
                  <div className={'d-flex ' + classes.label}>
                        <label>Size</label>
                        <span className="mx-2">{props.size}</span>
                  </div>
                  <div className={'d-flex ' + classes.label}>
                        <label>File Type</label>
                        <span className="mx-2">{props.extension}</span>
                  </div>
                  <div className={'d-flex ' + classes.label}>
                        <label>Licence Type</label>
                        <span className="mx-2">{props.licence}</span>
                  </div>
            </div>
      );
};

export default FileInfo;
