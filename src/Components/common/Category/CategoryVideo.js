import { useNavigate } from 'react-router-dom';
import { Base_URl } from '../../../app-environment';
import classes from './CategoryImage.module.css';

const CategoryVideo = (props) => {
      const navigate = useNavigate()

      const clickHandler = () => {
        navigate("/video"+"/search/"+props?.title)
      }

      return (
            <div className={classes.thumbnail} onClick={clickHandler}>
                  <div className="d-flex flex-column justify-content-center">
                        <div className={classes['tn-img']}>
                              <img alt={props.title + ' thumbnail'} src={Base_URl+props.thumbnail} width="180" height="180"/>
                        </div>
                        <p className={classes['thumbnail-title']}>{props.title}</p>
                  </div>
            </div>
      );
};

export default CategoryVideo;
