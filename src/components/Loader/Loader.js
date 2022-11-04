import { ColorRing } from 'react-loader-spinner';
import css from './Loader.module.css'

const Loader = () => {
    return (
        <div className={css.loaderBox}>
            <ColorRing />
        </div>
  );
};

export default Loader;
