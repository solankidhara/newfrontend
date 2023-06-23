import classes from './Option.module.css';

const Option = (props) => {
      return (
            <label
                  className={
                        classes.text +
                        ' d-flex align-items-center justify-content-center ' +
                        props['bs-class']
                  }
            >
                  <img className="mx-2" src={`./images/${props.icon}.png`} alt={props.icon} />
                  {props.children}
            </label>
      );
};

export default Option;
