/*esling no-console: "error"*/
require('normalize.css/normalize.css');
require('materialize-css/dist/css/materialize.min.css');
require('materialize-css/dist/js/materialize.min.js');
require('styles/App.css');

import React from 'react';
import Sound from './Sound';

//let yeomanImage = require('../images/yeoman.png');
let config = require('config');
let sounds = config.default.sounds || {};
let no = 1;

class AppComponent extends React.Component {
  render() {
    return (
      <div className="container">
				<div className="row">
					{Object.keys(sounds).map(function(key) {
						return (<Sound no={no++} label={key} file={sounds[key]} />);
					}, this)}
				</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
