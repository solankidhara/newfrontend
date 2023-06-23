import { Container } from 'react-bootstrap';
import { Base_URl } from '../../../app-environment';
import classes from './IndexFooter.module.css';

const IndexFooter = (props) => {
      return (
            <div className={'container-fluid g-0 d-flex align-items-center ' + classes.bg}>
                  <Container className="d-flex flex-wrap justify-content-center align-items-center">
                        <div className={classes['content-container']}>
                              <h6 className={'my-4 ' + classes.title}>{props.title}</h6>
                              <p className={'my-4 ' + classes.content}>{props.children}</p>
                        </div>
                        <div className={classes['img-container']}>
                              <img alt="footer" className="img-fluid" src={Base_URl+props.imgPath} />
                        </div>
                  </Container>
            </div>
      );
};

export default IndexFooter;
