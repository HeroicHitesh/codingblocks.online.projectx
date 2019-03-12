import Component from '@ember/component';
import { alias } from '@ember-decorators/object/computed'
import { inject as service } from '@ember-decorators/service'

export default class AvailableRunCardComponent extends Component {
  classNames = ['c-layout-card', 'col-md-4', 'col-sm-6']

  @service session

  @alias('run.course') course
}
