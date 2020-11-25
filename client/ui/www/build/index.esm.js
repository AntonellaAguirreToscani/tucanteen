import './index-06e892ec.js';
import { A as ActiveRouter } from './active-router-9893bd2d.js';
import './match-path-760e1797.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
