import classes from './PlanTemplate.module.css';

const PlanTemplate = (props) => {
      return (
            <div
                  className={
                        'container-fluid d-flex justify-content-center align-items-center flex-wrap ' +
                        classes.template
                  }
            >
                  {props.children}
            </div>
      );
};

export default PlanTemplate;
