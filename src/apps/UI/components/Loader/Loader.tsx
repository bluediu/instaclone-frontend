/* Statics */
import LOADER_IMG from '/img/icon-loader.png';

import './Loader.scss';

export const Loader = () => {
  return (
    <div className="main-loader">
      <img src={LOADER_IMG} alt="loading..." />
    </div>
  );
};
